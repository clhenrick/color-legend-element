---
layout: baselayout.html
title: Color Legend Element
---

## <a class="anchor" id="install" href="#install" aria-hidden>#</a> Install

_TODO..._

## <a class="anchor" id="usage" href="#usage" aria-hidden>#</a> Usage

### <a class="anchor" id="continuous" href="#continuous" aria-hidden>#</a> Continuous

With no additional configuration, the `<color-legend>` will render a continuous legend using the default values for the `scaleType`, `domain`, and `range` properties. The color gradient is created using the [`d3.interpolateHcl`](#) color interpolator and color values from the `range` property.

<div class="example">
  <color-legend></color-legend>

  <script type="text/plain" class="language-markup">
    <color-legend></color-legend>
  </script>
</div>

To alter the colors used in the gradient, update the values for the `range` property. To update the values in the axis ticks, update the `domain` and `tickValues` properties / attributes.

<div class="example">
  <color-legend
    range='["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"]'
    domain='[100, 500]'
    tickFormat=".0f"
    tickValues="[100, 300, 500]"
  >
  </color-legend>

  <script type="text/plain" class="language-markup">
    <color-legend
      range='["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"]'
      domain='[100, 500]'
      tickFormat=".0f"
      tickValues="[100, 300, 500]"
    >
    </color-legend>
  </script>
</div>

### <a class="anchor" id="continuous-with-interpolator" href="#continuous-with-interpolator" aria-hidden>#</a> Continuous with an interpolator

A continuous legend may also be rendered by providing an interpolator, such as one from [`d3-scale-chromatic`](#), by setting the `interpolator` property in JavaScript:

<div class="example">
  <color-legend
    class="continuous-with-interpolator"
    titleText="Temperature (°C)"
    scaleType="continuous"
    tickFormat=".0f"
    domain="[0, 100]"
  >
  </color-legend>

  <script>
    document.querySelector(
      "color-legend.continuous-with-interpolator"
    ).interpolator = d3.interpolateViridis;
  </script>

  <script type="text/plain" class="language-markup">
    <color-legend
      class="continuous-with-interpolator"
      titletext="Temperature (°C)"
      scaletype="continuous"
      tickFormat=".0f"
      domain="[0, 100]"
    >
    </color-legend>
  </script>

  <script type="text/plain" class="language-javascript">
    document.querySelector(
      "color-legend.continuous-with-interpolator"
    ).interpolator = d3.interpolateViridis;
  </script>
</div>

### <a class="anchor" id="discrete" href="#discrete" aria-hidden>#</a> Discrete

A discrete legend may be rendered by setting the `scaleType` to "discrete" and passing two values for the `domain` and two or more colors for the `range`. The `domain` will be divided equally by the number of values in the `range`.

<div class="example">
  <color-legend
    titleText="Unemployment Rate (%)"
    tickFormat=".1f"
    scaleType="discrete"
    domain="[0.1, 1]"
    range='["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]'
  >
  </color-legend>

  <script type="text/plain" class="language-markup">
    <color-legend
      titleText="Unemployment Rate (%)"
      tickFormat=".1f"
      scaleType="discrete"
      domain="[0.1, 1]"
      range='["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]'
    >
    </color-legend>
  </script>
</div>

### <a class="anchor" id="threshold" href="#threshold" aria-hidden>#</a> Threshold

Threshold legends may be rendered by setting `scaleType` to "threshold" and by setting the `domain` to be a sequential set of numbers and having one value greater than the number of values in the `range`.

<div class="example">
  <color-legend
    titleText="Number of Incidents"
    scaleType="threshold"
    tickFormat=".0f"
    domain="[0, 11, 22, 33, 50, 100]"
    range='["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]'
  >
  </color-legend>

  <script type="text/plain" class="language-markup">
    <color-legend
      titleText="Number of Incidents"
      scaleType="threshold"
      tickFormat=".0f"
      domain="[0, 11, 22, 33, 50, 100]"
      range='["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]'
    >
    </color-legend>
  </script>
</div>

### <a class="anchor" id="categorical" href="#categorical" aria-hidden>#</a> Categorical

Categorical legends may be rendered by setting the `scaleType` property to "categorical". This assumes an equal number of values in both the `domain` and `range`. The `markType` property is used to symbolize each category and may be set to one of "circle", "rect", or "line". The default `markType` is "circle".

<div class="example">
  <color-legend
    titleText="Business Sectors"
    scaleType="categorical"
    domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
    range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
  >
  </color-legend>

  <script type="text/plain" class="language-markup">
    <color-legend
      titleText="Business Sectors"
      scaleType="categorical"
      domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
      range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
    >
    </color-legend>
  </script>
</div>

#### <a class="anchor" id="categorical-rect" href="#categorical-rect" aria-hidden>#</a> Categorical with markType set to rect

<div class="example">
  <color-legend
    titleText="Business Sectors"
    scaleType="categorical"
    domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
    range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
    markType="rect"
  >
  </color-legend>

  <script type="text/plain" class="language-markup">
    <color-legend
      titleText="Business Sectors"
      scaleType="categorical"
      domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
      range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
      markType="rect"
    >
    </color-legend>
  </script>
</div>

#### <a class="anchor" id="categorical-line" href="#categorical-line" aria-hidden>#</a> Categorical with markType set to line

<div class="example">
  <color-legend
    width="350"
    titleText="Business Sectors"
    scaleType="categorical"
    domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
    range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
    markType="line"
  >
  </color-legend>

  <script type="text/plain" class="language-markup">
    <color-legend
      width="350"
      titleText="Business Sectors"
      scaleType="categorical"
      domain='["Agriculture","Business services","Construction","Education and Health","Finance","Government"]'
      range='["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949"]'
      markType="line"
    >
    </color-legend>
  </script>
</div>

### <a class="anchor" id="hidden" href="#hidden" aria-hidden>#</a> Hidden

Hide the Color Legend Element by setting its `hidden` attribute:

<fieldset>
  <input id="toggle-hidden" type="checkbox" />
  <label for="toggle-hidden">Hide Legend</label>
</fieldset>

<color-legend class="hidden-demo"></color-legend>

<script>
  let cle = document.querySelector(".hidden-demo");
  let toggle = document.getElementById("toggle-hidden");
  toggle.addEventListener("change", function () {
    cle.hidden = !cle.hidden;
  });
</script>

## <a class="anchor" id="styling-using-css" href="#styling-using-css" aria-hidden>#</a> Styling using CSS

Styles are encapsulated using the Shadow DOM and thus will not bleed out
to pollute the style of other DOM elements. Its default styles may be
customized by overriding one or more of its CSS variables (custom
properties). All CSS variables are prefixed with `cle`, for example
`--cle-font-family` will set the font-family property for legend items and axis tick text.

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

  <script type="text/plain" class="language-markup">
    <color-legend class="styled"></color-legend>
  </script>

  <script type="text/plain" class="language-css">
    color-legend.styled {
      --cle-font-family: serif;
      --cle-font-family-title: Impact;
      --cle-letter-spacing-title: 0.5px;
      --cle-color: white;
      --cle-background: #222;
      --cle-border-radius: 6px;
      --cle-padding: 0.25rem 0.25rem .75rem;
    }
  </script>
</div>
