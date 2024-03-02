import { scaleLinear } from "d3-scale";
import { format } from "d3-format";
import { ColorLegendElement } from "./color-legend-element";
import { ScaleQuantize, XScale } from "./types";
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
      case "continuous":
        this.xScale = scaleLinear()
          .domain(this.cle.domain as number[])
          .range([marginLeft, width - marginRight]);
        break;
      case "discrete":
      case "threshold":
        this.xScale = scaleLinear<number, number>()
          .domain([
            (this.cle.domain as number[])[0],
            (this.cle.domain as number[])[this.cle.domain.length - 1],
          ])
          .rangeRound([marginLeft, width - marginRight]);
        break;
      case "categorical":
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
    if (
      (this.cle.scaleType === "discrete" ||
        this.cle.scaleType === "threshold") &&
      !this.cle.tickValues
    ) {
      const [min, max] = this.xScale.domain() as [number, number];
      this.cle.tickValues = [
        min,
        ...((this.cle.colorScale as ScaleQuantize<number>)?.thresholds?.() ||
          (this.cle.colorScale.domain() as number[])),
        max,
      ];
    }
    // prefer `tickFormatter` property if it has been set
    // TODO: how to override `tickFormat` after tickFormatter has previously been set and is already a function?
    if (typeof this.cle.tickFormatter === "function") {
      return;
    } else if (this.cle.tickFormat?.length) {
      // else prefer `tickFormat` attribute / property if it has been set
      this.cle.tickFormatter = format(this.cle.tickFormat);
    } else {
      // else fallback to default tick formatting settings
      this.cle.tickFormatter = this.xScale.tickFormat(
        this.cle.ticks || DEFAULT_TICKS,
        this.cle.tickFormat || DEFAULT_TICK_FORMAT,
      );
    }
  }
}
