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
import MyCars from "../../src/components/icons/myCars"
import Profile from "../../src/components/icons/profile"
import Logout from "../../src/components/icons/logout"

const renderLanguageNavigation = () => (
  <HeaderDropdown
    stickOut="left"
    renderParent={() => <span className="text-grey-3">DE</span>}
  >
    <ul>
      <li className="pt-20 pb-10 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
        <a href="#">DE</a>
      </li>
      <li className="pt-20 pb-10 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
        <a href="#">FR</a>
      </li>
      <li className="pt-20 pb-10 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
        <a href="#">IT</a>
      </li>
      <li className="pt-20 pb-10 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
        <a href="#">EN</a>
      </li>
    </ul>
  </HeaderDropdown>
)

const profile = {
  renderWelcomeMessage: () => (
    <div className="font-bold text-lg mb-10">Herzlich wilkommen!</div>
  ),
  renderContent: () => {
    return (
      <>
        <span className="text-grey-3 text-xs block mt-20">DEIN KAUFEN</span>
        <a href="#" className="block my-10">
          <Heart />
          &nbsp; Deine Favoriten.
        </a>
        <hr className="-mx-headerMenu text-grey-1 mb-20" />
        <span className="text-grey-3 text-xs block">DEIN VERKAUFEN</span>
        <a href="#" className="block my-10">
          <Plus color="#A0A7AB" />
          &nbsp; Kostenlos inserieren
        </a>
        <a href="#" className="block my-10">
          <MyCars />
          &nbsp; Deine Inserate
        </a>
        <a href="#" className="block my-10">
          <Profile />
          &nbsp; Dein Konto
        </a>
        <hr className="-mx-headerMenu text-grey-1 mb-20" />
        <a href="#" className="block my-10">
          <Logout />
          &nbsp; Abmelden
        </a>
      </>
    )
  },
}

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
            you: "#f73b47",
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
            you: "#FFF",
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
            <ul  className="py-10">
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
        () => (
          <a href="#" className="block py-10 lg:py-0">
            Auto Kaufen
          </a>
        ),
        () => (
          <a href="#" className="block py-10 lg:py-0">
            Auto Verkaufen
          </a>
        ),
        () => (
          <a href="#" className="block py-10 lg:py-0">
            Für Garagisten
          </a>
        ),
        () => (
          <HeaderDropdown renderParent={() => <span>Sich Informieren</span>}>
            <ul className="w-menuDropdown">
              <li className="pt-20 pb-10 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
                <a href="#">Additional info one</a>
              </li>
              <li className="py-15 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
                <a href="#">Additional info two</a>
              </li>
              <li className="pt-10 pb-20 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
                <a href="#">Additional info three</a>
              </li>
            </ul>
          </HeaderDropdown>
        ),
      ]
      const renderCTAButton = () => (
        <div className="hidden md:block">
          <Button icon={() => <Plus color="#FFF" />}>
            Kostenlos inserieren
          </Button>
        </div>
      )
      const iconButtons = [() => <Heart />]

      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            links={links}
            renderCTAButton={renderCTAButton}
            iconButtons={iconButtons}
            profile={profile}
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
            you: "#f73b47",
          }}
        />
      )
      const links = [
        () => (
          <a href="#" className="block py-10 lg:py-0">
            Meine Inserate
          </a>
        ),
        () => (
          <a href="#" className="block py-10 lg:py-0">
            Automarkt
          </a>
        ),
        () => (
          <a href="#" className="block py-10 lg:py-0">
            News
          </a>
        ),
      ]
      const renderCTAButton = () => (
        <Button icon={() => <Plus color="#FFF" />}>
          <span className="hidden sm:inline-block">Inserat erstellen</span>
        </Button>
      )

      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            theme={HeaderTheme.DARK}
            renderLogo={renderLogo}
            links={links}
            renderCTAButton={renderCTAButton}
            profile={profile}
            renderLanguageNavigation={renderLanguageNavigation}
          />
        </div>
      )
    })
  )
