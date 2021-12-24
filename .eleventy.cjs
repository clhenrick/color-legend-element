module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("docs-src/assets");
  eleventyConfig.addPassthroughCopy(
    "node_modules/@webcomponents/webcomponentsjs"
  );
  eleventyConfig.addPassthroughCopy("node_modules/lit/polyfill-support.js");
  eleventyConfig.addPassthroughCopy("build/color-legend-element.umd.js");

  eleventyConfig.addWatchTarget("./docs-src/assets");

  return {
    dir: {
      input: "./docs-src",
      output: "./docs",
    },
  };
};
