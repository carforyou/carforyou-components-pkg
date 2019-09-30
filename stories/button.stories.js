import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean } from '@storybook/addon-knobs'

import { wInfo } from "./utils"
import Button from "../src/components/button"

storiesOf("Buttons", module)
  .add("Button Variations",
  wInfo(`
    Description
    ~~~
    <Button>CarForYou</Button>
    `,
    )(() => (
    <div className="ml-40 mb-40">
      <div className="text-2xl mb-20">Examples</div>
      <div className="w-3/12">
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
  )))
