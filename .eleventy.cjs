const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    trim: true,
  });

  eleventyConfig.addPassthroughCopy("docs-src/assets");
  eleventyConfig.addPassthroughCopy(
    "node_modules/@webcomponents/webcomponentsjs"
  );
  eleventyConfig.addPassthroughCopy("node_modules/lit/polyfill-support.js");
  eleventyConfig.addPassthroughCopy("node_modules/d3/dist/d3.min.js");
  eleventyConfig.addPassthroughCopy("build/color-legend-element.umd.js");

  eleventyConfig.addWatchTarget("./docs-src/assets");

  return {
    dir: {
      input: "./docs-src",
      output: "./docs",
    },
  };
};
