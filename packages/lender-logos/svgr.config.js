const path = require('path');

module.exports = {
  typescript: true,
  template: require('./build/template'),
  icon: true,
  jsx: {
    babelConfig: {
      plugins: [path.resolve(__dirname, 'build/babel-plugin')],
    },
  },
};
