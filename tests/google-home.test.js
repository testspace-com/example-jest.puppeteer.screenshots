/**
 * @name Google Home test
 * @desc Searches google.com for "title" and expected "text"
 */

describe('Google Home', () => {
    beforeAll(async () => {
        await page.goto('https://google.com');
    });

    it('should be titled "Google"', async () => {
        console.log("to make the 'google title' test fail change the title");
        await expect(page.title()).resolves.toMatch('Google');
    });

    it('should display google text on page', async () => {
        console.log("to make the 'google text' test fail change the text to search for");
        const text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('google')
    });
});

