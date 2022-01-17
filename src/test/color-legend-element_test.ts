import { ColorLegendElement } from "../color-legend-element";

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

  // test("marginTop", async () => {
  //   const el = (await fixture(
  //     html`<color-legend marginTop="0"></color-legend>`
  //   )) as ColorLegendElement;
  //   await el.updateComplete;
  //   assert.equal(
  //     el.shadowRoot.querySelector("svg").getAttribute("margin-top"),
  //     "0"
  //   );
  // });

  test("css styles are applied", async () => {
    const el = (await getEl()) as ColorLegendElement;
    await el.updateComplete;
    assert.equal(
      getComputedStyle(el.shadowRoot.querySelector("div")).paddingTop,
      "6px"
    );
  });
});
