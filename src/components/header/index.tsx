import React, { FC } from "react"
import classNames from "classnames"

import Logo from "../icons/logo"
import Profile from "../icons/profile"

import HeaderDropdown from "./dropdown"
import { HeaderTheme, HeaderThemeProvider } from "./themeContext"
import useModal from "../../hooks/useModal"

interface Props {
  renderLogo?: () => JSX.Element
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
  renderLogo = () => <Logo />,
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
  const iconColor = theme === HeaderTheme.DARK ? "#A0A7AB" : "#FFF"
  const languageNavigation = renderLanguageNavigation()

  const renderMobileNavigation = () => {
    return (
      <div className="min-w-screen text-black">
        <div className="min-w-100 w-logoDefault mx-headerMenu my-22">
          <Logo />
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
    <HeaderThemeProvider value={theme}>
      <div
        className={classNames({
          "h-headerTransparent bg-header--transparent":
            theme === HeaderTheme.TRANSPARENT,
        })}
      >
        <header
          className={classNames(
            "h-headerSmall lg:h-header px-15 md:px-20 py-15 flex items-center",
            {
              "bg-white": theme === HeaderTheme.LIGHT,
              "bg-grey-dark text-white": theme === HeaderTheme.DARK,
            }
          )}
        >
          <nav className="w-12/12 flex items-center">
            {/* Logo Section */}
            <div className="min-w-100 w-logoSmall lg:w-logoDefault mr-20 lg:mr-40">
              {renderLogo()}
            </div>
            {/* Links - LG / Desktop  */}
            <div className="flex flex-grow">
              <div className="hidden lg:flex items-center">
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
            <div className="flex items-center">
              {/* CTA Button */}
              <div className="mr-headerMenu cursor-pointer">
                {renderCTAButton()}
              </div>
              {/* Icons Button */}
              <div className="cursor-pointer">
                {iconButtons.map((renderIconButton, index) => {
                  return (
                    <div
                      className="mr-headerMenu"
                      key={`navigationLink-${index}`}
                    >
                      {renderIconButton()}
                    </div>
                  )
                })}
              </div>
              {/* Profile - LG / Desktop  */}
              <div
                className={classNames("hidden lg:block cursor-pointer", {
                  "mr-headerMenu": languageNavigation,
                })}
              >
                <HeaderDropdown
                  renderParent={() => <Profile color={iconColor} />}
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
                    "text-grey-3": theme === HeaderTheme.LIGHT,
                    "text-white":
                      theme === HeaderTheme.DARK || HeaderTheme.TRANSPARENT,
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
