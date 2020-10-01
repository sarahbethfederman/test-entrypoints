const fs = require('fs');
const path = require('path');

module.exports = function (pkgFolderName, compiledFolder, distPath, outFolder) {
  fs.readdir(compiledFolder, { withFileTypes: true }, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
      if (file.isFile() && file.name !== 'index.tsx') {
        const fileName = path.basename(file.name, '.tsx');

        fs.mkdir(`${outFolder}/${fileName}`, { recursive: true }, (err) => {
          if (err) throw err;
          const packageJson = `{
            "main": "dist/${pkgFolderName}.cjs.js",
            "module": "dist/${pkgFolderName}.esm.js",
            "preconstruct": {
              "source": "${distPath}/${fileName}"
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
