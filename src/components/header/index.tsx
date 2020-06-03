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
  theme?: HeaderTheme
  mobileMenuText?: string
  links?: Array<JSX.Element>
  ctaButton?: JSX.Element
  iconButtons: Array<JSX.Element>
  profile?: {
    renderWelcomeMessage: () => JSX.Element
    renderContent: () => JSX.Element
  }
  languageNavigation: JSX.Element
}

const Header: FC<Props> = ({
  theme = HeaderTheme.LIGHT,
  links = [],
  ctaButton = null,
  iconButtons = [],
  profile = {
    renderWelcomeMessage: () => null,
    renderContent: () => null,
  },
  languageNavigation = null,
  mobileMenuText = "MENU",
}) => {
  const { isLight, isDark, isTransparent } = getThemeCombinations(theme)

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
        <div
          className="px-14"
          onClick={({ target }) => {
            while (target) {
              if (target instanceof HTMLAnchorElement) {
                closeModal()
                break
              }

              target = (target as HTMLElement).parentNode
            }
          }}
        >
          {profile.renderWelcomeMessage()}
          <hr className="-mx-headerMenu text-grey-1" />
          {links.map((link, index) => {
            return <div key={`navigationLink-${index}`}>{link}</div>
          })}
          <hr className="-mx-headerMenu text-grey-1" />
          {profile.renderContent()}
          <hr className="-mx-headerMenu text-grey-1" />
          {languageNavigation}
        </div>
      </div>
    )
  }

  const { openModal, closeModal, renderModal } = useModal(
    renderMobileNavigation,
    {
      size: "fullscreen",
      style: "white",
    }
  )

  const renderLogo = () => (
    <div className="min-w-100 w-logoSmall lg:w-logoDefault mr-20 xl:mr-40">
      <a href="https://www.carforyou.ch/">{themeLog[theme]}</a>
    </div>
  )

  const renderLinksDesktop = () => (
    <div className="flex flex-grow">
      <div className="hidden lg:flex items-center text-center">
        {links.map((link, index) => {
          return (
            <div className="mr-headerMenu" key={`navigationLink-${index}`}>
              {link}
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderCtaButton = () => (
    <div className="mr-headerMenu ">{ctaButton}</div>
  )

  const renderProfileNavigationDesktop = () => (
    <div
      className={classNames("hidden lg:block", {
        "mr-headerMenu": languageNavigation,
      })}
    >
      <HeaderDropdown
        renderParent={() => (
          <div
            className={classNames("text-white", {
              "text-grey-3 text-black": isLight,
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
  )

  const renderMobileNavigationLink = () => (
    <div className="block lg:hidden">
      <a
        onClick={openModal}
        className={classNames("cursor-pointer text-white", {
          "text-grey-3 text-black": isLight,
        })}
      >
        {mobileMenuText}
      </a>
      {renderModal()}
    </div>
  )

  const renderIconButtons = () => (
    <div>
      {iconButtons.map((iconButton, index) => {
        return (
          <div
            className="mr-headerMenu hover:opacity-60"
            key={`navigationLink-${index}`}
          >
            {iconButton}
          </div>
        )
      })}
    </div>
  )

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
              "bg-white border-b border-grey-2": isLight,
              "bg-grey-dark text-white": isDark,
              "text-white": isTransparent,
            }
          )}
        >
          <nav className="w-12/12 flex items-center">
            {renderLogo()}
            {renderLinksDesktop()}
            <div
              className={classNames("flex items-center cursor-pointer", {
                "text-grey-3": isLight,
              })}
            >
              {renderCtaButton()}
              {renderIconButtons()}
              {renderProfileNavigationDesktop()}
              <div className="hidden lg:block">{languageNavigation}</div>
              {renderMobileNavigationLink()}
            </div>
          </nav>
        </header>
      </div>
    </HeaderThemeProvider>
  )
}

export default Header
