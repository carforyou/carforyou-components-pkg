import merge from "deepmerge"

// eslint-disable-next-line import/no-internal-modules
import * as _theme from "./theme/index"
const defaultTheme = _theme.default

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

const resolveConfig = (): TailwindTheme => {
  const theme = {}

  const getKey = (key) => {
    return defaultTheme[key]
  }

  for (const conf in defaultTheme) {
    if (Object.prototype.hasOwnProperty.call(defaultTheme, conf)) {
      theme[conf] =
        typeof defaultTheme[conf] === "function"
          ? defaultTheme[conf](getKey)
          : defaultTheme[conf]
    }
  }

  return theme
}

const resolvedTheme: TailwindTheme = resolveConfig()

const withDefaultTheme = (customTheme: TailwindTheme) => {
  return merge(resolvedTheme, customTheme || {})
}

export { withDefaultTheme, resolvedTheme as defaultTheme }
