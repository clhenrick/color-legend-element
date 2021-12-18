import * as d3 from "d3";

import { ScaleType } from "./types";

import { ColorLegendElement } from "./color-legend-element";

export class ColorScaleSetter {
  cle: ColorLegendElement;

  constructor(cle: ColorLegendElement) {
    this.cle = cle;
  }

  /**
   * Sets the colorScale value from the scaleType value
   */
  setColorScale() {
    switch (this.cle.scaleType) {
      case ScaleType.Continuous:
        this.setContinousColorScale();
        break;
      case ScaleType.Discrete:
        this.setDiscreteColorScale();
        break;
      case ScaleType.Threshold:
        this.setThresholdColorScale();
        break;
      case ScaleType.Categorical:
        this.setCategoricalColorScale();
        break;
      default:
        this.invalidScaleType(this.cle.scaleType);
    }
  }

  /**
   * Sets the colorScale property to either a ScaleSequential or ScaleLinear
   */
  private setContinousColorScale() {
    const { interpolator, domain, range } = this.cle;
    this.cle.colorScale = interpolator
      ? d3.scaleSequential(interpolator).domain(domain as number[])
      : d3
          .scaleLinear<string>()
          .range(range as string[])
          .domain(domain as number[])
          .interpolate(d3.interpolateHcl);
  }

  /**
   * Sets the colorScale property to a ScaleQuantize
   */
  private setDiscreteColorScale() {
    this.cle.colorScale = d3
      .scaleQuantize<string>()
      .domain(this.cle.domain as number[])
      .range(this.cle.range);
  }

  /**
   * Sets the colorScale property to a ScaleThreshold
   */
  private setThresholdColorScale() {
    const domain = this.cle.domain as number[];
    this.cle.colorScale = d3
      .scaleThreshold<number, string>()
      .domain(domain.slice(1, domain.length - 1))
      .range(this.cle.range as string[]);
  }

  /**
   * Sets the colorScale to a ScaleOrdinal
   */
  private setCategoricalColorScale() {
    this.cle.colorScale = d3
      .scaleOrdinal<string, string>()
      .domain(this.cle.domain as string[])
      .range(this.cle.range as string[]);
  }

  /**
   * Handles warning the user they provided an invalid scale type
   * @param value string
   */
  private invalidScaleType(value: string) {
    throw new Error(`invalid property scaletype: ${value}. 
      Must be one of "categorical", "continuous", "discrete", "threshold".`);
  }
}
