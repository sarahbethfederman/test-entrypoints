const babelPluginWrapper = require('@lendi-ui/asset-utils').babelPluginWrapper;

module.exports = {
  typescript: true,
  template: require('./build/template'),
  icon: true,
  dimensions: false,
  expandProps: false,
  jsx: {
    babelConfig: {
      plugins: [
        [
          babelPluginWrapper,
          {
            wrapper: 'FancyIconWrapper',
          },
        ],
      ],
    },
  },
};
