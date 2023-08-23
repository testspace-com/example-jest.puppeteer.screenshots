/**
 * @name Testspace Demo test
 * @desc Searches Testspace demo for "listing" and expected "text"
 */

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Testspace Demo', () => {

    beforeAll(async () => {
        await page.setViewport({ width: 1440, height: 1080 });
    });

    test('should match Testspace demo project', async () => {
        await page.goto("https://s2.testspace.com/projects/testspace-com:demo");
        const screenshot = await page.screenshot({
            clip: {
                x: 0,
                y: 0,
                width: 1325,
                height: 260
            }
        });
        console.log("this test fails because an exemption was remove when the image was captured");
        expect(screenshot).toMatchImageSnapshot();
    });

    test('should match Testspace demo project Specs Listing', async () => {
        await page.goto("https://s2.testspace.com/projects/testspace-com:demo/spaces/main/specs");
        const screenshot = await page.screenshot({
            clip: {
                x: 0,
                y: 0,
                width: 1150,
                height: 700
            }
        });
        console.log("the Specs listing should match");
        expect(screenshot).toMatchImageSnapshot();
    });

});
