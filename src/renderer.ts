import { svg, html, TemplateResult } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { piecewise, interpolateHcl } from "d3-interpolate";

import { ColorLegendElement } from "./color-legend-element";
import {
  Interpolator,
  ScaleOrdinal,
  ScaleSequential,
  ScaleThreshold,
} from "./types";

/** handles rendering the HTML for the color-legend
 * @ignore - for custom-elements.json
 */
export class Renderer {
  cle: ColorLegendElement;

  constructor(colorLegendElement: ColorLegendElement) {
    this.cle = colorLegendElement;
  }

  /**
   * render: handles rendering HTML & SVG markup for the current scaleType
   * @returns TemplateResult
   */
  render() {
    const title = this.cle.titleText
      ? html`<p class="legend-title">${this.cle.titleText}</p>`
      : "";
    const svgClasses = { hidden: this.cle.scaleType === "categorical" };
    const categoricalClasses = {
      hidden: this.cle.scaleType !== "categorical",
      "categorical-container": true,
    };

    return html`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${title}
      <slot name="subtitle"></slot>
      <svg
        class=${classMap(svgClasses)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${classMap(categoricalClasses)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`;
  }

  /**
   * Renders a categorical legend html
   * @returns lit-html TemplateResult or empty string
   */
  renderCategorical(): TemplateResult | string {
    if (this.cle.scaleType !== "categorical") {
      return "";
    }
    const { markType, colorScale, domain } = this.cle;
    const classes = {
      "legend-item": true,
      line: markType === "line",
      circle: markType === "circle",
    };
    return html`${(domain as string[]).map(
      (category) =>
        html`<li
          class=${classMap(classes)}
          style="--color:${(colorScale as ScaleOrdinal<string, string>)(
            category,
          )}"
        >
          ${category}
        </li>`,
    )}`;
  }

  /**
   * Renders the continuous legend's color ramp SVG image
   * @returns lit-html TemplateResult or empty string
   */
  renderContinuous() {
    if (this.cle.scaleType !== "continuous" || this.cle.colorScale === null) {
      return "";
    }

    const {
      colorScale,
      marginTop,
      marginLeft,
      marginRight,
      tickSize,
      width,
      range,
    } = this.cle;

    const marginBottom = this.cle.marginBottom + tickSize;
    const height = this.cle.height + tickSize;

    const colorInterpolator =
      (colorScale as ScaleSequential<string>).interpolator?.() ||
      piecewise<string>(interpolateHcl, range as string[]);

    return svg`<image
      x=${marginLeft}
      y=${marginTop}
      width=${width - marginRight - marginLeft}
      height=${height - marginTop - marginBottom}
      preserveAspectRatio="none"
      href=${this.getColorRamp(colorInterpolator).toDataURL()}
    ></image>`;
  }

  /**
   * Renders SVG Rects for a discrete or threshold color scale
   * @returns lit-html TemplateResult or empty string
   */
  renderDiscreteThreshold() {
    if (
      this.cle.scaleType !== "discrete" &&
      this.cle.scaleType !== "threshold"
    ) {
      return "";
    }

    const { tickSize, marginTop, marginLeft, colorScale, xScale } = this.cle;

    const height = this.cle.height + tickSize;
    const marginBottom = this.cle.marginBottom + tickSize;
    const values = colorScale.range() as string[];

    const rectX = (d: string) => {
      return (
        (colorScale as ScaleThreshold<number, string>)
          .invertExtent(d)
          .map(xScale)[0] || marginLeft
      );
    };

    const rectWidth = (d: string) => {
      let [x1, x2] = (colorScale as ScaleThreshold<number, string>)
        .invertExtent(d)
        .map(xScale) as [number, number];
      x1 = x1 || 0;
      x2 = x2 || xScale.range()[1];
      return x2 - x1;
    };

    return svg`${values.map(
      (v) =>
        svg`<rect x=${rectX(v)} y=${marginTop} width=${rectWidth(v)} height=${
          height - marginTop - marginBottom
        } fill=${v}></rect>`,
    )}`;
  }

  /**
   * Renders the legend's SVG x axis
   * @returns lit-html TemplateResult or empty string
   */
  renderAxis(): TemplateResult | string {
    if (!this.cle.xScale || this.cle.scaleType === "categorical") return "";

    const {
      ticks,
      tickSize,
      tickFormat,
      tickFormatter,
      tickValues,
      xScale,
      marginTop,
    } = this.cle;

    const height = this.cle.height + tickSize;
    const marginBottom = this.cle.marginBottom + tickSize;
    const values = tickValues?.length
      ? tickValues
      : (xScale.ticks.apply(xScale, [ticks, tickFormat]) as number[]);
    const spacing = Math.max(tickSize, 0) + 3;

    const renderAxisTicks = () =>
      values.map(
        (d) => svg`<g class="tick" transform='translate(${xScale(d)},0)'>
      <line stroke="currentColor" y2="${tickSize}" y1="${
        marginTop + marginBottom - height
      }"></line>
      <text fill="currentColor" y="${spacing}" dy="0.71em">${tickFormatter(
        d,
      )}</text>
      </g>`,
      );

    return svg`<g
      class="x-axis"
      transform="translate(0, ${height - marginBottom})"
      text-anchor="middle"
    >${renderAxisTicks()}</g>`;
  }

  /**
   * getColorRamp: constructs the canvas element used for continuous legends
   * @param colorInterpolator an interpolator function, e.g. one from d3-scale-chromatic
   * @param n width of canvas / number of colors
   * @returns HTMLCanvasElement
   */
  getColorRamp(colorInterpolator: Interpolator<string>, n = 256) {
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    canvas.setAttribute("height", `${1}`);
    canvas.setAttribute("width", `${n}`);
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    for (let i = 0; i < n; i++) {
      context.fillStyle = colorInterpolator(i / (n - 1));
      context.fillRect(i, 0, 1, 1);
    }

    return canvas;
  }
}
