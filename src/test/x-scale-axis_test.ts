import { fixture, assert } from "@open-wc/testing";
import { html } from "lit/static-html.js";
import { AxisTicksSetter } from "../x-scale-axis";
import { ColorLegendElement } from "../color-legend-element";
import { ScaleType } from "../types";

suite("AxisTicksSetter", () => {
  test("is instanceOf", () => {
    const cle = new ColorLegendElement();
    const ats = new AxisTicksSetter(cle);
    assert.instanceOf(ats, AxisTicksSetter);
  });

  test("setXScale continuous", () => {
    const cle = new ColorLegendElement();
    cle.scaleType = ScaleType.Continuous;
    const ats = new AxisTicksSetter(cle);
    ats.setXScale();
    assert.isNotNull(ats.xScale);
  });

  test("setXScale discrete", () => {
    const cle = new ColorLegendElement();
    cle.scaleType = ScaleType.Discrete;
    cle.domain = [0, 1, 2, 3, 4, 5];
    const ats = new AxisTicksSetter(cle);
    ats.setXScale();
    assert.deepEqual(ats.xScale.domain(), [0, 5]);
  });

  test("setXScale threshold", () => {
    const cle = new ColorLegendElement();
    cle.scaleType = ScaleType.Threshold;
    cle.domain = [0, 1, 2, 3, 4, 5];
    const ats = new AxisTicksSetter(cle);
    ats.setXScale();
    assert.deepEqual(ats.xScale.domain(), [0, 5]);
  });

  test("setXScale categorical", () => {
    const cle = new ColorLegendElement();
    cle.scaleType = ScaleType.Categorical;
    const ats = new AxisTicksSetter(cle);
    ats.setXScale();
    assert.isNull(ats.xScale);
  });

  test("setXScale throws", () => {
    const cle = new ColorLegendElement();
    // @ts-ignore
    cle.scaleType = "unknown";
    const ats = new AxisTicksSetter(cle);
    assert.throws(() => ats.setXScale(), "Unrecognized scaleType: unknown");
  });

  test("handleAxisTicks", () => {
    const cle = new ColorLegendElement();
    const ats = new AxisTicksSetter(cle);
    ats.handleAxisTicks();
    assert.isFunction(cle.tickFormatter);
  });

  test("handleAxisTicks discrete", async () => {
    const expected = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    const el = (await fixture(
      html`<color-legend
        scaleType=${ScaleType.Discrete}
        .domain=${[0.1, 1]}
        .range=${[
          "#fcfbfd",
          "#efedf5",
          "#dadaeb",
          "#bcbddc",
          "#9e9ac8",
          "#807dba",
          "#6a51a3",
          "#54278f",
          "#3f007d",
        ]}
        tickFormat=".1f"
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.deepEqual(el.tickValues.map(el.tickFormatter).map(Number), expected);
  });

  test("handleAxisTicks threshold", async () => {
    const expected = [0, 2, 4, 10];
    const el = (await fixture(
      html`<color-legend
        scaleType=${ScaleType.Threshold}
        .domain=${expected}
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.deepEqual(el.tickValues, expected);
  });

  test("handleAxisTicks continuous", async () => {
    const el = (await fixture(
      html`<color-legend
        scaleType=${ScaleType.Continuous}
        .domain=${[0, 100]}
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isNull(el.tickValues);
  });

  test("handleAxisTicks categorical", async () => {
    const el = (await fixture(
      html`<color-legend
        scaleType=${ScaleType.Categorical}
        .domain=${["a", "b", "c"]}
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isNull(el.tickValues);
  });
});
