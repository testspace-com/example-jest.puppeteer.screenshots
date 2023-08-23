// jest-custom-global-setup.js
const setupPuppeteer = require('jest-environment-puppeteer/setup')

const fs = require('fs');
const screenshotsListFile = './screenshots-list.txt';

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig)

  // Custom global setup
  fs.rmSync("screenshots", { recursive: true, force: true });
  fs.mkdirSync("screenshots");
  fs.openSync(screenshotsListFile, 'w');
}