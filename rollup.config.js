import postcss from "rollup-plugin-postcss"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import dts from "rollup-plugin-dts"
import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-commonjs"

import packageJson from "./package.json"

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    // external(),
    //     resolve(),
    //     commonjs(),
    //     typescript({ tsconfig: './tsconfig.json' }),
    //     postcss(),
    //     terser()
    plugins: [
      peerDepsExternal(),
      postcss({
        extract: false,
        modules: true,
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "./pkg/esm/types/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts()],
  },
]
