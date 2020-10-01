require('@babel/register')({ extensions: ['.tsx', '.ts', '.js'], rootMode: 'upward-optional' });
const babelPluginWrapper = require('@lendi-ui/babel-plugin-wrapper/src');

module.exports = {
  typescript: true,
  template: require('./build-scripts/template'),
  icon: true,
  dimensions: false,
  expandProps: false,
  jsx: {
    babelConfig: {
      plugins: [
        [
          babelPluginWrapper,
          {
            wrapper: 'IconWrapper',
          },
        ],
      ],
    },
  },
};
