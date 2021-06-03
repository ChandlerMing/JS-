// es6.js (node --experimental-modules ESModuleRun.mjs)
import { count2 } from './ESModule.mjs';
setTimeout(() => {
     console.log("count is " + count2 + " in es6");
}, 1000)