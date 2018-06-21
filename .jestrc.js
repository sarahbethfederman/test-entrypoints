module.exports = {
  testMatch: ["**/*.test.(ts|tsx|js)"],
  setupFiles: [
    "<rootDir>/test-shim.js",
    "<rootDir>/test-setup.js"
  ]
};