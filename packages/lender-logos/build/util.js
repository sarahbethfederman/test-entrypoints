const stripFileExtension = (str) => str.replace(/\.svg/, '');

const camelCase = (str) =>
  stripFileExtension(str)
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]/g, '')
    .replace(/ (.)/g, ($1) => $1.toUpperCase())
    .replace(/ /g, '');

const pascalCase = (str) =>
  camelCase(str).replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1);
  });

module.exports = {
  stripFileExtension,
  camelCase,
  pascalCase,
};
