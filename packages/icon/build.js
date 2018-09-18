const fs = require('fs');
const path = require('path');
const svgr = require('@svgr/core');

const startPath = path.join(__dirname, '/src/icons');
const distPath = path.join(__dirname, '/src/icons-compiled');

const stripFileExtension = (component) => component.replace(/\.svg/, '');

const camelCase = (component) =>
  stripFileExtension(component)
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/ (.)/g, ($1) => $1.toUpperCase())
    .replace(/ /g, '');

function generateReactFromSvg(svgr, svgCode, componentName) {
  return new Promise((resolve) => {
    svgr.default(svgCode, { icon: true }, { componentName: camelCase(componentName) }).then((code) => {
      resolve({
        code,
        fileName: stripFileExtension(componentName),
      });
    });
  });
}

function writeIconFile({ code, fileName }) {
  fs.writeFileSync(`${distPath}/${fileName}.tsx`, code, (err) => {
    if (err) throw err;
  });
}

const writeExportFile = (files) => `
import * as React from 'react';

export type IconMap = {
  ${files
    .map(camelCase)
    .map((file) => `${file}: React.SFC,\n\t`)
    .join('')}
}

export interface SvgProps {
  fill: string;
}

export const Icons:IconMap = {
  ${files.map((file) => `\t${camelCase(file)}: require('./${stripFileExtension(file)}').default,\n`).join('')}
}; `;

fs.readdir(startPath, async (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath);
  }

  const fileList = files.filter((file) => file.endsWith('.svg'));

  const svgList = fileList.map(function(file) {
    const fileStream = fs.readFileSync(`${startPath}/${file}`, { encoding: 'utf-8' });
    return generateReactFromSvg(svgr, fileStream, file);
  });

  fs.writeFileSync(`${distPath}/index.ts`, writeExportFile(fileList), (err) => {
    if (err) throw err;
  });

  Promise.all(svgList)
    .then((resolvedFiles) => {
      resolvedFiles
        .map(({ code, fileName }) => {
          // Add types to the generated components
          code = code
            .replace(/import React from 'react';/, `import * as React from \'react\';`)
            .replace(/{\.\.\.props}/, '')
            .replace(/\(props\)/, '()');

          const match = code.match(/const ([\w])*/)[0];

          return {
            code: code.replace(match, `${match}: React.SFC`),
            fileName,
          };
        })
        .map(writeIconFile);
    })
    .catch((err) => {
      console.error(err);
    });
});
