---
layout: baselayout.html
title: Color Legend Element
---

## Usage

### Continuous

<div class="example">
  <color-legend></color-legend>

  <script type="text/plain" class="language-markup">
    <color-legend></color-legend>
  </script>
</div>

### Continuous with an interpolator

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

### Discrete

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

### Threshold

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

### Categorical with default markType (circle)

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

### Categorical with markType set to rect

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

### Categorical with markType set to line

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

### Hidden

Hide the Color Legend Element by setting its
<code class="language-text">hidden</code> attribute:

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

<h2>Styling using CSS</h2>

Styles are encapsulated using the Shadow DOM and thus will not bleed out
to pollute the style of other DOM elements. Its default styles may be
customized by overriding one or more of its CSS variables (custom
properties). All CSS variables are prefixed with
<code class="language-text">cle</code>, for example
<code class="language-text">--cle-font-family</code> will set the
font-family property for legend items and axis tick text.

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