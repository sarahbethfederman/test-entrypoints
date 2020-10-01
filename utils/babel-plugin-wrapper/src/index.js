/* eslint-disable */

module.exports = function ({ types: t }) {
  // create a new jsx element using the wrapper option and using the jsx ast as its children
  // replace the jsx ast with the wrapped version
  return {
    visitor: {
      JSXElement: function (path, { opts }) {
        const { wrapper } = opts;
        if (!wrapper) {
          throw new Error('Must include wrapper option');
        }

        if (path.parent.type !== 'JSXElement' && path.node.openingElement.name.name !== wrapper) {
          const wrapperAttrs = [t.jsxSpreadAttribute(t.identifier('props'))];
          const openingElement = t.jsxOpeningElement(t.jsxIdentifier(wrapper), wrapperAttrs);
          const closingElement = t.jsxClosingElement(t.jsxIdentifier(wrapper));
          const newJsxElement = t.jsxElement(openingElement, closingElement, [path.node], false);

          path.replaceWith(newJsxElement);
        }
      },
    },
  };
};
