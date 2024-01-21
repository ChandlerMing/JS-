const postcss = require("postcss");
const fs = require("fs");
const path = require("path");
const purge = require("./purge.js");
const css = fs.readFileSync("./index.css");

postcss([
  purge({
    html: path.resolve("./index.html"),
  }),
])
  .process(css, { from: undefined })
  .then((result) => {
    console.log(result.css);
  });
