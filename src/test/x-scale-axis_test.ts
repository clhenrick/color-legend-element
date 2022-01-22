import { assert } from "@open-wc/testing";
import { AxisTicksSetter } from "../x-scale-axis";
import { ColorLegendElement } from "../color-legend-element";

suite("AxisTicksSetter", () => {
  test("is instanceOf", () => {
    const cle = new ColorLegendElement();
    const ats = new AxisTicksSetter(cle);
    assert.instanceOf(ats, AxisTicksSetter);
  });

  test("setXScale throws", () => {
    const cle = new ColorLegendElement();
    // @ts-ignore
    cle.scaleType = "unknown";
    const ats = new AxisTicksSetter(cle);
    assert.throws(() => ats.setXScale(), "Unrecognized scaleType: unknown");
  });
});
