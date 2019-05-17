import merge from "merge-deep"
import defaultConfig from "./defaultConfig"

export interface TailwindConfig {
  colors?: { [key: string]: string }
  textColors?: { [key: string]: string }
  borderColors?: { [key: string]: string }
  backgroundColors?: { [key: string]: string }
  backgroundSize?: { [key: string]: string }
  screens?: { [key: string]: string }
  fonts?: { [key: string]: string }
  textSizes?: { [key: string]: string }
  fontWeights?: { [key: string]: string | number }
  leading?: { [key: string]: string | number }
  tracking?: { [key: string]: string }
  borderRadius?: { [key: string]: string }
  borderWidths?: { [key: string]: string }
  width?: { [key: string]: string }
  minWidth?: { [key: string]: string }
  maxWidth?: { [key: string]: string }
  height?: { [key: string]: string }
  minHeight?: { [key: string]: string }
  maxHeight?: { [key: string]: string }
  padding?: { [key: string]: string }
  margin?: { [key: string]: string }
  negativeMargin?: { [key: string]: string }
  shadows?: { [key: string]: string }
  zIndex?: { [key: string]: string | number }
  opacity?: { [key: string]: string }
  svgFill?: { [key: string]: string }
  svgStroke?: { [key: string]: string }
  rotate?: { [key: string]: string }
  options?: { [key: string]: string | number | boolean }
  modules?: { [key: string]: string[] }
  plugins?: any[]
}

const withDefaultConfig = (customConfig: TailwindConfig) => {
  return merge(defaultConfig, customConfig || {})
}

export { withDefaultConfig, defaultConfig }
