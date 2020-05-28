import React from "react"
import { storiesOf } from "@storybook/react"
import { wInfo } from "../utils"

import Header from "../../src/components/header/index"
import { HeaderTheme } from "../../src/components/header/themeContext"
import HeaderDropdown from "../../src/components/header/dropdown"
import Button from "../../src/components/button"
import Profile from "../../src/components/icons/profile"

import Plus from "./icons/plus"
import Heart from "./icons/heart"
import MyCars from "./icons/myCars"
import Logout from "./icons/logout"

const renderLanguageNavigationFactory = (
  renderParent = () => <span>DE</span>
) => {
  return (
    <HeaderDropdown stickOut="left" renderParent={renderParent}>
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
}

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
const links = [
  <a href="#" key="link-1" className="block py-10 lg:py-0">
    Auto Kaufen
  </a>,
  <a href="#" key="link-1" className="block py-10 lg:py-0">
    Auto Verkaufen
  </a>,
  // not lg
  <a href="#" key="link-1" className="block lg:hidden xl:block py-10 lg:py-0">
    Für Garagisten
  </a>,
  // not lg
  <div className="lg:hidden xl:block" key="link-1">
    <HeaderDropdown renderParent={() => <span>Sich Informieren</span>}>
      <ul>
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
  </div>,
  // lg only (more navigation)
  <div className="hidden lg:block xl:hidden -ml-headerMenuMore" key="link-1">
    <HeaderDropdown renderParent={() => <span>Mehr</span>}>
      <ul>
        <li className="pt-20 pb-10 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
          <a href="#">Für Garagisten</a>
        </li>
        <li className="py-15 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
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
  </div>,
]
const ctaButton = (
  <div className="hidden md:block">
    <Button size="responsive" icon={() => <Plus />}>
      Kostenlos inserieren
    </Button>
  </div>
)
const iconButtons = [<Heart key="heart" />]

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
    <Header theme={HeaderTheme.DARK} />
    ~~~~
    `)(() => {
      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header theme={HeaderTheme.DARK} />
        </div>
      )
    })
  )
  .add(
    "Theme TRANSPARENT",
    wInfo(`
    Empty
    ~~~~
    <Header />
    <Header theme={HeaderTheme.TRANSPARENT} />
    ~~~~
    `)(() => {
      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <div className="bg-white">
            <Header theme={HeaderTheme.TRANSPARENT} />
          </div>
        </div>
      )
    })
  )
  .add(
    "Content Example - TRANSPARENT - Car For You",
    wInfo(`
    Content Example - TRANSPARENT - Car For You
    ~~~~
    const renderLanguageNavigationFactory = (
        renderParent = () => <span className="lg:text-grey-3">DE</span>
    ) => {
        return () => {
          return (
            <HeaderDropdown stickOut="left" renderParent={renderParent}>
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
        }
    }
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
        // not lg
        <a href="#" className="block lg:hidden xl:block py-10 lg:py-0">
          Für Garagisten
        </a>
      ),
      () => (
        // not lg
        <div className="lg:hidden xl:block">
          <HeaderDropdown renderParent={() => <span>Sich Informieren</span>}>
            <ul>
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
        </div>
      ),
      () => (
        // lg only (more navigation)
        <div className="hidden lg:block xl:hidden -ml-headerMenuMore">
          <HeaderDropdown renderParent={() => <span>Mehr</span>}>
            <ul>
              <li className="pt-20 pb-10 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
                <a href="#">Für Garagisten</a>
              </li>
              <li className="py-15 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
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
        </div>
      ),
    ]
    const ctaButton = (
        <div className="hidden md:block">
          <Button size="responsive" icon={() => <Plus />}>Kostenlos inserieren</Button>
        </div>
    )
    const iconButtons = [() => <Heart />]

    return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            theme={HeaderTheme.TRANSPARENT}
            links={links}
            ctaButton={ctaButton}
            iconButtons={iconButtons}
            profile={profile}
            languageNavigation={renderLanguageNavigationFactory()}
          />
        </div>
    )
    ~~~~
    `)(() => {
      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <div className="bg-white">
            <Header
              theme={HeaderTheme.TRANSPARENT}
              links={links}
              ctaButton={ctaButton}
              iconButtons={iconButtons}
              profile={profile}
              languageNavigation={renderLanguageNavigationFactory()}
            />
          </div>
        </div>
      )
    })
  )
  .add(
    "Content Example - LIGHT - Car For You",
    wInfo(`
    Content Example - LIGHT - Car For You
    ~~~~
    const renderLanguageNavigationFactory = (
        renderParent = () => <span className="lg:text-grey-3">DE</span>
    ) => {
        return () => {
          return (
            <HeaderDropdown stickOut="left" renderParent={renderParent}>
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
        }
    }
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
        // not lg
        <a href="#" className="block lg:hidden xl:block py-10 lg:py-0">
          Für Garagisten
        </a>
      ),
      () => (
        // not lg
        <div className="lg:hidden xl:block">
          <HeaderDropdown renderParent={() => <span>Sich Informieren</span>}>
            <ul>
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
        </div>
      ),
      () => (
        // lg only (more navigation)
        <div className="hidden lg:block xl:hidden -ml-headerMenuMore">
          <HeaderDropdown renderParent={() => <span>Mehr</span>}>
            <ul>
              <li className="pt-20 pb-10 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
                <a href="#">Für Garagisten</a>
              </li>
              <li className="py-15 lg:py-10 pl-40 lg:px-20 lg:hover:bg-grey-bright">
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
        </div>
      ),
    ]
    const ctaButton = (
        <div className="hidden md:block">
          <Button size="responsive" icon={() => <Plus />}>Kostenlos inserieren</Button>
        </div>
    )
    const iconButtons = [() => <Heart />]

    return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            links={links}
            ctaButton={ctaButton}
            iconButtons={iconButtons}
            profile={profile}
            languageNavigation={renderLanguageNavigationFactory()}
          />
        </div>
    )
    ~~~~
    `)(() => {
      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            links={links}
            ctaButton={ctaButton}
            iconButtons={iconButtons}
            profile={profile}
            languageNavigation={renderLanguageNavigationFactory()}
          />
        </div>
      )
    })
  )
  .add(
    "Content Example - DARK - Dealerhub",
    wInfo(`
    Content Example - DARK - Dealerhub"
    ~~~~
    const renderLanguageNavigationFactory = (
        renderParent = () => <span className="lg:text-grey-3">DE</span>
      ) => {
        return () => {
          return (
            <HeaderDropdown stickOut="left" renderParent={renderParent}>
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
        }
    }

    const links = [
      <a href="#" key="link-1" className="block py-10 lg:py-0">
        Meine Inserate
      </a>,
      <a href="#" key="link-2" className="block py-10 lg:py-0">
        Automarkt
      </a>,
      <a href="#" key="link-3" className="block py-10 lg:py-0">
        News
      </a>,
    ]
    const ctaButton = (
        <Button size="responsive" icon={() => <Plus />}>
          <span className="hidden sm:inline-block">Inserat erstellen</span>
        </Button>
    )

    return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            theme={HeaderTheme.DARK}
            links={links}
            ctaButton={ctaButton}
            profile={profile}
            languageNavigation={renderLanguageNavigationFactory(() => (
              <span>DE</span>
            ))}
          />
        </div>
    )
    ~~~~
    `)(() => {
      const links = [
        <a href="#" key="link-1" className="block py-10 lg:py-0">
          Meine Inserate
        </a>,
        <a href="#" key="link-2" className="block py-10 lg:py-0">
          Automarkt
        </a>,
        <a href="#" key="link-3" className="block py-10 lg:py-0">
          News
        </a>,
      ]
      const ctaButton = (
        <Button size="responsive" icon={() => <Plus />}>
          <span className="hidden sm:inline-block">Inserat erstellen</span>
        </Button>
      )

      return (
        <div className="m-40 p-5" style={{ "background-color": "deeppink" }}>
          <Header
            theme={HeaderTheme.DARK}
            links={links}
            ctaButton={ctaButton}
            profile={profile}
            languageNavigation={renderLanguageNavigationFactory(() => (
              <span>DE</span>
            ))}
          />
        </div>
      )
    })
  )
