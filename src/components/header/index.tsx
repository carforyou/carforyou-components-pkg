import React, { FC } from "react"
import classNames from "classnames"

import Logo from "../icons/CFY/logo"
import Profile from "../icons/profile"
import Heart from "../icons/heart"
import Plus from "../icons/plus"

import HeaderDropdown from "./dropdown"
import Button from "../button"

export enum HeaderTheme {
  WHITE = "white",
  DARK = "dark",
  TRANSPARENT = "transparent"
}

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
  theme = HeaderTheme.WHITE,
  renderLogo = () => <Logo />,
  links = [],
  renderCTAButton = () => null,
  iconButtons = [],
  renderProfileContent = () => null,
  renderLanguageNavigation = () => null
}) => {
  const defaultTheme = {
    headerBackground: "bg-white"
  }

  const selectedTheme = defaultTheme
  console.log("theme ", theme)
  console.log("logo ", renderLogo())

  return (
    <header
      className={`${selectedTheme.headerBackground} px-15 md:px-20 py-15 min-h-header flex items-center`}
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
              renderParent={() => <Profile color="#000" />}
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
  )
}

export default Header
