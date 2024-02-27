---
layout: baselayout.njk
title: Color Legend Element
---

## <a class="anchor" id="install" href="#install" aria-hidden="true">#</a> Installation

### <a class="anchor" id="dependencies" href="#dependencies" aria-hidden="true">#</a> Dependencies

The `<color-legend>` assumes D3JS is available as a dependency. At the very least this should include the following modules from the D3JS library: `d3-scale`, `d3-array`, `d3-format`, `d3-interpolate`, and `d3-scale-chromatic` (if using one of d3's color scheme interpolators).

### <a class="anchor" id="install-npm" href="#install-npm" aria-hidden="true">#</a> NPM

Install via [npm](https://www.npmjs.com/package/color-legend-element):

```bash
npm install color-legend-element
```

You may then `import` the `<color-legend>` in the desired ES Module:

```js
import "color-legend-element";
```

### <a class="anchor" id="install-script" href="#install-script" aria-hidden="true">#</a> Script

To use without a frontend build tool, add the `<color-legend>` via a `<script>` tag in your HTML document.

```html
<script
  type="module"
  src="color-legend-element/build/color-legend-element.js"
></script>
```

If you prefer to not use the ESM build, you may instead use the UMD build:

```html
<script src="color-legend-element/build/color-legend-element.umd.js"></script>
```

### <a class="anchor" id="windows-os-install" href="#usage" aria-hidden="true">#</a> Windows OS Install

**Note:** that Windows OS users may experience a problem with module bundlers where the D3JS dependencies are not found by the CLE. To work around this, it is recommended to be sure to use the ESM build:

```js
import "color-legend-element/build/color-legend-element.js";
```

## <a class="anchor" id="usage" href="#usage" aria-hidden="true">#</a> Usage

The following examples demonstrate how to configure the `<color-legend>` for representing various types of data such as continuous, categorical, or discrete.

You may also view an [interactive version of these docs](https://observablehq.com/@clhenrick/color-legend-element) on [ObservableHQ.com](https://observablehq.com).

**Note:** most `<color-legend>` configuration options may be set as either HTML attributes or properties via JavaScript. Unless otherwise noted this is the case, and the word "property" is used interchangeably with "attribute" for brevity. For a list of all properties including their type, default value, and description see the [README](https://github.com/clhenrick/color-legend-element/blob/main/README.md#properties).

<!-- TODO: link to README with full list of configuration options -->

### <a class="anchor" id="continuous" href="#continuous" aria-hidden="true">#</a> Continuous

With no additional configuration, the `<color-legend>` will render a continuous legend using the default values for its properties. The color gradient is created using the [`d3.interpolateHcl`](https://d3js.org/d3-interpolate/color#interpolateHcl) color interpolator and color values from the `range` property.

<div class="example">
  <color-legend></color-legend>

```html
<color-legend></color-legend>
```

</div>

To alter the color gradient, pass an array of strings equivalent to valid HTML colors for the `range` property. To alter the values in the axis ticks, set values for the `domain`, `tickFormat`, and/or `tickValues` properties.

<div class="example">
  <color-legend
    range='["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"]'
    domain='[100, 500]'
    tickFormat=".0f"
    tickValues="[100, 300, 500]"
  >
  </color-legend>

```html
<color-legend
  range='["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"]'
  domain="[100, 500]"
  tickFormat=".0f"
  tickValues="[100, 300, 500]"
>
</color-legend>
```

</div>

### <a class="anchor" id="continuous-with-interpolator" href="#continuous-with-interpolator" aria-hidden="true">#</a> Continuous with an interpolator

The continuous legend may also be altered by providing an interpolator function, such as one from [`d3-scale-chromatic`](https://d3js.org/d3-scale-chromatic), by setting the `interpolator` property in JavaScript.

**Note:** that there is no equivalent HTML attribute for the `interpolator` property as its value must be a function and thus cannot be parsed as JSON.

<div class="example">
  <color-legend
    class="continuous-with-interpolator"
    titleText="Temperature (°C)"
    scaleType="continuous"
    tickFormat=".0f"
    domain="[0, 100]"
  >
  </color-legend>

  <script type="module">
    document.querySelector(
      "color-legend.continuous-with-interpolator"
    ).interpolator = d3.interpolateTurbo;
  </script>

```html
<color-legend
  class="continuous-with-interpolator"
  titletext="Temperature (°C)"
  scaletype="continuous"
  tickFormat=".0f"
  domain="[0, 100]"
>
</color-legend>
```

```js
document.querySelector(
  "color-legend.continuous-with-interpolator"
).interpolator = d3.interpolateTurbo;
```

</div>

### <a class="anchor" id="discrete" href="#discrete" aria-hidden="true">#</a> Discrete

A discrete legend may be rendered by setting the `scaleType` property to `"discrete"` and passing two values for the `domain` and two or more colors for the `range`. The `domain` will be divided equally by the number of values in the `range`.

<div class="example">
  <color-legend
    titleText="Unemployment Rate (%)"
    tickFormat=".1f"
    scaleType="discrete"
    domain="[0.1, 1]"
    range='["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]'
  >
  </color-legend>

```html
<color-legend
  titleText="Unemployment Rate (%)"
  tickFormat=".1f"
  scaleType="discrete"
  domain="[0.1, 1]"
  range='["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]'
>
</color-legend>
```

</div>

### <a class="anchor" id="threshold" href="#threshold" aria-hidden="true">#</a> Threshold

Threshold legends may be rendered by setting the `scaleType` property to `"threshold"`, and by setting the `domain` to an array of two or more sequential numbers. In order to render correctly, the length of the `range` colors array should be one less than the length of the `domain` array.

<div class="example">
  <color-legend
    titleText="Number of Incidents"
    scaleType="threshold"
    tickFormat=".0f"
    domain="[0, 11, 22, 33, 50, 100]"
    range='["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]'
  >
  </color-legend>

```html
<color-legend
  titleText="Number of Incidents"
  scaleType="threshold"
  tickFormat=".0f"
  domain="[0, 11, 22, 33, 50, 100]"
  range='["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]'
>
</color-legend>
```

</div>

### <a class="anchor" id="categorical" href="#categorical" aria-hidden="true">#</a> Categorical

Categorical legends may be rendered by setting the `scaleType` property to `"categorical"`. This assumes an equal number of values in both the `domain` and `range` properties. The `markType` property is used to symbolize each category and may be set to one of `"circle"`, `"rect"`, or `"line"`. The default `markType` value is `"circle"`.

<div class="example">
  <color-legend
    titleText="Business Sectors"
    scaleType="categorical"
    domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
    range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
  >
  </color-legend>

```html
<color-legend
  titleText="Business Sectors"
  scaleType="categorical"
  domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
  range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
>
</color-legend>
```

</div>

#### <a class="anchor" id="categorical-rect" href="#categorical-rect" aria-hidden="true">#</a> Categorical with markType set to rect

<div class="example">
  <color-legend
    titleText="Business Sectors"
    scaleType="categorical"
    domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
    range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
    markType="rect"
  >
  </color-legend>

```html
<color-legend
  titleText="Business Sectors"
  scaleType="categorical"
  domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
  range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
  markType="rect"
>
</color-legend>
```

</div>

#### <a class="anchor" id="categorical-line" href="#categorical-line" aria-hidden="true">#</a> Categorical with markType set to line

<div class="example">
  <div class="overflow-x">
    <color-legend
      width="350"
      titleText="Business Sectors"
      scaleType="categorical"
      domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
      range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
      markType="line"
    >
    </color-legend>
  </div>

```html
<color-legend
  width="350"
  titleText="Business Sectors"
  scaleType="categorical"
  domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
  range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
  markType="line"
>
</color-legend>
```

</div>

### <a class="anchor" id="hidden" href="#hidden" aria-hidden="true">#</a> Hidden

The `<color-legend>` may be hidden applying the boolean `hidden` attribute:

<div class="example">

<fieldset>
  <input id="toggle-hidden" type="checkbox" />
  <label for="toggle-hidden">Hide Legend</label>
</fieldset>

<span>
<color-legend class="hidden-demo"></color-legend>
</span>

<script>
  let cle = document.querySelector(".hidden-demo");
  let toggle = document.getElementById("toggle-hidden");
  toggle.addEventListener("change", function () {
    cle.hidden = !cle.hidden;
  });
</script>

```html
<color-legend hidden></color-legend>
```

</div>

## <a class="anchor" id="styling-using-css" href="#styling-using-css" aria-hidden="true">#</a> Styling using CSS

The `<color-legend>`'s styles are encapsulated using the Shadow DOM and thus will not bleed out
to pollute the style of neigboring DOM elements. Its default styles may be
customized by overriding one or more of its CSS variables (custom
properties). All CSS variable names are namespaced with `cle`. For example,
`--cle-font-family` will set the `font-family` property for categorical legend items and axis ticks.

<div class="example">
  <color-legend class="styled"></color-legend>

  <style>
    color-legend.styled {
      --cle-font-family: serif;
      --cle-font-family-title: Impact;
      --cle-letter-spacing-title: 0.5px;
      --cle-color: white;
      --cle-background: #222;
      --cle-border-radius: 6px;
      --cle-padding: 0.25rem 0.25rem 0.75rem;
    }
  </style>

```html
<color-legend class="styled"></color-legend>
```

```css
color-legend.styled {
  --cle-font-family: serif;
  --cle-font-family-title: Impact;
  --cle-letter-spacing-title: 0.5px;
  --cle-color: white;
  --cle-background: #222;
  --cle-border-radius: 6px;
  --cle-padding: 0.25rem 0.25rem 0.75rem;
}
```

</div>

Or for example, to change the number of columns and/or the swatch size in a categorical legend:

<div class="example">
<style>
  color-legend.columns {
    --cle-columns: 3;
    --cle-swatch-size: 14px;
  }
</style>

<div class="overflow-x">
  <color-legend
    class="columns"
    width="400"
    height=""
    titleText="Business Sectors"
    scaletype="categorical"
    marktype="line"
    domain='["Agriculture", "Business services", "Construction", "Education and Health", "Finance", "Government"]'
    range='["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949"]'
  />
</div>

```html
<color-legend
  class="columns"
  width="400"
  height=""
  titleText="Business Sectors"
  scaletype="categorical"
  marktype="line"
  domain='["Agriculture", "Business services", "Construction", "Education and Health", "Finance", "Government"]'
  range='["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949"]'
/>
```

```css
color-legend.columns {
  --cle-columns: 3;
  --cle-swatch-size: 14px;
}
```

</div>

You may choose to hide the `<color-legend>` until it loads using the CSS [:defined pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined):

<div class="example">

```css
color-legend-element:not(:defined) {
  display: none;
}

color-legend-element:defined {
  display: inline-block;
}
```

</div>

## <a class="anchor" id="slots" href="#slots" aria-hidden="true">#</a> Adding Child Content via Slots

Child content may be placed within the `<color-legend>` via its two [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Slot), named "subtitle" and "footer" which render above and below the primary legend content respectively.

<div class="example">

<style>
  color-legend p {
    margin: 0.5rem 0;
  }
  p.no-data {
    display: inline-flex;
    align-items: center;
  }
  p.no-data:before {
    content: "";
    width: 0.75rem;
    height: 0.75rem;
    background: #ccc;
    margin-right: 0.5rem;
  }
</style>

<color-legend>
  <small slot="subtitle">Some subtitle text here perhaps?</small>
  <p slot="footer" class="no-data"> = No data</p>
</color-legend>

<!-- prettier-ignore -->
```html
<color-legend>
  <small slot="subtitle">
    Some subtitle text here perhaps?
  </small>
  <p slot="footer" class="no-data">
     = No data
  </p>
</color-legend>
```

**Note:** that any slotted elements are considered part of the "light DOM" and will be styled by any global CSS belonging to the page in which the `<color-legend>` is rendered in.

</div>

## <a class="anchor" id="bugs-suggestions" href="#bugs-suggestions" aria-hidden="true">#</a> Bugs / Suggestions

To report a bug or make a suggestion, please open an issue in the [Github repository](https://github.com/clhenrick/color-legend-element) or send me a [Tweet](https://twitter.com/chrislhenrick). And feel free to let me know if it's helped you in a project 🙂 Thanks!

<div style="margin-bottom: 3rem"></div>
