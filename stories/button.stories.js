import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"

import { wInfo } from "./utils"
import Button from "../src/components/button"

storiesOf("Button", module)
  .addParameters({
    abstract: {
      // Copy a collection or layer share url from Abstract
      url: "https://share.goabstract.com/9f6fe2c5-8f0a-4684-89be-2ea2dbbf885d"
    }
  })
  .add(
    "Button / PrimaryCTA",
    wInfo(`
    Description
    ~~~
    <Button>CarForYou</Button>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <Button
            teal={boolean("Teal", false)}
            small={boolean("Small", false)}
            disabled={boolean("Disabled", false)}
            tealBorder={boolean("Teal Border", false)}
            onClick={action("on Click")}
          >
            {text("Label", "Storybook")}
          </Button>
        </div>
      </div>
    ))
  )
  .add(
    "Small",
    wInfo(`
    Description
    ~~~
    <Button small>CarForYou</Button>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Small button</div>
        <div className="w-12/12 md:w-3/12">
          <Button small>Small button</Button>
        </div>
      </div>
    ))
  )
  .add(
    "Teal",
    wInfo(`
    Description
    ~~~
    <Button teal>CarForYou</Button>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Teal button</div>
        <div className="w-12/12 md:w-3/12">
          <Button teal>Teal button</Button>
        </div>
      </div>
    ))
  )
  .add(
    "Teal Border",
    wInfo(`
    Description
    ~~~~
    <Button tealBorder>CarForYou</Button>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Teal Border button</div>
        <div className="w-12/12 md:w-3/12">
          <Button tealBorder>Teal Border button</Button>
        </div>
      </div>
    ))
  )
  .add(
    "Disabled",
    wInfo(`
    Description
    ~~~
    <Button disabled>CarForYou</Button>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Disabled button</div>
        <div className="w-12/12 md:w-3/12">
          <Button disabled>Disabled button</Button>
        </div>
      </div>
    ))
  )
