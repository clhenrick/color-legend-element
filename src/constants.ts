import { MarkType, ScaleType } from "./types";

export const DEFAULT_WIDTH = 325;
export const DEFAULT_HEIGHT = 32;

export const DEFAULT_MARGIN_TOP = 6;
export const DEFAULT_MARGIN_RIGHT = 12;
export const DEFAULT_MARGIN_BOTTOM = 16;
export const DEFAULT_MARGIN_LEFT = 12;

export const DEFAULT_TICKS = DEFAULT_WIDTH / 64;
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

export const DEFAULT_MARK_TYPE = MarkType.Circle;
export const DEFAULT_SCALE_TYPE = ScaleType.Continuous;

export const MARK_TYPES = new Set([
  MarkType.Circle,
  MarkType.Line,
  MarkType.Rect,
]);

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
  "domain",
  "range",
  "marginLeft",
  "marginRight",
  "marginBottom",
  "marginTop",
  "width",
  "height",
];
