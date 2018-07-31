module.exports = {
  testURL: 'http://localhost:6006/',
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  setupFiles: ['<rootDir>/test-environment-setup.ts'],
  setupTestFrameworkScriptFile: '<rootDir>/test-framework-setup.ts',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@auscred/(.*)$': '<rootDir>/packages/$1/src',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.tests.json',
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
