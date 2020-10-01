const fs = require('fs');
const path = require('path');

module.exports = function (compiledFolder, outFolder) {
  fs.readdir(compiledFolder, { withFileTypes: true }, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      if (file.isFile() && file.name !== 'index.tsx') {
        const fileName = path.basename(file.name, '.tsx');

        fs.mkdir(`${outFolder}/${fileName}`, { recursive: true }, (err) => {
          if (err) throw err;
          const packageJson = `{
            "main": "dist/lender-logos.cjs.js",
            "module": "dist/lender-logos.esm.js",
            "preconstruct": {
              "source": "../src/lender-logos-compiled/${fileName}"
            }
          }`;

          fs.writeFile(`${outFolder}/${fileName}/package.json`, packageJson, (err) => {
            if (err) throw err;
          });
        });
      }
    });
  });
};
