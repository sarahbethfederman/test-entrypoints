const fs = require('fs');
const path = require('path');
const svgr = require('@svgr/core');

const utilTemplate = require('./util.template');
const lenderLogoTemplate = require('./lender-logos.template');
const indexTemplate = require('./index.template');
const util = require('./util');

const SOURCE_PATH = path.join(__dirname, '../src/lender-logos');
const DESTINATION_PATH = path.join(__dirname, '../src/lender-logos-compiled');

function generateReactFromSvg(svgr, svgCode, componentName) {
  return svgr
    .default(svgCode, { lenderLogo: true }, { componentName: util.pascalCase(componentName) })
    .then((code) => ({
      code: lenderLogoTemplate(code),
      fileName: util.stripFileExtension(componentName),
    }));
}

fs.readdir(SOURCE_PATH, async (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  fileList = files.filter((file) => file.endsWith('.svg'));

  if (!fs.existsSync(DESTINATION_PATH)) {
    fs.mkdirSync(DESTINATION_PATH);
  }

  const svgList = fileList.map(function(file) {
    const fileStream = fs.readFileSync(`${SOURCE_PATH}/${file}`, { encoding: 'utf-8' });

    return generateReactFromSvg(svgr, fileStream, file);
  });

  fs.writeFileSync(`${DESTINATION_PATH}/util.ts`, utilTemplate, (err) => {
    if (err) throw err;
  });

  fs.writeFileSync(`${DESTINATION_PATH}/LenderLogo.ts`, indexTemplate(fileList), (err) => {
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
            .replace(/\(props\)/, '(props)')
            .replace(/<svg/, '<LenderLogoWrapper {...props}>\n\t<svg')
            .replace(/<clipPath[\s\S]*clipPath>\s/, '')
            .replace(/clipPath=".+?"\s/, '')
            .replace('</svg>', '</svg>\n</LenderLogoWrapper>')
            .replace(/export default ([\w]+)/, 'export {$1}');

          const match = code.match(/const ([\w])*/)[0];

          return {
            code: code.replace(match, `${match}: React.FC<LenderLogoProps>`),
            fileName,
          };
        })
        .map(({ code, fileName }) => {
          fs.writeFileSync(`${DESTINATION_PATH}/${fileName}.tsx`, code, (err) => {
            if (err) throw err;
          });
        });
    })
    .catch((err) => {
      console.error(err);
    });
});
