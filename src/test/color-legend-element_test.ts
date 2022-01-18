import { ColorLegendElement } from "../color-legend-element";
import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_MARGIN_LEFT,
  DEFAULT_MARGIN_TOP,
} from "../constants";
import { interpolateGreys } from "d3";

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
    const expected = "Snowfall (cm)";
    const el = (await fixture(
      html`<color-legend titleText="Snowfall (cm)"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.shadowRoot.querySelector("p.legend-title").textContent,
      expected
    );
  });

  test("width", async () => {
    const el = (await fixture(
      html`<color-legend width="300"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.shadowRoot.querySelector("svg").getAttribute("width"),
      "300"
    );
  });

  test("height", async () => {
    const el = (await fixture(
      html`<color-legend height="50"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.shadowRoot.querySelector("svg").getAttribute("height"),
      "50"
    );
  });

  test("marginTop", async () => {
    const el = (await fixture(
      html`<color-legend marginTop="0"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.shadowRoot.querySelector("svg image").getAttribute("y"),
      "0"
    );
  });

  test("marginRight", async () => {
    const el = (await fixture(
      html`<color-legend marginRight="0"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.shadowRoot.querySelector("svg image").getAttribute("width"),
      `${DEFAULT_WIDTH - DEFAULT_MARGIN_LEFT}`
    );
  });

  test("marginBottom", async () => {
    const el = (await fixture(
      html`<color-legend marginBottom="0"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.shadowRoot.querySelector("svg image").getAttribute("height"),
      `${DEFAULT_HEIGHT - DEFAULT_MARGIN_TOP}`
    );
  });

  test("marginLeft", async () => {
    const el = (await fixture(
      html`<color-legend marginLeft="0"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      el.shadowRoot.querySelector("svg image").getAttribute("x"),
      "0"
    );
  });

  test("scaleType continuous", async () => {
    const el = (await fixture(
      html`<color-legend scaleType="continuous"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.exists(el.shadowRoot.querySelector("svg image"));
  });

  test("scaleType discrete", async () => {
    const el = (await fixture(
      html`<color-legend scaleType="discrete"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isAbove(el.shadowRoot.querySelectorAll("svg rect").length, 0);
  });

  test("scaleType threshold", async () => {
    const el = (await fixture(
      html`<color-legend scaleType="discrete"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isAbove(el.shadowRoot.querySelectorAll("svg rect").length, 0);
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
    assert.notExists(el.shadowRoot.querySelector(".legend-item.circle"));
    assert.notExists(el.shadowRoot.querySelector(".legend-item.line"));
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
    assert.include(values, "1!");
  })

  test("tickFormatter throws", async () => {
    const el = (await getEl()) as ColorLegendElement;
    await el.updateComplete;
    // @ts-ignore it's expected to be an incorrect type
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
    // @ts-ignore it's expected to be an incorrect type
    const fn = () => (el.interpolator = "foo");
    assert.throws(fn, "interpolator must be a function.");
  });

  test("css styles are applied", async () => {
    const el = (await getEl()) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      getComputedStyle(el.shadowRoot.querySelector("div")).paddingTop,
      "6px"
    );
  });
});
