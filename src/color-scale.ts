import {
  scaleSequential,
  scaleLinear,
  scaleThreshold,
  scaleOrdinal,
  scaleQuantize,
} from "d3-scale";
import { interpolateHcl } from "d3-interpolate";

import { ColorScale } from "./types";

import { ColorLegendElement } from "./color-legend-element";

/**
 * handles setting the color scale for the color-legend
 * @ignore - for custom-elements.json
 */
export class ColorScaleSetter {
  cle: ColorLegendElement;

  colorScale!: ColorScale;

  constructor(cle: ColorLegendElement) {
    this.cle = cle;
  }

  /**
   * Sets the colorScale value from the scaleType value
   */
  setColorScale() {
    switch (this.cle.scaleType) {
      case "continuous":
        this.setContinousColorScale();
        break;
      case "discrete":
        this.setDiscreteColorScale();
        break;
      case "threshold":
        this.setThresholdColorScale();
        break;
      case "categorical":
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
    this.colorScale = interpolator
      ? scaleSequential(interpolator).domain(domain as number[])
      : scaleLinear<string>()
          .range(range as string[])
          .domain(domain as number[])
          .interpolate(interpolateHcl);
  }

  /**
   * Sets the colorScale property to a ScaleQuantize
   */
  private setDiscreteColorScale() {
    this.colorScale = scaleQuantize<string>()
      .domain(this.cle.domain as number[])
      .range(this.cle.range);
  }

  /**
   * Sets the colorScale property to a ScaleThreshold
   */
  private setThresholdColorScale() {
    const domain = this.cle.domain as number[];
    this.colorScale = scaleThreshold<number, string>()
      .domain(domain.slice(1, domain.length - 1))
      .range(this.cle.range as string[]);
  }

  /**
   * Sets the colorScale to a ScaleOrdinal
   */
  private setCategoricalColorScale() {
    this.colorScale = scaleOrdinal<string, string>()
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
