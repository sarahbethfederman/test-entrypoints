module.exports = {
  testURL: 'http://localhost:6006/',
  setupFiles: ['<rootDir>/test-environment-setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/test-framework-setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/.*/dist/', '<rootDir>/utils/.*/dist/'],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^@lendi-ui/(.*)-utils$': '<rootDir>/utils/$1-utils/src',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
