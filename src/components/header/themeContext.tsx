import React, { createContext, FC } from "react"

export enum HeaderTheme {
  LIGHT = "light",
  DARK = "dark",
  TRANSPARENT = "transparent",
}
export interface HeaderThemeValues {
  isLight: boolean
  isDark: boolean
  isTransparent: boolean
  isDarkOrTransparent: boolean
  isLightOrDark: boolean
}

export const getThemeCombinations = (
  theme: HeaderTheme
): HeaderThemeValues => ({
  isLight: theme === HeaderTheme.LIGHT,
  isDark: theme === HeaderTheme.DARK,
  isTransparent: theme === HeaderTheme.TRANSPARENT,
  isDarkOrTransparent: [HeaderTheme.DARK, HeaderTheme.TRANSPARENT].includes(
    theme
  ),
  isLightOrDark: [HeaderTheme.LIGHT, HeaderTheme.DARK].includes(theme),
})

const HeaderThemeContext = createContext(
  getThemeCombinations(HeaderTheme.LIGHT)
)

export const HeaderThemeProvider: FC<{ theme: HeaderTheme }> = ({
  children,
  theme,
}) => {
  return (
    <HeaderThemeContext.Provider value={getThemeCombinations(theme)}>
      {children}
    </HeaderThemeContext.Provider>
  )
}

export default HeaderThemeContext
