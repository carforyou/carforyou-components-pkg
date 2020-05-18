import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { wInfo } from "../utils"

import Header from "../../src/components/header/index"
import { HeaderTheme } from "../../src/components/header/themeContext"
import HeaderDropdown from "../../src/components/header/dropdown"
import Button from "../../src/components/button"
import Plus from "../../src/components/icons/plus"
import Heart from "../../src/components/icons/heart"
import Logo from "../../src/components/icons/logo"

storiesOf("Header", module)
  .add(
    "Theme LIGHT",
    wInfo(`
    Empty
    ~~~~
    <Header />
    ~~~~
    `)(() => {
      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header />
        </div>
      )
    })
  )
  .add(
    "Theme DARK",
    wInfo(`
    Empty
    ~~~~
    const renderLogo = () => (
        <Logo
            colors={{
                icon: "#f73b47",
                carFor: "#FFF",
                you: "#f73b47"
            }}
        />
    )
    <Header theme={HeaderTheme.DARK} renderLogo={renderLogo} />
    ~~~~
    `)(() => {
      const renderLogo = () => (
        <Logo
          colors={{
            icon: "#f73b47",
            carFor: "#FFF",
            you: "#f73b47"
          }}
        />
      )
      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header theme={HeaderTheme.DARK} renderLogo={renderLogo} />
        </div>
      )
    })
  )
  .add(
    "Theme TRANSPARENT",
    wInfo(`
    Empty
    ~~~~
    const renderLogo = () => (
        <Logo
            colors={{
                icon: "#FFF",
                carFor: "#FFF",
                you: "#FFF"
            }}
        />
    )
    <Header />
    <Header theme={HeaderTheme.TRANSPARENT} renderLogo={renderLogo} />
    ~~~~
    `)(() => {
      const renderLogo = () => (
        <Logo
          colors={{
            icon: "#FFF",
            carFor: "#FFF",
            you: "#FFF"
          }}
        />
      )
      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <div className="bg-white">
            <Header theme={HeaderTheme.TRANSPARENT} renderLogo={renderLogo} />
          </div>
        </div>
      )
    })
  )
  .add(
    "Content Example - Car For You",
    wInfo(`
    Content Example - Car For You
    ~~~~
    const links = [
        () => <a href="#">Auto Kaufen</a>,
        () => <a href="#">Auto Verkaufen</a>,
        () => <a href="#">Für Garagisten</a>,
        () => (
          <HeaderDropdown renderParent={() => <span>Sich Informieren</span>}>
            <ul>
              <li className="py-10 px-20">
                <a href="#">Additional info one</a>
              </li>
              <li className="py-10 px-20">
                <a href="#">Additional info two</a>
              </li>
              <li className="py-10 px-20">
                <a href="#">Additional info three</a>
              </li>
            </ul>
          </HeaderDropdown>
        )
    ]
    const renderCTAButton = () => (
        <Button icon={() => <Plus color="#FFF" />}>Kostenlos inserieren</Button>
    )
    const iconButtons = [() => <Heart />]
    const renderProfileContent = () => (
        <div className="m-20 w-modalSmall">
            <p>Some dummy profile tooltip content.</p>
        </div>
    )
    const renderLanguageNavigation = () => (
        <HeaderDropdown
            renderParent={() => <span className="text-grey-3">DE</span>}
        >
            <ul>
                <li className="py-10 px-20">
                    <a href="#">DE</a>
                </li>
                <li className="py-10 px-20">
                    <a href="#">FR</a>
                </li>
                <li className="py-10 px-20">
                    <a href="#">IT</a>
                </li>
                <li className="py-10 px-20">
                    <a href="#">EN</a>
                </li>
            </ul>
        </HeaderDropdown>
    )
    <Header
        links={links}
        renderCTAButton={renderCTAButton}
        iconButtons={iconButtons}
        renderProfileContent={renderProfileContent}
        renderLanguageNavigation={renderLanguageNavigation}
    />
    ~~~~
    `)(() => {
      const links = [
        () => <a href="#">Auto Kaufen</a>,
        () => <a href="#">Auto Verkaufen</a>,
        () => <a href="#">Für Garagisten</a>,
        () => (
          <HeaderDropdown renderParent={() => <span>Sich Informieren</span>}>
            <ul>
              <li className="py-10 px-20">
                <a href="#">Additional info one</a>
              </li>
              <li className="py-10 px-20">
                <a href="#">Additional info two</a>
              </li>
              <li className="py-10 px-20">
                <a href="#">Additional info three</a>
              </li>
            </ul>
          </HeaderDropdown>
        )
      ]
      const renderCTAButton = () => (
        <Button icon={() => <Plus color="#FFF" />}>Kostenlos inserieren</Button>
      )
      const iconButtons = [() => <Heart />]
      const renderProfileContent = () => (
        <div className="m-20 w-modalSmall">
          <p>Some dummy profile tooltip content.</p>
        </div>
      )
      const renderLanguageNavigation = () => (
        <HeaderDropdown
          renderParent={() => <span className="text-grey-3">DE</span>}
        >
          <ul>
            <li className="py-10 px-20">
              <a href="#">DE</a>
            </li>
            <li className="py-10 px-20">
              <a href="#">FR</a>
            </li>
            <li className="py-10 px-20">
              <a href="#">IT</a>
            </li>
            <li className="py-10 px-20">
              <a href="#">EN</a>
            </li>
          </ul>
        </HeaderDropdown>
      )

      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            links={links}
            renderCTAButton={renderCTAButton}
            iconButtons={iconButtons}
            renderProfileContent={renderProfileContent}
            renderLanguageNavigation={renderLanguageNavigation}
          />
        </div>
      )
    })
  )
  .add(
    "Content Example - Dealerhub",
    wInfo(`
    Content Example - Dealerhub"
    ~~~~
    const renderLogo = () => (
        <Logo
            colors={{
                icon: "#f73b47",
                carFor: "#FFF",
                you: "#f73b47"
            }}
        />
    )
    const links = [
        () => <a href="#">Meine Inserate</a>,
        () => <a href="#">Automarkt</a>,
        () => <a href="#">News</a>
    ]
    const renderCTAButton = () => (
        <Button icon={() => <Plus color="#FFF" />}>Inserat erstellen</Button>
    )
    const renderProfileContent = () => (
        <div className="m-20 w-modalSmall">
            <p>Some dummy profile tooltip content.</p>
        </div>
    )
    const renderLanguageNavigation = () => (
        <HeaderDropdown renderParent={() => <span>DE</span>}>
            <ul>
                <li className="py-10 px-20">
                    <a href="#">DE</a>
                </li>
                <li className="py-10 px-20">
                    <a href="#">FR</a>
                </li>
                <li className="py-10 px-20">
                    <a href="#">IT</a>
                </li>
                <li className="py-10 px-20">
                    <a href="#">EN</a>
                </li>
            </ul>
        </HeaderDropdown>
    )
    <Header
        theme={HeaderTheme.DARK}
        renderLogo={renderLogo}
        links={links}
        renderCTAButton={renderCTAButton}
        renderProfileContent={renderProfileContent}
        renderLanguageNavigation={renderLanguageNavigation}
    />
    ~~~~
    `)(() => {
      const renderLogo = () => (
        <Logo
          colors={{
            icon: "#f73b47",
            carFor: "#FFF",
            you: "#f73b47"
          }}
        />
      )
      const links = [
        () => <a href="#">Meine Inserate</a>,
        () => <a href="#">Automarkt</a>,
        () => <a href="#">News</a>
      ]
      const renderCTAButton = () => (
        <Button icon={() => <Plus color="#FFF" />}>Inserat erstellen</Button>
      )
      const renderProfileContent = () => (
        <div className="m-20 w-modalSmall">
          <p>Some dummy profile tooltip content.</p>
        </div>
      )
      const renderLanguageNavigation = () => (
        <HeaderDropdown renderParent={() => <span>DE</span>}>
          <ul>
            <li className="py-10 px-20">
              <a href="#">DE</a>
            </li>
            <li className="py-10 px-20">
              <a href="#">FR</a>
            </li>
            <li className="py-10 px-20">
              <a href="#">IT</a>
            </li>
            <li className="py-10 px-20">
              <a href="#">EN</a>
            </li>
          </ul>
        </HeaderDropdown>
      )

      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            theme={HeaderTheme.DARK}
            renderLogo={renderLogo}
            links={links}
            renderCTAButton={renderCTAButton}
            renderProfileContent={renderProfileContent}
            renderLanguageNavigation={renderLanguageNavigation}
          />
        </div>
      )
    })
  )
