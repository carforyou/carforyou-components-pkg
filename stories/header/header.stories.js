import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { wInfo } from "../utils"

import Header, { HeaderTheme } from "../../src/components/header/index"
import HeaderDropdown from "../../src/components/header/dropdown"
import Button from "../../src/components/button"
import Plus from "../../src/components/icons/plus"
import Heart from "../../src/components/icons/heart"

storiesOf("Header", module)
  .add(
    "empty",
    wInfo(`
    Empty
    ~~~~
    <Header />
    ~~~~
    `)(() => {
      return (
        <div className="m-40 p-20" style={{ "background-color": "deeppink" }}>
          <Header />
        </div>
      )
    })
  )
  .add(
    "Car For You",
    wInfo(`
    Empty
    ~~~~
    <Header />
    ~~~~
    `)(() => {
      const links = [
        () => <a href="carforyou.ch">Auto Kaufen</a>,
        () => <a href="carforyou.ch">Auto Verkaufen</a>,
        () => <a href="carforyou.ch">Für Garagisten</a>,
        () => (
          <HeaderDropdown
            renderParent={() => <span>Sich Informieren</span>}
            theme={HeaderTheme.WHITE} // TODO reafactor the theme to a context
          >
            <ul>
              <li className="py-10 px-20">
                <a>Additional info one</a>
              </li>
              <li className="py-10 px-20">
                <a>Additional info two</a>
              </li>
              <li className="py-10 px-20">
                <a>Additional info three</a>
              </li>
            </ul>
          </HeaderDropdown>
        )
      ]
      const renderCTAButton = () => (
        <Button icon={() => <Plus color="#FFF" />}>Kostenlos inserieren</Button>
      )
      const iconButtons = [() => <Heart color="#000" />]
      const renderProfileContent = () => (
        <div className="m-20 w-modalSmall">
          <p>Some dummy profile tooltip content.</p>
        </div>
      )
      const renderLanguageNavigation = () => (
        <HeaderDropdown
          renderParent={() => <span>DE</span>}
          theme={HeaderTheme.WHITE}
        >
          <ul>
            <li className="py-10 px-20">
              <a>DE</a>
            </li>
            <li className="py-10 px-20">
              <a>FR</a>
            </li>
            <li className="py-10 px-20">
              <a>IT</a>
            </li>
            <li className="py-10 px-20">
              <a href="https://www.carforyou.ch/en" target="_blank">
                EN
              </a>
            </li>
          </ul>
        </HeaderDropdown>
      )

      return (
        <div className="m-40 p-20" style={{ "background-color": "deeppink" }}>
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
