const postcss = require("postcss");
const fs = require("fs");

const from = "./index.css";
const to = "./output.css";

const hasAlready = (parent, selector) => {
  return parent.some((i) => {
    return i.type === "rule" && i.selectors.includes(selector);
  });
};

const parser = {
  postcssPlugin: "postcss-focus",
  Rule: (rule) => {
    if (rule.selector.includes(":hover")) {
      const focuses = [];
      for (const selector of rule.selectors) {
        if (selector.includes(":hover")) {
          const replacement = selector.replace(/:hover/g, ":focus");
          if (!hasAlready(rule.parent, replacement)) {
            focuses.push(replacement);
          }
        }
      }
      if (focuses.length) {
        rule.selectors = rule.selectors.concat(focuses);
      }
    }
  },
};

fs.readFile(from, (err, css) => {
  console.log(css.toString());
  postcss(parser)
    .process(css, { from, to })
    .then((result) => {
      console.log(result.css);
    });
});
