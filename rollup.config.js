import summary from "rollup-plugin-summary";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
  external: ["d3"],
  input: "color-legend-element.js",
  output: [
    {
      file: "build/color-legend-element.bundled.js",
      format: "esm",
    },
    {
      file: "build/color-legend-element.umd.js",
      name: "color-legend-element",
      format: "umd",
      globals: {
        d3: "d3",
      },
    },
  ],
  onwarn(warning) {
    if (warning.code !== "THIS_IS_UNDEFINED") {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({ "Reflect.decorate": "undefined" }),
    resolve(),
    terser({
      ecma: 2017,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};
