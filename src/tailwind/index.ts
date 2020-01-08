import merge_ from "deepmerge"
import defaultConfig from "./defaultConfig"

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
  rotate?: { [key: string]: string }
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
  plugins?: any[]
}

const resolveConfig = config => {
  const theme = {}

  const getKey = key => {
    return defaultConfig.theme[key]
  }

  for (const conf in config.theme) {
    if (config.theme.hasOwnProperty(conf)) {
      theme[conf] =
        typeof config.theme[conf] === "function"
          ? config.theme[conf](getKey)
          : config.theme[conf]
    }
  }

  return { ...config, theme }
}

const resolvedConfig: TailwindConfig = resolveConfig(defaultConfig)

const withDefaultConfig = (customConfig: TailwindConfig) => {
  const customTheme = resolveConfig(customConfig)
  return mergeDeep(resolvedConfig, customTheme || {})
}

export { withDefaultConfig, resolvedConfig as defaultConfig }
