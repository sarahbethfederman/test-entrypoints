/* eslint-disable */

module.exports = function ({ types: t }) {
  // create a new jsx element using the lenderLogoWrapper and using the jsx ast as its children
  // replace the jsx ast with the wrapped version
  return {
    visitor: {
      JSXElement: function (path) {
        if (path.parent.type !== 'JSXElement' && path.node.openingElement.name.name !== 'LenderLogoWrapper') {
          const lenderLogoAttrs = [t.jsxSpreadAttribute(t.identifier('props'))];
          const openingElement = t.jsxOpeningElement(t.jsxIdentifier('LenderLogoWrapper'), lenderLogoAttrs);
          const closingElement = t.jsxClosingElement(t.jsxIdentifier('LenderLogoWrapper'));
          const newJsxElement = t.jsxElement(openingElement, closingElement, [path.node], false);

          path.replaceWith(newJsxElement);
        }
      },
    },
  };
};
