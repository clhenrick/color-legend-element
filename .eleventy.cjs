const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  const md = new markdownIt({
    html: true,
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  eleventyConfig.addPlugin(syntaxHighlight, {
    trim: true,
  });

  eleventyConfig.addPassthroughCopy("docs-src/assets");
  eleventyConfig.addPassthroughCopy({
    "node_modules/@webcomponents/webcomponentsjs":
      "assets/@webcomponents/webcomponentsjs",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/lit/polyfill-support.js": "assets/lit/polyfill-support.js",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/prismjs/themes/prism-okaidia.css":
      "assets/prismjs/themes/prism-okaidia.css",
  });
  eleventyConfig.addPassthroughCopy({
    "build/color-legend-element.umd.js": "assets/color-legend-element.umd.js",
  });

  eleventyConfig.addWatchTarget("./docs-src/assets");
  eleventyConfig.addWatchTarget("./build/color-legend-element.umd.js");

  return {
    dir: {
      input: "./docs-src",
      output: "./docs",
    },
  };
};
