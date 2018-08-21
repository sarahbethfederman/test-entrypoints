var config = require('./jest.config.js');
config.setupTestFrameworkScriptFile = '<rootDir>/react-15-test-framework.setup.ts';

module.exports = config;
