import { createContext } from "react"

export enum HeaderTheme {
  LIGHT = "light",
  DARK = "dark",
  TRANSPARENT = "transparent",
}

const HeaderThemeContext = createContext(HeaderTheme.LIGHT)

export const HeaderThemeProvider = HeaderThemeContext.Provider
export default HeaderThemeContext
