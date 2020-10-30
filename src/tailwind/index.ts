import merge_ from "deepmerge"
import defaultConfig from "./defaultConfig"
import resolveConfig from "tailwindcss/resolveConfig"

const mergeDeep = merge_

export interface TailwindTheme {
  screens?: { [key: string]: string }
  colors?: { [key: string]: string }
  backgroundColor?: { [key: string]: string }
  backgroundPosition?: { [key: string]: string }
  backgroundSize?: { [key: string]: string }
  borderColor?: { [key: string]: string }
  borderRadius?: { [key: string]: string }
  borderWidth?: { [key: string]: string }
  boxShadow?: { [key: string]: string }
  fontFamily?: { [key: string]: string }
  fontSize?: { [key: string]: string }
  fontWeight?: { [key: string]: string }
  height?: { [key: string]: string }
  letterSpacing?: { [key: string]: string }
  lineHeight?: { [key: string]: string }
  margin?: { [key: string]: string }
  minWidth?: { [key: string]: string }
  maxWidth?: { [key: string]: string }
  minHeight?: { [key: string]: string }
  maxHeight?: { [key: string]: string }
  opacity?: { [key: string]: string }
  padding?: { [key: string]: string }
  customRotate?: { [key: string]: string }
  textColors?: { [key: string]: string }
  width?: { [key: string]: string }
  zIndex?: { [key: string]: string | number }
  svgFill?: { [key: string]: string }
  svgStroke?: { [key: string]: string }
}

export interface TailwindConfig {
  theme?: TailwindTheme
  options?: { [key: string]: string | number | boolean }
  modules?: { [key: string]: string[] }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins?: any[]
}

const resolvedConfig: TailwindConfig = resolveConfig(defaultConfig)

const withDefaultConfig = (customConfig: TailwindConfig) => {
  const customTheme = resolveConfig(customConfig)
  return mergeDeep(resolvedConfig, customTheme || {})
}

export { withDefaultConfig, resolvedConfig as defaultConfig }
