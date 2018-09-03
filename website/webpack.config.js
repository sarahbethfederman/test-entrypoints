const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkspaceMetadataPlugin = require('workspace-metadata-webpack-plugin').Plugin;

const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

const workspaceMetadata = require('./utils/workspaceMetadata');

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',

  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[contenthash].js',
  },

  resolve: {
    mainFields: ['source', 'module', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
              plugins: ['transform-object-rest-spread'],
            },
          },
          '@mdx-js/loader',
        ],
      },
    ],
  },

  plugins: [
    // delegate type-checking to a separate process for improved compile speed
    new ForkTsCheckerWebpackPlugin(),

    // create the HTML file
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),

    // copy static files referenced directly from the HTML file
    new CopyWebpackPlugin(['src/_redirects', 'src/favicon.ico']),

    // include workspace information as part of the bundle
    new WorkspaceMetadataPlugin({
      context: path.join(__dirname, '..'),
      transform: workspaceMetadata.transform,
      stringify: workspaceMetadata.stringify,
    }),
  ],

  serve: {
    // serve index.html as a SPA for all routes
    add: (app) => app.use(convert(history())),
  },
};