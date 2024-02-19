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

export type TickFormatter = (d: number) => string;

/** the type of shape rendered when ScaleType is "categorical" */
export type MarkType = "rect" | "circle" | "line";

/** available scales, similar to those of d3-scale */
export type ScaleType = "categorical" | "continuous" | "discrete" | "threshold";

export type ChangedProps = Map<string, number | string>;
