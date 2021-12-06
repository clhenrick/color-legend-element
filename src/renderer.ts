import { svg, html, TemplateResult } from "lit";
import { DirectiveResult } from "lit/directive";
import { styleMap, StyleMapDirective } from "lit/directives/style-map.js";
import * as d3 from "d3";

import { ColorLegendElement } from "./color-legend-element";
import {
  Interpolator,
  ScaleType,
  MarkType,
  ScaleOrdinal,
  ScaleSequential,
  ScaleThreshold,
} from "./types";

export class Renderer {
  cle: ColorLegendElement;

  constructor(colorLegendElement: ColorLegendElement) {
    this.cle = colorLegendElement;
  }

  /**
   * Renders a categorical legend html
   * @returns lit-html TemplateResult or empty string
   */
  renderCategorical(): TemplateResult | string {
    if (this.cle.scaleType !== ScaleType.Categorical) {
      return "";
    }

    const domain = this.cle.domain as string[];
    const { markType, colorScale, height, marginTop, marginBottom } = this.cle;
    const getMarkStyle = (
      d: string
    ): DirectiveResult<typeof StyleMapDirective> =>
      styleMap({
        width:
          markType === MarkType.Line
            ? `${24}px`
            : `${height - marginTop - marginBottom}px`,
        height:
          markType === MarkType.Line
            ? "2px"
            : `${height - marginTop - marginBottom}px`,
        borderRadius: markType === "circle" ? "50%" : "",
        backgroundColor: (colorScale as ScaleOrdinal<string, string>)(d),
      });

    return html`${domain.map(
      (category) => html`<li class="legend-item">
        <div class="mark" style="${getMarkStyle(category) as string}"></div>
        <p class="label">${category}</p>
      </li>`
    )}`;
  }

  /**
   * Renders the continuous legend's color ramp SVG image
   * @returns lit-html TemplateResult or empty string
   */
  renderContinuous() {
    if (
      this.cle.scaleType !== ScaleType.Continuous ||
      this.cle.colorScale === null
    ) {
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
      d3.piecewise<string>(d3.interpolateHcl, range as string[]);

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
      this.cle.scaleType !== ScaleType.Discrete &&
      this.cle.scaleType !== ScaleType.Threshold
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
        } fill=${v}></rect>`
    )}`;
  }

  /**
   * Renders the legend's SVG x axis
   * @returns lit-html TemplateResult or empty string
   */
  renderAxis(): TemplateResult | string {
    if (!this.cle.xScale || this.cle.scaleType === ScaleType.Categorical)
      return "";

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
          d
        )}</text>
      </g>`
      );

    return svg`<g
      class="x-axis"
      transform="translate(0, ${height - marginBottom})"
      text-anchor="middle"
    >${renderAxisTicks()}</g>`;
  }

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
