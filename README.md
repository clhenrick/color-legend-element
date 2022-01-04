# Color Legend Element

A [Custom Element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) suitable for use as a legend in data visualizations.

Built with [Lit/Lit-Element](https://lit.dev/) and [D3JS](https://d3js.org/). Inspired by the [Color Legend](https://observablehq.com/@d3/color-legend) on [Observable](https://observablehq.com) by [Mike Bostock](https://observablehq.com/@mbostock) 🙏.

## Properties / Attributes

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
| ticks        | DEFAULT_WIDTH / 64     | The desired number of axis ticks.                                     | Yes           |
| tickFormat   | ".1f"                  | The d3-format specifier to format axis tick values.                   | Yes           |
| tickSize     | 6                      | The size or length of the axis ticks.                                 | Yes           |
| tickValues   | null                   | The explicit values to be used for axis ticks.                        | Yes           |
| interpolator | null                   | The color interpolator function.                                      | No            |