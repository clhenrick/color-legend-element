# Color Legend Element

![Screenshot of color-legend-element](./docs-src/assets/color-legend-element.png)

```html
<color-legend></color-legend>
```

A [Custom Element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) suitable for use as a legend in data visualizations. Built with [Lit/Lit-Element](https://lit.dev/) and [D3JS](https://d3js.org/).

## Features

- Render legends for continuous, discrete, and categorical data.
- Uses `d3-scale`'s concept of a `domain` and a `range` for mapping values to visual marks.
- Compatable with color interpolators from `d3-scale-chromatic`
- Customizable via its [properties / attributes](#properties) and [CSS variables](#css-variables).
- Framework and bundler not required, just add a `<script>` tag and use it!
- TODO: [Small bundle size](https://bundlephobia.com/package/color-legend-element) (<>kb minified, <>kb gzipped)

## Usage

**NOTE: the `<color-legend>` assumes D3JS is available as a dependency.** At the very least this should include the following modules from the D3JS library: `d3-scale`, `d3-array`, `d3-format`, `d3-interpolate`, and `d3-scale-chromatic` (if using one of d3's color scheme interpolators).

Install via [npm](https://www.npmjs.com/package/color-legend-element):

```bash
npm install color-legend-element
```

You may then `import` the `<color-legend>` in the desired ES Module:

```js
import "color-legend-element";
```

To use without a frontend build tool, add the `<color-legend>` via a `<script>` tag in your HTML document.

```html
<script type="module" src="/path/to/color-legend-element.bundle.js"></script>
```

If you prefer to not use the ESM build, you may instead use the UMD build:

```html
<script src="/path/to/color-legend-element.umd.js"></script>
```

## Examples

See [the documentation](https://clhenrick.github.io/color-legend-element) for examples of how to use the Color Legend Element.

## Properties

The following table lists the Color Legend Element's properties and attributes (public API). See [the documentation](https://clhenrick.github.io/color-legend-element) for examples of how these properties may be configured to render various types of legends. All properties listed have a corresponding HTML attribute of the same name (but lowercased) except for the `interpolator` property which may only be set as a property using JavaScript.

| Property     | Default Value          | Description                                                           | Has Attribute |
|--------------|------------------------|-----------------------------------------------------------------------|---------------|
| titleText    | "Color Legend Element" | The title text that displays at the top of the legend.                | Yes           |
| width        | 325                    | The width of the SVG or categorical legend div element.               | Yes           |
| height       | 32                     | The height of the SVG element.                                        | Yes           |
| marginTop    | 6                      | The spacing between the legend bar and top most extent of the SVG.    | Yes           |
| marginRight  | 12                     | The spacing between the legend bar and right most extent of the SVG.  | Yes           |
| marginBottom | 16                     | The spacing between the legend bar and bottom most extent of the SVG. | Yes           |
| marginLeft   | 12                     | The spacing between the legend bar and left most extent of the SVG.   | Yes           |
| scaleType    | "continuous"           | The type of legend to render based on d3-scale.                       | Yes           |
| domain       | [0, 1]                 | The color scale's domain values.                                      | Yes           |
| range        | d3.schemeYlGnBu[5]     | The color scale's range values.                                       | Yes           |
| markType     | "circle"               | The symbology used for categorical legends.                           | Yes           |
| ticks        | 5     | The desired number of axis ticks.                                     | Yes           |
| tickFormat   | ".1f"                  | The d3-format specifier to format axis tick values.                   | Yes           |
| tickSize     | 6                      | The size or length of the axis ticks.                                 | Yes           |
| tickValues   | null                   | The explicit values to be used for axis ticks.                        | Yes           |
| interpolator | null                   | The color interpolator function.                                      | No            |

## CSS Variables

The internal styling (CSS) of the Color Legend Element may be altered via the following custom properties:

| Custom Property            | Default Value          | Description |
|----------------------------|------------------------|-------------|
| --cle-font-family          | sans-serif             | ...         |
| --cle-font-family-title    | var(--cle-font-family) | ...         |
| --cle-font-size            | 0.75rem                | ...         |
| --cle-font-size-title      | 0.875rem               | ...         |
| --cle-letter-spacing       | 0.3px                  | ...         |
| --cle-letter-spacing-title | 0.25px                 | ...         |
| --cle-font-weight          | 400                    | ...         |
| --cle-font-weight-title    | 500                    | ...         |
| --cle-color                | currentColor           | ...         |
| --cle-background           | #fff                   | ...         |
| --cle-padding              | 0.375rem               | ...         |
| --cle-border               | none                   | ...         |
| --cle-border-radius        | 0                      | ...         |
| --cle-box-sizing           | content-box            | ...         |
| --cle-columns              | 2                      | ...         |
| --cle-column-width         | auto                   | ...         |
| --cle-item-margin          | 0.375rem 0.75rem 0 0   | ...         |
| --cle-line-width           | 24px                   | ...         |
| --cle-line-height          | 2px                    | ...         |
| --cle-swatch-size          | 10px                   | ...         |
| --cle-swatch-width         | var(--cle-swatch-size) | ...         |
| --cle-swatch-height        | var(--cle-swatch-size) | ...         |
| --cle-swatch-margin        | 0 0.5rem 0 0           | ...         |


For example:

```css
color-legend {
  --cle-font-family: serif;
  --cle-font-family-title: Impact;
  --cle-letter-spacing-title: 0.5px;
  --cle-color: white;
  --cle-background: #222;
  --cle-border-radius: 6px;
  --cle-padding: 0.25rem 0.25rem 0.75rem;
}
```

## Local Development

In the root of this repository first install dependencies:

```bash
npm install
```

### Building from src

To create the ESM build:

```bash
npm run build
```

or to watch for changes:

```bash
npm run build:watch
```

To create both the ESM & UMD bundles:

```bash
npm run bundle
```

### Develop

To view the `<color-legend>` without bundling it:

```
npm run dev
```

or

```
npm run dev:prod
```

You may then modify the `dev/index.html` and view the changes.

### Running Tests

_TODO..._

### Building docs

To generate the `docs` directory:

```bash
npm run docs
```

This will first remove the `docs/` directory, build files from the `src/`, and build files from the `docs-src/` directory into the `docs/` directory. All necessary files will be copied into `docs/` directory (e.g. from `build/` and `node_modules/`) in order for the `<color-legend>` render as it would in a production environment.

To serve the docs directory and watch for changes:

```bash
npm run docs:serve
```

### Updating the custom-elements.json

To update the `custom-elements.json` manifest:

```bash
npm run analyze
```

## License

Licensed under the MIT License, Copyright 2021 Chris L Henrick.

## Credits

🙏 Some project boilerplate has been borrowed from the [Lit Element TypeScript Starter Kit](https://github.com/lit/lit-element-starter-ts) under the BSD-3-Clause License, Copyright 2017 Google LLC.

🙏 Inspired by the [Color Legend](https://observablehq.com/@d3/color-legend) on [Observable](https://observablehq.com) by [Mike Bostock](https://observablehq.com/@mbostock) under the ISC License, Copyright 2019–2020 Observable, Inc.
