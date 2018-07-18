const SVGSpriter = require('svg-sprite');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const directory = `${__dirname}/src/icons`;

const spritify = new SVGSpriter({
  dest: 'dist',
  mode: {
    symbol: true,
    inline: true,
  },
});

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.svg')) {
      spritify.add(
        path.resolve(`${directory}/${file}`),
        file,
        fs.readFileSync(`${directory}/${file}`, { encoding: 'utf-8' })
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
