module.exports = {
  testURL: 'http://localhost:6006/',
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  setupFiles: ['<rootDir>/test-environment-setup.ts'],
  setupTestFrameworkScriptFile: '<rootDir>/test-framework-setup.ts',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@lendi-ui/(.*)-utils$': '<rootDir>/utils/$1-utils/src',
    '^@lendi-ui/(.*)$': '<rootDir>/packages/$1/src',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.tests.json',
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
