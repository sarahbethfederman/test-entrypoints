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
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.tests.json',
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
