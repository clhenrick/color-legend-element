import { LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import { ColorScaleSetter } from "./color-scale";
import { Renderer } from "./renderer";
import { AxisTicksSetter } from "./x-scale-axis";
import { styles } from "./styles";

import {
  ColorScale,
  XScale,
  MarkType,
  ScaleType,
  Interpolator,
  ChangedProps,
  TickFormatter,
} from "./types";

import {
  COLOR_SCALE_PROPS,
  AXIS_AND_X_SCALE_PROPS,
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
  DEFAULT_TICKS,
  DEFAULT_TICK_FORMAT,
  DEFAULT_TICK_SIZE,
  DEFAULT_TICK_VALUES,
} from "./constants";

@customElement("color-legend")
export class ColorLegendElement extends LitElement {
  static override styles = [styles];

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
  range = DEFAULT_RANGE;

  /**
   * The mark type for categorical legends
   */
  @property({ type: String })
  markType: MarkType = DEFAULT_MARK_TYPE;

  /**
   * The desired number of axis ticks
   */
  @property({ type: Number })
  ticks = DEFAULT_TICKS;

  /**
   * The d3-format specifier to format axis tick values
   */
  @property({ type: String })
  tickFormat = DEFAULT_TICK_FORMAT;

  /**
   * The size or length of the axis ticks
   */
  @property({ type: Number })
  tickSize = DEFAULT_TICK_SIZE;

  /**
   * The explicit values to be used for axis ticks
   */
  @property({ type: Array })
  tickValues: number[] = DEFAULT_TICK_VALUES;

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
      // note: we don't need to call requestUpdate() here because when
      // "interpolator" is set the colorScaleSetter will perform the necessary update
    } else {
      throw new Error("interpolator must be a function.");
    }
  }

  /**
   * Function that formats the xAxis tick values, set internally but may also be set externally
   */
  private _tickFormatter!: TickFormatter;

  @property({ attribute: false })
  get tickFormatter() {
    return this._tickFormatter;
  }

  set tickFormatter(value) {
    if (typeof value === "function") {
      const oldVal = this.tickFormatter;
      this._tickFormatter = value;
      this.requestUpdate("tickFormatter", oldVal);
    } else {
      throw new Error("tickFormatter must be a function.");
    }
  }

  /**
   * Handles configuring the colorScale
   */
  private colorScaleSetter = new ColorScaleSetter(this);

  /**
   * A type of d3-scale for applying color values to the legend item(s),
   * set internally by the colorScaleSetter.
   */
  colorScale!: ColorScale;

  /**
   * Handles rendering of HTML/SVG markup from the scaleType
   */
  private renderer = new Renderer(this);

  /**
   * Configures the x scale and axis ticks
   */
  private axisTickSetter = new AxisTicksSetter(this);

  /**
   * A d3 linear scale used for generating axis ticks,
   * set internally by the axisTickSetter
   */
  xScale!: XScale;

  /**
   * Invoked on each update to perform rendering tasks. This method may return any
   * value renderable by lit-html's ChildPart - typically a TemplateResult
   * @returns TemplateResult
   */
  override render() {
    return this.renderer.render();
  }

  /**
   * Lit lifecycle method that is called before an update to the component's DOM
   * @param changedProps: ChangedProps
   */
  override willUpdate(changedProps: ChangedProps) {
    if (COLOR_SCALE_PROPS.some((prop) => changedProps.has(prop))) {
      this.colorScaleSetter.setColorScale();
    }

    if (AXIS_AND_X_SCALE_PROPS.some((prop) => changedProps.has(prop))) {
      this.axisTickSetter.setXScale();
      this.axisTickSetter.handleAxisTicks();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "color-legend": ColorLegendElement;
  }
}
