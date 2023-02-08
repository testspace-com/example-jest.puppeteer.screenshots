// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
    preset: "jest-puppeteer",
    // Indicates whether the coverage information should be collected
     collectCoverage: false,
    "reporters": [ "default", "jest-junit" ],
    // The root directory that Jest should scan for tests and modules within
    rootDir: ".",
    "testEnvironment": "./jest-puppeteer-custom-env.js",
    "globalSetup":     "./jest-puppeteer-custom-global-setup.js"
};