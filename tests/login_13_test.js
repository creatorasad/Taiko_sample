const { goto } = require('taiko');
const {getScreenshot} = require("../utils");
'use strict';

step('Navigate to login 13 <url>', async url => {
    await goto(url)

    getScreenshot()
});

