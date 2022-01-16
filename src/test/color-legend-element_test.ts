import { ColorLegendElement } from "../color-legend-element";

import { /*fixture,*/ assert } from "@open-wc/testing";
// import {html} from 'lit/static-html.js';

suite("color-legend-element", () => {
  test("is defined", () => {
    const el = document.createElement("color-legend");
    assert.instanceOf(el, ColorLegendElement);
  });
});
