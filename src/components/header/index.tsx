import React, { FC } from "react"
import classNames from "classnames"

import Logo from "../icons/logo"
import Profile from "../icons/profile"

import HeaderDropdown from "./dropdown"
import { HeaderTheme, HeaderThemeProvider } from "./themeContext"

interface Props {
  renderLogo?: () => JSX.Element
  links?: Array<() => JSX.Element>
  renderCTAButton?: () => JSX.Element
  iconButtons?: Array<() => JSX.Element>
  renderProfileContent?: () => JSX.Element
  renderLanguageNavigation?: () => JSX.Element
  theme?: HeaderTheme
}

const Header: FC<Props> = ({
  theme = HeaderTheme.LIGHT,
  renderLogo = () => <Logo />,
  links = [],
  renderCTAButton = () => null,
  iconButtons = [],
  renderProfileContent = () => null,
  renderLanguageNavigation = () => null
}) => {
  let iconColor = "#A0A7AB"
  if (theme === HeaderTheme.DARK || theme === HeaderTheme.TRANSPARENT) {
    iconColor = "#FFF"
  }

  return (
    <HeaderThemeProvider value={theme}>
      <div
        className={classNames({
          "h-headerTransparent": theme === HeaderTheme.TRANSPARENT,
          "bg-header--transparent": theme === HeaderTheme.TRANSPARENT
        })}
      >
        <header
          className={classNames(
            "px-15 md:px-20 py-15  flex items-center h-header",
            {
              "bg-white": theme === HeaderTheme.LIGHT,
              "bg-grey-dark": theme === HeaderTheme.DARK,
              "text-white": theme === HeaderTheme.DARK
            }
          )}
        >
          <nav className="w-12/12 flex items-center">
            <div className="mr-40">{renderLogo()}</div>
            <div className="flex md:flex-grow items-center">
              {links.map((renderLink, index) => {
                return (
                  <div className="mr-15" key={`navigationLink-${index}`}>
                    {renderLink()}
                  </div>
                )
              })}
            </div>
            <div className="flex items-center">
              <div className="mr-15 cursor-pointer">{renderCTAButton()}</div>
              <div className="cursor-pointer">
                {iconButtons.map((renderIconButton, index) => {
                  return (
                    <div className="mr-15" key={`navigationLink-${index}`}>
                      {renderIconButton()}
                    </div>
                  )
                })}
              </div>
              <div className="mr-15 cursor-pointer">
                <HeaderDropdown
                  renderParent={() => <Profile color={iconColor} />}
                  theme={theme}
                  stickOut="left"
                >
                  {renderProfileContent()}
                </HeaderDropdown>
              </div>
              <div>{renderLanguageNavigation()}</div>
            </div>
          </nav>
        </header>
      </div>
    </HeaderThemeProvider>
  )
}

export default Header
