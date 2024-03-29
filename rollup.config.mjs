import postcss from "rollup-plugin-postcss"
import copy from "rollup-plugin-copy"
import { dirname } from "path"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

import packageJson from "./package.json" assert { type: "json" }
const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
]

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
        dir: dirname(packageJson.module),
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__*__/**/*"],
      }),
      postcss({
        extract: false,
        modules: true,
      }),
      copy({
        targets: [{ src: "src/assets/dist/**/*", dest: "pkg" }],
        flatten: false,
      }),
    ],
    external,
  },
]
