import React, { FC } from "react"
import classNames from "classnames"

import LogoRedBlack from "../icons/logoRedBlack"
import LogoWhite from "../icons/logoWhite"
import LogoRedWhite from "../icons/logoRedWhite"
import Profile from "../icons/profile"

import HeaderDropdown from "./dropdown"
import {
  HeaderTheme,
  HeaderThemeProvider,
  getThemeCombinations,
} from "./themeContext"
import useModal from "../../hooks/useModal"

interface Props {
  links?: Array<() => JSX.Element>
  renderCTAButton?: () => JSX.Element
  iconButtons?: Array<() => JSX.Element>
  profile?: {
    renderWelcomeMessage: () => JSX.Element
    renderContent: () => JSX.Element
  }
  renderLanguageNavigation?: () => JSX.Element
  theme?: HeaderTheme
  mobileMenuText?: string
}

const Header: FC<Props> = ({
  theme = HeaderTheme.LIGHT,
  links = [],
  renderCTAButton = () => null,
  iconButtons = [],
  profile = {
    renderWelcomeMessage: () => null,
    renderContent: () => null,
  },
  renderLanguageNavigation = () => null,
  mobileMenuText = "MENU",
}) => {
  const {
    isLight,
    isDark,
    isTransparent,
    isDarkOrTransparent,
  } = getThemeCombinations(theme)
  const languageNavigation = renderLanguageNavigation()

  const themeLog = {
    [HeaderTheme.LIGHT]: <LogoRedBlack />,
    [HeaderTheme.DARK]: <LogoRedWhite />,
    [HeaderTheme.TRANSPARENT]: <LogoWhite />,
  }

  const renderMobileNavigation = () => {
    return (
      <div className="min-w-screen text-black">
        <div className="min-w-100 w-logoDefault mx-headerMenu my-22">
          <LogoRedBlack />
        </div>
        <div className="px-15">
          {profile.renderWelcomeMessage()}
          <hr className="-mx-headerMenu text-grey-1" />
          {links.map((renderLink, index) => {
            return <div key={`navigationLink-${index}`}>{renderLink()}</div>
          })}
          <hr className="-mx-headerMenu text-grey-1" />
          {profile.renderContent()}
          <hr className="-mx-headerMenu text-grey-1" />
          {languageNavigation}
        </div>
      </div>
    )
  }

  const { openModal, renderModal } = useModal(renderMobileNavigation, {
    size: "fullscreen",
    style: "white",
  })

  return (
    <HeaderThemeProvider theme={theme}>
      <div
        className={classNames({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "h-headerTransparent bg-header_transparent": isTransparent,
        })}
      >
        <header
          className={classNames(
            "h-headerSmall lg:h-header px-15 md:px-20 py-15 flex items-center",
            {
              "bg-white": isLight,
              "border-b border-grey-2": isLight,
              "bg-grey-dark": isDark,
              "text-white": isDarkOrTransparent,
            }
          )}
        >
          <nav className="w-12/12 flex items-center">
            {/* Logo Section */}
            <div className="min-w-100 w-logoSmall lg:w-logoDefault mr-20 xl:mr-40">
              <a href="https://www.carforyou.ch/">{themeLog[theme]}</a>
            </div>
            {/* Links - LG / Desktop  */}
            <div className="flex flex-grow">
              <div className="hidden lg:flex items-center text-center">
                {links.map((renderLink, index) => {
                  return (
                    <div
                      className="mr-headerMenu"
                      key={`navigationLink-${index}`}
                    >
                      {renderLink()}
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Right Section */}
            <div
              className={classNames("flex items-center cursor-pointer", {
                "text-grey-3": isLight,
              })}
            >
              {/* CTA Button */}
              <div className="mr-headerMenu ">{renderCTAButton()}</div>
              {/* Icons Button */}
              <div>
                {iconButtons.map((renderIconButton, index) => {
                  return (
                    <div
                      className="mr-headerMenu hover:opacity-60"
                      key={`navigationLink-${index}`}
                    >
                      {renderIconButton()}
                    </div>
                  )
                })}
              </div>
              {/* Profile - LG / Desktop  */}
              <div
                className={classNames("hidden lg:block", {
                  "mr-headerMenu": languageNavigation,
                })}
              >
                <HeaderDropdown
                  renderParent={() => (
                    <div
                      className={classNames({
                        "text-grey-3": isLight,
                        "text-white": isDarkOrTransparent,
                      })}
                    >
                      <Profile />
                    </div>
                  )}
                  theme={theme}
                  stickOut="left"
                >
                  <div className="m-headerMenu w-profileDropdown">
                    {profile.renderWelcomeMessage()}
                    <hr className="-mx-headerMenu text-grey-1 mb-20" />
                    {profile.renderContent()}
                  </div>
                </HeaderDropdown>
              </div>
              {/* Language Navigation - LG / Desktop */}
              <div className="hidden lg:block">{languageNavigation}</div>
              {/* Menu Block Groups for mobile */}
              <div className="block lg:hidden">
                <a
                  onClick={openModal}
                  className={classNames("cursor-pointer", {
                    "text-grey-3": isLight,
                    "text-white": isDarkOrTransparent,
                  })}
                >
                  {mobileMenuText}
                </a>
                {renderModal()}
              </div>
            </div>
          </nav>
        </header>
      </div>
    </HeaderThemeProvider>
  )
}

export default Header
