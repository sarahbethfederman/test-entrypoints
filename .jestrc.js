module.exports = {
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  setupFiles: ['<rootDir>/test-shim.js', '<rootDir>/test-setup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.tests.json',
    },
  },
};
