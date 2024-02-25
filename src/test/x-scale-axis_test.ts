import { fixture, assert } from "@open-wc/testing";
import { html } from "lit/static-html.js";
import { AxisTicksSetter } from "../x-scale-axis";
import { ColorLegendElement } from "../color-legend-element";

suite("AxisTicksSetter", () => {
  test("is instanceOf", () => {
    const cle = new ColorLegendElement();
    const ats = new AxisTicksSetter(cle);
    assert.instanceOf(ats, AxisTicksSetter);
  });

  test("setXScale continuous", () => {
    const cle = new ColorLegendElement();
    cle.scaleType = "continuous";
    const ats = new AxisTicksSetter(cle);
    ats.setXScale();
    assert.isNotNull(ats.xScale);
  });

  test("setXScale discrete", () => {
    const cle = new ColorLegendElement();
    cle.scaleType = "discrete";
    cle.domain = [0, 1, 2, 3, 4, 5];
    const ats = new AxisTicksSetter(cle);
    ats.setXScale();
    assert.deepEqual(ats.xScale.domain(), [0, 5]);
  });

  test("setXScale threshold", () => {
    const cle = new ColorLegendElement();
    cle.scaleType = "threshold";
    cle.domain = [0, 1, 2, 3, 4, 5];
    const ats = new AxisTicksSetter(cle);
    ats.setXScale();
    assert.deepEqual(ats.xScale.domain(), [0, 5]);
  });

  test("setXScale categorical", () => {
    const cle = new ColorLegendElement();
    cle.scaleType = "categorical";
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
    // NOTE: for each group of assertions we need to create new instances due to how handleAxisTicks sets the value of cle.tickFormatter
    let cle = new ColorLegendElement();
    let ats = new AxisTicksSetter(cle);
    ats.handleAxisTicks();
    assert.isFunction(cle.tickFormatter);
    assert.equal(cle.tickFormatter(1.23), "1.2");

    cle = new ColorLegendElement();
    ats = new AxisTicksSetter(cle);
    cle.tickFormat = ".0%";
    ats.handleAxisTicks();
    assert.equal(cle.tickFormatter(0.537), "54%");

    cle = new ColorLegendElement();
    ats = new AxisTicksSetter(cle);
    cle.tickFormatter = (d) => `${d}!`;
    ats.handleAxisTicks();
    assert.equal(cle.tickFormatter(100), "100!");
  });

  test("handleAxisTicks discrete", async () => {
    const expected = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    const el = (await fixture(
      html`<color-legend
        scaleType=${"discrete"}
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
        scaleType=${"threshold"}
        .domain=${expected}
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.deepEqual(el.tickValues, expected);
  });

  test("handleAxisTicks continuous", async () => {
    const el = (await fixture(
      html`<color-legend
        scaleType=${"continuous"}
        .domain=${[0, 100]}
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isNull(el.tickValues);
  });

  test("handleAxisTicks categorical", async () => {
    const el = (await fixture(
      html`<color-legend
        scaleType=${"categorical"}
        .domain=${["a", "b", "c"]}
      ></color-legend>`
    )) as ColorLegendElement;
    await el.updateComplete;
    assert.isNull(el.tickValues);
  });
});
