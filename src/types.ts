import {
  ScaleBand,
  ScaleDiverging,
  ScaleSequential,
  ScaleOrdinal,
  ScaleQuantile,
  ScaleQuantize,
  ScaleThreshold,
  ScaleLinear,
} from "d3-scale";

export {
  ScaleSequential,
  ScaleQuantile,
  ScaleQuantize,
  ScaleThreshold,
  ScaleDiverging,
  ScaleOrdinal,
  ScaleLinear,
  ScaleBand,
};

export type ColorScale =
  | ScaleLinear<number | string, string>
  | ScaleSequential<string>
  | ScaleDiverging<string>
  | ScaleQuantile<string>
  | ScaleQuantize<number>
  | ScaleThreshold<number, string>
  | ScaleOrdinal<string | number, string>;

export type XScale = ScaleLinear<number, number, unknown>;

export type Interpolator<T> = (t: number) => T;

export const enum MarkType {
  Rect = "rect",
  Circle = "circle",
  Line = "line",
}

export const enum ScaleType {
  Categorical = "categorical",
  Continuous = "continuous",
  Discrete = "discrete",
  Threshold = "threshold",
}

export type ChangedProps = Map<string, number | string>;
