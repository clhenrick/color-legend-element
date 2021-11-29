import * as d3 from "d3";
import { ColorLegendElement } from "./color-legend-element";
import { ScaleType } from "./types";


export class XScaleAxis {
  cle: ColorLegendElement;

  constructor(cle: ColorLegendElement) {
    this.cle = cle;
  }

  /**
   * Sets the xScale property based on the scaleType
   */
   setXScale() {
    const { scaleType, marginLeft, width, marginRight } = this.cle;
    (this.cle.domain = this.cle.domain as number[])
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
          .domain([this.cle.domain[0], this.cle.domain[this.cle.domain.length - 1]])
          .rangeRound([marginLeft, width - marginRight]);
        break;
      default:
        break;
    }
  }
}