const path = require('path');
const fs = require('fs');

const amount = 808;

function generateIcons() {
  for (let i = 0; i < amount; i++) {
    const icon = `
      import React from 'react';

      const Icon${i} = () => <span>Icon${i}</span>;
      
      export default Icon${i};
    `;

    fs.writeFile(
      path.resolve(__dirname, `../src/icons/${i}.js`),
      icon,
      (err) => {
        if (err) throw err;
      }
    );
  }
}

generateIcons();

function generateEntrypoints() {
  for (let i = 0; i < amount; i++) {
    fs.mkdirSync(`${path.resolve(__dirname, '..')}/${i}`, { recursive: true });

    const packageJson = `{
      "main": "dist/icon.cjs.js",
      "module": "dist/icon.esm.js",
      "preconstruct": {
        "source": "../src/icons/${i}.js"
      }
    }`;

    fs.writeFileSync(
      `${path.resolve(__dirname, '..')}/${i}/package.json`,
      packageJson
    );
  }
}

generateEntrypoints();
