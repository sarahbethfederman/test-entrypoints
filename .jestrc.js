module.exports = {
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "setupFiles": [ "<rootDir>/test-shim.js","<rootDir>/test-setup.js"],
  "mapCoverage": true,
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/lib/"
  ],
  "testRegex": "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ]
};