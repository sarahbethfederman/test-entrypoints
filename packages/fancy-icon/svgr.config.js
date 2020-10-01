// note: https://github.com/preconstruct/preconstruct/issues/324
require('@babel/register')({ extensions: ['.tsx', '.ts', '.js'], rootMode: 'upward-optional' });
const babelPluginWrapper = require('@lendi-ui/babel-plugin-wrapper/src');

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
