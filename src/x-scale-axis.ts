import * as d3 from "d3";
import { ColorLegendElement } from "./color-legend-element";
import { ScaleType, ScaleQuantize } from "./types";
import { DEFAULT_TICKS, DEFAULT_TICK_FORMAT } from "./constants";

export class AxisTicksSetter {
  cle: ColorLegendElement;

  constructor(cle: ColorLegendElement) {
    this.cle = cle;
  }

  /**
   * Sets the xScale property based on the scaleType
   */
  setXScale() {
    const { scaleType, marginLeft, width, marginRight } = this.cle;
    this.cle.domain = this.cle.domain as number[];
    switch (scaleType) {
      case ScaleType.Continuous:
        this.cle.xScale = d3
          .scaleLinear()
          .domain(this.cle.domain)
          .range([marginLeft, width - marginRight]);
        break;
      case ScaleType.Discrete:
      case ScaleType.Threshold:
        this.cle.xScale = d3
          .scaleLinear<number, number>()
          .domain([
            this.cle.domain[0],
            this.cle.domain[this.cle.domain.length - 1],
          ])
          .rangeRound([marginLeft, width - marginRight]);
        break;
      default:
        break;
    }
  }

  /**
   * Handles configuring the x axis for non-categorical scale types
   */
  handleAxisTicks() {
    if (this.cle.scaleType === ScaleType.Discrete) {
      const [min, max] = this.cle.colorScale.domain() as [number, number];
      this.cle.tickValues = this.cle.tickValues || [
        min,
        ...((
          this.cle.colorScale as ScaleQuantize<number>
        )?.thresholds?.() as number[]),
        max,
      ];
    } else if (this.cle.scaleType === ScaleType.Threshold) {
      const [min, max] = this.cle.xScale.domain();
      this.cle.tickValues = this.cle.tickValues || [
        min,
        ...(this.cle.colorScale.domain() as number[]),
        max,
      ];
    }

    if (this.cle.tickFormat?.length) {
      this.cle.tickFormatter = d3.format(this.cle.tickFormat);
    } else {
      this.cle.tickFormatter = this.cle.xScale.tickFormat(
        this.cle.ticks || DEFAULT_TICKS,
        this.cle.tickFormat || DEFAULT_TICK_FORMAT
      );
    }
  }
}
