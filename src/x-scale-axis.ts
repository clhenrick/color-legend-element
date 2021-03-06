import { scaleLinear } from "d3-scale";
import { format } from "d3-format";
import { ColorLegendElement } from "./color-legend-element";
import { ScaleType, ScaleQuantize, XScale } from "./types";
import { DEFAULT_TICKS, DEFAULT_TICK_FORMAT } from "./constants";

export class AxisTicksSetter {
  cle: ColorLegendElement;

  xScale!: XScale;

  constructor(cle: ColorLegendElement) {
    this.cle = cle;
  }

  /**
   * Sets the xScale property based on the value of the scaleType property
   */
  setXScale() {
    const { scaleType, marginLeft, width, marginRight } = this.cle;
    switch (scaleType) {
      case ScaleType.Continuous:
        this.xScale = scaleLinear()
          .domain(this.cle.domain as number[])
          .range([marginLeft, width - marginRight]);
        break;
      case ScaleType.Discrete:
      case ScaleType.Threshold:
        this.xScale = scaleLinear<number, number>()
          .domain([
            (this.cle.domain as number[])[0],
            (this.cle.domain as number[])[this.cle.domain.length - 1],
          ])
          .rangeRound([marginLeft, width - marginRight]);
        break;
      case ScaleType.Categorical:
        // xScale is not used for ScaleType.Categorical
        this.xScale = null;
        break;
      default:
        throw new Error(`Unrecognized scaleType: ${scaleType}`);
    }
  }

  /**
   * Handles setting fallback axis tick values for discrete & threshold scales
   * Handles setting the tickFormatter function
   */
  handleAxisTicks() {
    const { scaleType } = this.cle;
    if (
      scaleType !== ScaleType.Continuous &&
      scaleType !== ScaleType.Categorical
    ) {
      const [min, max] = this.xScale.domain() as [number, number];
      this.cle.tickValues = this.cle.tickValues || [
        min,
        ...((this.cle.colorScale as ScaleQuantize<number>)?.thresholds?.() ||
          (this.cle.colorScale.domain() as number[])),
        max,
      ];
    }
    if (this.cle.tickFormat?.length) {
      this.cle.tickFormatter = format(this.cle.tickFormat);
    } else {
      this.cle.tickFormatter = this.xScale.tickFormat(
        this.cle.ticks || DEFAULT_TICKS,
        this.cle.tickFormat || DEFAULT_TICK_FORMAT
      );
    }
  }
}
