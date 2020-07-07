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
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Example</div>
        <div className="w-12/12 md:w-3/12">
          <Button
            teal={boolean("Teal", false)}
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
    <Button size="small">CarForYou</Button>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Small button</div>
        <div className="w-12/12 md:w-3/12">
          <Button size="small">Small button</Button>
        </div>
      </div>
    ))
  )
  .add(
    "Responsive",
    wInfo(`
    Description
    ~~~
    <Button size="responsive">CarForYou</Button>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Responsive size button</div>
        <div className="w-12/12 md:w-3/12">
          <Button size="responsive">Responsive size button</Button>
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
  .add(
    "Wrapping a link",
    wInfo(`
    Description
    ~~~
    <Button><a href="https://carforyou.ch">CarForYou</a></Button>
    ~~~
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Wrapping a link</div>
        <div className="w-12/12 md:w-3/12">
          <Button>
            <a href="https://carforyou.ch">CarForYou</a>
          </Button>
        </div>
      </div>
    ))
  )
