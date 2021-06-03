// commonjs.js
const { count1 } = require('./CommonJSModule');
setTimeout(() => {
     console.log("count is " + count1 + ' in commonjs');
}, 1000)