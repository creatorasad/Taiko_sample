/* globals gauge*/
"use strict";
const path = require('path');
const { goto, screenshot, deleteCookies, openBrowser, closeBrowser, setConfig } = require('taiko');

setConfig({waitForNavigation: false})

const caps = {

  'LT:Options': {
    'platform': 'Windows 11',
    'build': 'Taiko build',
    'name': 'taiko Sample Test',
    // 'fixedIP' : '10.225.0.0',
    'user': "asad.ahmad",
    'accessKey': "dKTngz1vU6uHS8LxiCEfAW2m18TaioBrpKTzwtnoYrAmad115W",
    'network': true,
    "console" : true,
    'video':true
    // 'geoLocation' : "AU"

    //'tunnel': true
    // "tunnelName": "0869d9f6-824d-4f49-aaaa-0f9897ee0bb6"
  },


  'browserName': 'chrome',
  'browserVersion': 'latest-3'
  //'tunnel': true
  // "tunnelName": "b98ae20b-eefd-48d6-9a08-5eb31457b747"
  // // 'platform': 'macOS Mojave',
  // // 'platform': 'MacOS Catalina',
  // // 'version': '92.0',
  // 'platform': 'Windows 10',
  // 'build': 'Taiko Final 1',
  // 'name': 'Taiko Final 1',
  // // 'fixed_ip': '10.100.0.215',
  // // 'username': 'asadhussain',
  // // 'access_key': '9UgG1Vp9XLYcYzY0PSgGnFSGAc3hR6dgaQrb69DT0aaE3GspbJ',
  // 'user': 'hiteshmlambdatest',
  // 'accessKey': 'EVhnNat5N8cksDV6LJuUtXHcmK7Vdjpb5eZE4MBV5gK1FRrJSt'
  // 'username': 'asadhussain7042+',
  // 'access_key': '30epiZSMdylnhjvx3kpIbqwGcJsRZMxj2BhVMpbO9obHFZeUty'
};

beforeScenario(async() => {
// beforeScenario(async() => {
    console.log("====BROWSER CONNECTING====");
    await openBrowser({
          target: "wss://stage-cdp.lambdatest.com/taiko",
          // target: "ws://localhost:9222/devtools/browser/497517e5-ce81-44b5-8973-6f14403c446a",
          // target: "ws://localhost:9223/devtools/browser/032d62e6-4b13-4a2b-9bfe-187361e63707",
        },
        caps
    );
});

afterScenario(async () => {
// afterScenario(async () => {
  console.log('=====>AFTERSUITE');
  await closeBrowser();
});

// gauge.customScreenshotWriter = async function () {
//   const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'], `screenshot-${process.hrtime.bigint()}.png`);
//   await screenshot({ path: screenshotFilePath });
//
//   console.log("SCREENSHOT=====>", path.basename(screenshotFilePath));
//   return path.basename(screenshotFilePath);
// };
