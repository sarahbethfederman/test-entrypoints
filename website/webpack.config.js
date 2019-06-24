const path = require('path');
const marked = require('marked');
const renderer = marked.Renderer();
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkspaceMetadataPlugin = require('workspace-metadata-webpack-plugin').Plugin;

const convert = require('koa-connect');
const history = require('connect-history-api-fallback');

const workspaceMetadata = require('./utils/workspaceMetadata');

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  // TODO: Find IE11 safe alternative to cheap-module-eval-source-map
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : /*'cheap-module-eval-source-map'*/ 'none',

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
        test: /\.js$/,
        include: [
          require.resolve('acorn-jsx'),
          require.resolve('buble'),
          require.resolve('regexpu-core'),
          require.resolve('unicode-match-property-ecmascript'),
          require.resolve('unicode-match-property-value-ecmascript'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env']],
          },
        },
      },
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
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      // mimic process.env environment variables.
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

    // delegate type-checking to a separate process for improved compile speed
    new ForkTsCheckerWebpackPlugin(),

    // create the HTML file
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),

    // copy static files referenced directly from the HTML file
    new CopyWebpackPlugin([
      'src/_redirects',
      'src/_headers',
      'src/favicon.ico',
      { from: 'src/fonts/*', to: './fonts', flatten: true },
    ]),

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
