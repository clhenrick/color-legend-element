import { MarkType, ScaleType } from "./types";

export const DEFAULT_WIDTH = 325;
export const DEFAULT_HEIGHT = 32;

export const DEFAULT_MARGIN_TOP = 6;
export const DEFAULT_MARGIN_RIGHT = 12;
export const DEFAULT_MARGIN_BOTTOM = 16;
export const DEFAULT_MARGIN_LEFT = 12;

export const DEFAULT_TICKS = 5;
export const DEFAULT_TICK_SIZE = 6;
export const DEFAULT_TICK_VALUES: number[] = null;
export const DEFAULT_TICK_FORMAT = ".1f";

export const DEFAULT_DOMAIN = [0, 1];
export const DEFAULT_RANGE = [
  "#ffffcc",
  "#a1dab4",
  "#41b6c4",
  "#2c7fb8",
  "#253494",
]; // d3.schemeYlGnBu[5]

export const DEFAULT_TITLE_TEXT = "Color Legend Element";

export const DEFAULT_MARK_TYPE: MarkType = "circle";
export const DEFAULT_SCALE_TYPE: ScaleType = "continuous";

export const COLOR_SCALE_PROPS = [
  "domain",
  "range",
  "interpolator",
  "scaleType",
];

export const AXIS_AND_X_SCALE_PROPS = [
  "scaleType",
  "ticks",
  "tickSize",
  "tickValues",
  "tickFormat",
  "tickFormatter",
  "domain",
  "range",
  "marginLeft",
  "marginRight",
  "marginBottom",
  "marginTop",
  "width",
  "height",
];
