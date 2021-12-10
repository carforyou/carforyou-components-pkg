import postcss from "rollup-plugin-postcss"
import external from "rollup-plugin-peer-deps-external"
import dts from "rollup-plugin-dts"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import copy from 'rollup-plugin-copy'

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
    plugins: [
      external(), // todo: react
      resolve(),
      postcss({
        extract: false,
        modules: true,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__/**/*", "**/__mocks__/**/*", "src/stories/**/*"],
      }),
      copy({
        targets: [
          { src: 'assets', dest: 'pkg' },
        ]
      })
    ],
  },
  {
    input: "./pkg/esm/types/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts()],
  },
]
