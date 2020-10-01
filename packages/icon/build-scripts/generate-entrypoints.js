const path = require('path');
const fs = require('fs');

const distPath = '../src/icons-compiled';
const compiledFolder = path.resolve(__dirname, distPath);
const outFolder = path.resolve(__dirname, '..');

function generateEntrypoints(pkgFolderName, compiledFolder, distPath, outFolder) {
  fs.readdir(compiledFolder, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    console.log(files.length - 1);
    files.forEach((file, index) => {
      if (file.isFile() && file.name !== 'index.tsx') {
        const fileName = path.basename(file.name, '.tsx');
        // console.log(index, fileName);

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
}

generateEntrypoints('icon', compiledFolder, distPath, outFolder);
