import { ColorLegendElement } from "../color-legend-element";
import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_MARGIN_LEFT,
  DEFAULT_MARGIN_TOP,
} from "../constants";
import { interpolateGreys } from "d3-scale-chromatic";

import { fixture, assert } from "@open-wc/testing";
import { html } from "lit/static-html.js";

const getEl = () => fixture(html`<color-legend></color-legend>`);

suite("color-legend-element", () => {
  test("is defined", () => {
    const el = document.createElement("color-legend");
    assert.instanceOf(el, ColorLegendElement);
  });

  test("renders with default values", async () => {
    const el = (await getEl()) as ColorLegendElement;
    assert.shadowDom.equal(
      el,
      `
      <div
        class="cle-container"
        style="width:325px; height:auto;"
      >
        <p class="legend-title">
          Color Legend Element
        </p>
        <slot name="subtitle">
        </slot>
        <svg width="325" height="32"></svg>
        <ul class="categorical-container hidden">
        </ul>
        <slot name="footer">
        </slot>
      </div>
      `
    );
  });

  test("titleText", async () => {
    const titleText = "Snowfall (cm)";
    const el = (await fixture(
      html`<color-legend titleText="${titleText}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.shadowRoot.querySelector("p.legend-title").textContent,
      titleText
    );
  });

  test("width", async () => {
    const width = 300;
    const el = (await fixture(
      html`<color-legend width="${width}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.svg.getAttribute("width"),
      `${width}`
    );
  });

  test("height", async () => {
    const height = 50;
    const el = (await fixture(
      html`<color-legend height="${height}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.svg.getAttribute("height"),
      `${height}`
    );
  });

  test("marginTop", async () => {
    const marginTop = 0;
    const el = (await fixture(
      html`<color-legend marginTop="${marginTop}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.svg.querySelector("image").getAttribute("y"),
      `${marginTop}`
    );
  });

  test("marginRight", async () => {
    const marginRight = 0;
    const el = (await fixture(
      html`<color-legend marginRight="${marginRight}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.svg.querySelector("image").getAttribute("width"),
      `${DEFAULT_WIDTH - DEFAULT_MARGIN_LEFT - marginRight}`
    );
  });

  test("marginBottom", async () => {
    const marginBottom = 0;
    const el = (await fixture(
      html`<color-legend marginBottom="${marginBottom}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.svg.querySelector("image").getAttribute("height"),
      `${DEFAULT_HEIGHT - DEFAULT_MARGIN_TOP - marginBottom}`
    );
  });

  test("marginLeft", async () => {
    const marginLeft = 0;
    const el = (await fixture(
      html`<color-legend marginLeft="${marginLeft}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.svg.querySelector("image").getAttribute("x"),
      `${marginLeft}`
    );
  });

  test("scaleType continuous", async () => {
    const el = (await fixture(
      html`<color-legend scaleType="continuous"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.exists(el.svg.querySelector("image"));
  });

  test("scaleType discrete", async () => {
    const el = (await fixture(
      html`<color-legend scaleType="discrete"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isAbove(el.svg.querySelectorAll("rect").length, 0);
  });

  test("scaleType threshold", async () => {
    const el = (await fixture(
      html`<color-legend scaleType="discrete"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isAbove(el.svg.querySelectorAll("rect").length, 0);
  });

  test("scaleType categorical", async () => {
    const el = (await fixture(
      html`<color-legend scaleType="categorical"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isAbove(el.shadowRoot.querySelectorAll("ul li").length, 0);
  });

  test("domain", async () => {
    const domain = [0, 100];
    const el = (await fixture(
      html`<color-legend .domain="${domain}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.deepEqual(el.colorScale.domain(), [0, 100]);
  });

  test("range", async () => {
    const range = ["blue", "purple"];
    const el = (await fixture(
      html`<color-legend .range="${range}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.deepEqual(el.colorScale.range(), ["blue", "purple"]);
  });

  test("markType rect", async () => {
    const el = (await fixture(
      html`<color-legend
        scaleType="categorical"
        markType="rect"
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.exists(el.shadowRoot.querySelectorAll("li:not(.circle):not(.line)"));
  });

  test("markType circle", async () => {
    const el = (await fixture(
      html`<color-legend
        scaleType="categorical"
        markType="circle"
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.exists(el.shadowRoot.querySelector(".legend-item.circle"));
  });

  test("markType line", async () => {
    const el = (await fixture(
      html`<color-legend
        scaleType="categorical"
        markType="line"
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.exists(el.shadowRoot.querySelector(".legend-item.line"));
  });

  test("ticks", async () => {
    const el = (await fixture(
      html`<color-legend ticks="0"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(el.shadowRoot.querySelectorAll("svg .tick").length, 0);
  });

  test("tickFormat", async () => {
    const el = (await fixture(
      html`<color-legend tickFormat=".0%"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    const texts = el.shadowRoot.querySelectorAll("svg .tick text");
    const values = Array.from(texts).map((d) => d.textContent);
    assert.deepEqual(values, ["0%", "20%", "40%", "60%", "80%", "100%"]);
  });

  test("tickSize", async () => {
    const el = (await fixture(
      html`<color-legend tickSize="12"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    const lines = el.shadowRoot.querySelectorAll("svg .tick line");
    const values = Array.from(lines).map((d) => +d.getAttribute("y2"));
    assert.deepEqual(values, [12, 12, 12, 12, 12, 12]);
  });

  test("tickValues", async () => {
    const tickValues = [0, 0.5, 1];
    const el = (await fixture(
      html`<color-legend .tickValues="${tickValues}"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    const texts = el.shadowRoot.querySelectorAll("svg .tick text");
    const values = Array.from(texts).map((d) => d.textContent);
    assert.deepEqual(values, ["0.0", "0.5", "1.0"]);
  });

  test("tickFormatter", async () => {
    const el = (await getEl()) as ColorLegendElement;
    await el.updateComplete;
    el.tickFormatter = (d) => `${d}!`;
    await el.updateComplete;
    const texts = el.shadowRoot.querySelectorAll("svg .tick text");
    const values = Array.from(texts).map((d) => d.textContent);
    assert.deepEqual(values, ["0!", "0.2!", "0.4!", "0.6!", "0.8!", "1!"]);
  })

  test("tickFormatter throws", async () => {
    const el = (await getEl()) as ColorLegendElement;
    await el.updateComplete;
    // @ts-ignore - tickFormatter is expected to be an incorrect type
    const fn = () => (el.tickFormatter = "bla");
    assert.throws(fn, "tickFormatter must be a function.");
  });

  test("interpolator", async () => {
    const el = (await getEl()) as ColorLegendElement;
    await el.updateComplete;
    el.interpolator = interpolateGreys;
    await el.updateComplete;
    assert.equal(el.interpolator(1), "rgb(0, 0, 0)");
  });

  test("interpolator throws", async () => {
    const el = (await getEl()) as ColorLegendElement;
    await el.updateComplete;
    // @ts-ignore - interpolator expected to be an incorrect type
    const fn = () => (el.interpolator = "foo");
    assert.throws(fn, "interpolator must be a function.");
  });

  test("css styles are applied", async () => {
    const el = (await getEl()) as ColorLegendElement;
    await el.updateComplete;
    el.style.setProperty("--cle-background", "#000");
    await el.updateComplete;
    const styles = getComputedStyle(el.shadowRoot.querySelector(".cle-container"))
    assert.equal(styles.backgroundColor, "rgb(0, 0, 0)");
  });
});
