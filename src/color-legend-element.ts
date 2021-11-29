import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_MARGIN_BOTTOM,
  DEFAULT_MARGIN_LEFT,
  DEFAULT_MARGIN_RIGHT,
  DEFAULT_MARGIN_TOP,
  DEFAULT_TITLE_TEXT,
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
   * Reference to the SVG node
   */
  @query("svg")
  svg!: SVGSVGElement;

  override render() {
    const title = this.titleText ? html`<p class="legend-title">${this.titleText}</p>` : '';
    
    return html`<div
      class="cle-container"
      style="width:${this.width}px; height:auto;"
    >
      ${title}
      <svg width=${this.width} height=${this.height}></svg>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "color-legend-element": ColorLegendElement;
  }
}
