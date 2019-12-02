import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean, select } from "@storybook/addon-knobs"

import { wInfo } from "./utils"

import Button from "../src/components/button"
import IconButton from "../src/components/iconButton"

const option = {
  call: "CtaCall",
  write: "CtaWrite",
  filter: "Filter",
  alert: "Alert"
}

const defaultValue = "CtaCall"

storiesOf("Icon Button", module)
  .add(
    "Default",
    wInfo(`
    Description
    ~~~
    <Button>
      <IconButton icon="CtaCall" />
    </Button>
    `)(() => (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Button
          largeIconButton={boolean("Large", true)}
          smallIconButton={boolean("Small", false)}
          teal={boolean("Teal", false)}
          disabled={boolean("Disabled", false)}
          onClick={action("on Click")}
        >
          <IconButton
            icon={select("Icon", option, defaultValue)}
            label={text("Label", "Storybook")}
          />
        </Button>
      </div>
    </div>
    ))
  )
  .add(
    "Call Icon",
    wInfo(`
    Description
    ~~~
    <Button>
      <IconButton icon="CtaCall" label="Anrufen" />
    </Button>
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Call Icon</div>
        <div className="w-12/12 md:w-3/12">
        <Button
          largeIconButton
          onClick={action("on Click")}
        >
          <IconButton
            icon="CtaCall" 
            label="Anrufen"
          />
        </Button>
      </div>
    </div>
    ))
  )
  .add(
    "Write Icon",
    wInfo(`
    Description
    ~~~
    <Button>
      <IconButton icon="CtaWrite" label="Schreiben" />
    </Button>
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Write Icon</div>
        <div className="w-12/12 md:w-3/12">
        <Button
          largeIconButton
          onClick={action("on Click")}
        >
          <IconButton
            icon="CtaWrite"
            label="Schreiben"
          />
        </Button>
      </div>
    </div>
    ))
  )
  .add(
    "Filter Icon",
    wInfo(`
    Description
    ~~~
    <Button>
      <IconButton icon="Filter" label="Filter" />
    </Button>
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Filter Icon</div>
        <div className="w-12/12 md:w-3/12">
        <Button
          largeIconButton
          onClick={action("on Click")}
        >
          <IconButton
            icon="Filter"
            label="Filter"
          />
        </Button>
      </div>
    </div>
    ))
  )
  .add(
    "Alert Icon",
    wInfo(`
    Description
    ~~~
    <Button>
      <IconButton icon="Alert" label="Suchauftrag per Email" />
    </Button>
    `)(() => (
      <div className="mx-30 mb-40">
        <div className="text-2xl mb-20">Alert Icon</div>
        <div className="w-12/12 md:w-3/12">
        <Button
          largeIconButton
          onClick={action("on Click")}
        >
          <IconButton
            icon="Alert"
            label="Suchauftrag per Email"
          />
        </Button>
      </div>
    </div>
    ))
  )
