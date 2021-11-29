import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('color-legend-element')
export class ColorLegendElement extends LitElement {
  @property({ type: String })
  name = 'World'

  override render() {
    return html`<p>Hello ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'color-legend-element': ColorLegendElement;
  }
}