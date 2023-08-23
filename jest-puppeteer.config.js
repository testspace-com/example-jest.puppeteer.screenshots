process.env.PUPPETEER_DISABLE_HEADLESS_WARNING = true;
module.exports = {
    launch: {
      args: [
        '--window-size=1920,1080'
      ],
      headless: process.env.HEADLESS !== 'false',
      //slowMo: 300, // represents 300ms
    },
    browserContext: 'incognito' // all tests have a separate, isolated context
}