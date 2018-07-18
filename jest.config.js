module.exports = {
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  setupFiles: ['<rootDir>/test-environment-setup.ts'],
  setupTestFrameworkScriptFile: '<rootDir>/test-framework-setup.ts',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.tests.json',
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
