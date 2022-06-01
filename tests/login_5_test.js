const { goto } = require('taiko');
const {getScreenshot} = require("../utils");
'use strict';

step('Navigate to login 5 <url>', async url => {
    await goto(url)

    getScreenshot()
});

