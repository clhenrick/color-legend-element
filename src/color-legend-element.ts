import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import * as d3 from "d3";

import {
  ColorScale,
  ScaleType,
  Interpolator,
  ChangedProps,
} from "./types";

import {
  COLOR_SCALE_PROPS,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_MARGIN_BOTTOM,
  DEFAULT_MARGIN_LEFT,
  DEFAULT_MARGIN_RIGHT,
  DEFAULT_MARGIN_TOP,
  DEFAULT_TITLE_TEXT,
  DEFAULT_DOMAIN,
  DEFAULT_RANGE,
  DEFAULT_SCALE_TYPE,
} from "./constants";

@customElement("color-legend-element")
export class ColorLegendElement extends LitElement {
  /**
   * The title text that displays at the top of the legend
   */
  @property({ type: String })
  titleText = DEFAULT_TITLE_TEXT;

  /**
   * The width of the SVG or categorical legend div element
   */
  @property({ type: Number })
  width = DEFAULT_WIDTH;

  /**
   * The height of the SVG element
   */
  @property({ type: Number })
  height = DEFAULT_HEIGHT;

  /**
   * The spacing between the legend bar and top most extent of the SVG
   */
  @property({ type: Number })
  marginTop = DEFAULT_MARGIN_TOP;

  /**
   * The spacing between the legend bar and right most extent of the SVG
   */
  @property({ type: Number })
  marginRight = DEFAULT_MARGIN_RIGHT;

  /**
   * The spacing between the legend bar and bottom most extent of the SVG
   */
  @property({ type: Number })
  marginBottom = DEFAULT_MARGIN_BOTTOM;

  /**
   * The spacing between the legend bar and left most extent of the SVG
   */
  @property({ type: Number })
  marginLeft = DEFAULT_MARGIN_LEFT;

  /**
   * The type of legend to render based on d3-scale
   */
  @property({ type: String })
  scaleType: ScaleType = DEFAULT_SCALE_TYPE;

  /**
   * The color scale's domain values
   */
  @property({ type: Array })
  domain: number[] | string[] = DEFAULT_DOMAIN;

  /**
   * The color scale's range values
   */
  @property({ type: Array })
  range: string[] | number[] = DEFAULT_RANGE;

  /**
   * Reference to the SVG node
   */
  @query("svg")
  svg!: SVGSVGElement;

  /**
   * A type of d3-scale function for setting color values
   */
  colorScale!: ColorScale;

  /**
   * a color interpolator such as from d3-scale-chromatic
   */
  private _interpolator!: Interpolator<string>;

  override render() {
    const title = this.titleText
      ? html`<p class="legend-title">${this.titleText}</p>`
      : "";

    return html`<div
      class="cle-container"
      style="width:${this.width}px; height:auto;"
    >
      ${title}
      <svg width=${this.width} height=${this.height}></svg>
    </div>`;
  }

  /**
   * Lit lifecycle method that is called before an update to the component's DOM
   * @param changedProps: ChangedProps
   */
   override willUpdate(changedProps: ChangedProps) {
    if (COLOR_SCALE_PROPS.some((prop) => changedProps.has(prop))) {
      this.setColorScale();
    }
  }

  /**
   * Sets the colorScale value from the scaleType value
   */
  private setColorScale() {
    switch (this.scaleType) {
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
        this.invalidScaleType(this.scaleType);
    }
  }

  /**
   * Sets the colorScale property to either a ScaleSequential or ScaleLinear
   */
  private setContinousColorScale() {
    const interpolatorFn = this.interpolator;
    this.colorScale = interpolatorFn
      ? d3.scaleSequential(interpolatorFn).domain(this.domain as number[])
      : d3
          .scaleLinear<string>()
          .range(this.range as string[])
          .domain(this.domain as number[])
          .interpolate(d3.interpolateHcl);
  }

  /**
   * Sets the colorScale property to a ScaleQuantize
   */
  private setDiscreteColorScale() {
    this.colorScale = d3
      .scaleQuantize()
      .domain(this.domain as number[])
      .range(this.range as number[]);
  }

  /**
   * Sets the colorScale property to a ScaleThreshold
   */
  private setThresholdColorScale() {
    const domain = this.domain as number[];
    this.colorScale = d3
      .scaleThreshold<number, string>()
      .domain(domain.slice(1, domain.length - 1))
      .range(this.range as string[]);
  }

  /**
   * Sets the colorScale to a ScaleOrdinal
   */
  private setCategoricalColorScale() {
    this.colorScale = d3
      .scaleOrdinal<string, string>()
      .domain(this.domain as unknown as string[])
      .range(this.range as unknown as string[]);
  }

  private invalidScaleType(value:string) {
    throw new Error(`invalid property scaletype: ${value}. 
      Must be one of "categorical", "continuous", "discrete", "threshold".`);
  }

  get interpolator() {
    return this._interpolator;
  }

  set interpolator(value) {
    if (value && typeof value === "function") {
      this._interpolator = value;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "color-legend-element": ColorLegendElement;
  }
}
