/* eslint-disable */

// extends the default svgr template (https://react-svgr.com/docs/custom-templates/)
function template({ types, template }, opts, { imports, interfaces, componentName, props, jsx, exports }) {
  const plugins = ['jsx'];

  if (opts.typescript) {
    plugins.push('typescript');
  }

  const typeScriptTpl = template.smart({ plugins });

  return typeScriptTpl.ast`
    ${imports}
    import { LenderLogoWrapper, LenderLogoProps } from '../LenderLogo';
    ${interfaces}

    function ${componentName}(props: LenderLogoProps) {
      return ${jsx};
    }
    
    ${exports}
  `;
}
module.exports = template;
