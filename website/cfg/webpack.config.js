const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
  config.devtool = 'source-map';

  // transpile typescript
  config.resolve.extensions = ['.ts', '.tsx', '.js'];
  config.resolve.mainFields = ['source', 'module', 'nextjs:main', 'main'];
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    options: {
      configFileName: '../tsconfig.stories.json',
    },
  });
  config.plugins.push(new CheckerPlugin());

  // document typescript props
  // config.plugins.push(new TSDocgenPlugin());

  return config;
};
