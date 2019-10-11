import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"

import { wInfo } from "./utils"
import Button from "../src/components/button"

storiesOf("Button", module)
  .add(
    "Default",
    wInfo(`
    Description
    ~~~
    <Button>CarForYou</Button>
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <Button
            teal={boolean("Teal", false)}
            small={boolean("Small", false)}
            disabled={boolean("Disabled", false)}
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
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Small button</div>
        <div className="w-12/12 md:w-3/12">
          <Button small={true}>Small button</Button>
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
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Teal button</div>
        <div className="w-12/12 md:w-3/12">
          <Button teal={true}>Teal button</Button>
        </div>
      </div>
    ))
  )
  .add(
    "White Teal",
    wInfo(`
    Description
    ~~~~
    <Button whiteTeal>CarForYou</Button>
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">White Teal button</div>
        <div className="w-12/12 md:w-3/12">
          <Button whiteTeal>White Teal button</Button>
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
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Disabled button</div>
        <div className="w-12/12 md:w-3/12">
          <Button disabled={true}>Disabled button</Button>
        </div>
      </div>
    ))
  )
