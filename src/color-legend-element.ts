import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import { ColorScaleSetter } from "./color-scale";
import { Renderer } from "./renderer";

import {
  ColorScale,
  XScale,
  MarkType,
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
  DEFAULT_MARK_TYPE,
  DEFAULT_TICK_SIZE,
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
   * The mark type for categorical legends
   */
  @property({ type: String })
  markType: MarkType = DEFAULT_MARK_TYPE;

  /**
   * The size or length of the axis ticks
   */
  @property({ type: Number })
  tickSize = DEFAULT_TICK_SIZE;

  /**
   * Reference to the SVG node
   */
  @query("svg")
  svg!: SVGSVGElement;

  /**
   * a color interpolator function such as one from d3-scale-chromatic
   */
  private _interpolator!: Interpolator<string>;

  @property({ attribute: false })
  get interpolator() {
    return this._interpolator;
  }

  set interpolator(value) {
    if (typeof value === "function") {
      this._interpolator = value;
    } else {
      throw new Error("Interpolator must be a function.");
    }
  }

  /**
   * Handles configuring the colorScale
   */
  private colorScaleSetter = new ColorScaleSetter(this);

  /**
   * A type of d3-scale for applying color values to the legend item(s)
   */
  colorScale!: ColorScale;

  /**
   * Handles rendering of various scale types
   */
  private renderer = new Renderer(this);

  /**
   * A d3 linear scale for generating axis ticks
   */
  xScale!: XScale;

  /**
   * Invoked on each update to perform rendering tasks. This method may return any
   * value renderable by lit-html's ChildPart - typically a TemplateResult
   * @returns TemplateResult
   */
  override render() {
    const title = this.titleText
      ? html`<p class="legend-title">${this.titleText}</p>`
      : "";

    return html`<div
      class="cle-container"
      style="width:${this.width}px; height:auto;"
    >
      ${title}
      <svg width=${this.width} height=${this.height}>
        ${this.renderer.renderContinuous()}
      </svg>
    </div>`;
  }

  /**
   * Lit lifecycle method that is called before an update to the component's DOM
   * @param changedProps: ChangedProps
   */
  override willUpdate(changedProps: ChangedProps) {
    if (COLOR_SCALE_PROPS.some((prop) => changedProps.has(prop))) {
      this.colorScaleSetter.setColorScale();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "color-legend-element": ColorLegendElement;
  }
}
