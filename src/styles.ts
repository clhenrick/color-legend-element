import { css } from "lit";

export const styles = css`
  :host {
    --cle-font-family: "Roboto", sans-serif;
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight-bold: 500;
    --cle-font-color: #202124;

    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-font-color);
    display: inline-block;
    padding: 0.5rem;
  }

  :host([hidden]),
  .hidden {
    display: none;
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-font-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-bold);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  .categorical-container {
    padding: 0;
    margin: 0;
  }

  .categorical-container .legend-item {
    display: inline-flex;
    align-items: center;
    margin-right: 0.75rem;
    margin-top: 0.375rem;
  }

  .legend-item p.label {
    display: inline-block;
    font-size: var(--cle-font-size);
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0.375rem;
  }
`;
