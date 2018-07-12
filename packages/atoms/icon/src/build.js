const SVGSpriter = require('svg-sprite');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const spritify = new SVGSpriter({
  dest: 'dist',
  mode: {
    symbol: true,
    inline: true,
  },
});

fs.readdir(`${__dirname}/icons`, (err, files) => {
  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      spritify.add(
        path.resolve(`${__dirname}/icons/${file}`),
        file,
        fs.readFileSync(`${__dirname}/icons/${file}`, { encoding: 'utf-8' })
      );
    }
  });

  spritify.compile(function(error, result, data) {
    for (var mode in result) {
      for (var resource in result[mode]) {
        fs.writeFileSync(`../../website/static/sprite.symbol.svg`, result[mode][resource].contents);
      }
    }
  });
});
