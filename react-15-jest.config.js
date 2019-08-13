var config = require('./jest.config.js');
config.setupTestFrameworkScriptFile = '<rootDir>/react-15-test-framework.setup.ts';
var newConfig = {
  ...config,
  testPathIgnorePatterns: [...config.testPathIgnorePatterns, '/packages/carousel/'],
};

module.exports = newConfig;
