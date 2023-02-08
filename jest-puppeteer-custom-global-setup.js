// jest-custom-global-setup.js
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

const fs = require('fs');
const screenshotsListFile = './screenshots-list.txt';

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig)

  // Custom global setup
  fs.rmSync("screenshots", { recursive: true, force: true });
  fs.mkdirSync("screenshots");
  fs.openSync(screenshotsListFile, 'w');
}