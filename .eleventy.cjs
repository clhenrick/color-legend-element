module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("docs-src/assets");
  eleventyConfig.addPassthroughCopy(
    'node_modules/@webcomponents/webcomponentsjs'
  );
  eleventyConfig.addPassthroughCopy('node_modules/lit/polyfill-support.js');
  eleventyConfig.addPassthroughCopy('build/color-legend-element.js')

  return {
    dir: {
      input: './docs-src',
      output: './docs',
    }
  }
};