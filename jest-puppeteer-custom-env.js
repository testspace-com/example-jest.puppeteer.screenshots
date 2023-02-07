// custom-environment.js
const PuppeteerEnvironment = require('jest-environment-puppeteer');
const fs = require('fs');

// Configure
const testDir                      = './tests'
const imageSnapshotsDir            = testDir+'/__image_snapshots__';
const imageSnapshotsDiffOutputDir  = imageSnapshotsDir+'/__diff_output__';

const screenshotsDir               = 'screenshots';
const screenshotsListFile          = './screenshots-list.txt';

class CustomEnvironment extends PuppeteerEnvironment {

    async handleTestEvent(event, state) {  // eslint-disable-line no-unused-vars

        switch (event.name) {

            case "test_fn_failure":
                /*
                   Check for browser launch with no goto URL yet. Empty page screenshoot not useful, no capture.
                */
                if (this.global.page.url().includes("about:blank")) return; // NO IMAGE TO CAPTURE

                var dirName = screenshotsDir + "/" + state.currentlyRunningTest.parent.name.replace(/[^\w]/g, '');
                var fileName = dirName + "/" + state.currentlyRunningTest.name.replace(/[^\w]/g, '_') + ".png";
                fs.mkdirSync(dirName, {recursive: true});

                /*
                   Check for auto-generated Diff Image. If exist will be moved for publishing.
                */
                if (fs.existsSync(imageSnapshotsDiffOutputDir)) {
                    var files = fs.readdirSync(imageSnapshotsDiffOutputDir);
                    if (files.length > 0 ){
                        // Moving diff image to screenshots folder
                        fs.renameSync(imageSnapshotsDiffOutputDir+"/"+files[0],fileName);
                        fs.appendFileSync( screenshotsListFile, '"['+state.currentlyRunningTest.parent.name+']+'+fileName+'{screenshot diff}"' + "\n");
                        return; // IMAGE MOVED
                    }
                }

                /*
                   If page active, but no auto-generated "Diff" image, capture current screen
                */
                await this.global.page.screenshot({ path: fileName});
                fs.appendFileSync( screenshotsListFile, '"['+state.currentlyRunningTest.parent.name+']+'+fileName+'{screenshot}"' + "\n");

                break;
         }
    }
}

module.exports = CustomEnvironment;