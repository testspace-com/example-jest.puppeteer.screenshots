module.exports = {
    launch: {
      args: [
        '--window-size=1920,1080'
      ],
      headless: process.env.HEADLESS !== 'false',
      //slowMo: 300, // represents 300ms
    }
}