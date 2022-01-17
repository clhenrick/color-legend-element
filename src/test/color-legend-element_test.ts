import { ColorLegendElement } from "../color-legend-element";
import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_MARGIN_LEFT,
  DEFAULT_MARGIN_TOP,
} from "../constants";

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

  test("scaleType", async () => {
    const el = (await fixture(
      html`<color-legend scaleType="discrete"></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isAbove(el.shadowRoot.querySelectorAll("svg rect").length, 0);
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
