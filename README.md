# Color Legend Element

![Screenshot of color-legend-element](./docs-src/assets/color-legend-element.png)

```html
<color-legend></color-legend>
```

A [Custom Element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) suitable for use as a legend in data visualizations.

Built with [Lit/Lit-Element](https://lit.dev/) and [D3JS](https://d3js.org/). Inspired by the [Color Legend](https://observablehq.com/@d3/color-legend) on [Observable](https://observablehq.com) by [Mike Bostock](https://observablehq.com/@mbostock) 🙏.

## Features

- Render legends for continuous, discrete, and categorical data.
- Uses `d3-scale`'s concept of a `domain` and a `range` for mapping values to visual marks.
- Compatable with color interpolators from `d3-scale-chromatic`
- Customizable via its [properties / attributes](#properties) and [CSS variables](#css-variables).
- Framework and bundler not required, just add a `<script>` tag and use it
- Lightweight (<>kb minified, <>kb gzipped)

## Usage



## Properties

The following table describes the Color Legend Element's properties / public API. See [the documentation](https://clhenrick.github.io/color-legend-element) for examples of how these properties may be configured to render various types of legends.

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