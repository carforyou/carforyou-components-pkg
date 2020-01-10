import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"

import { wInfo } from "./utils"

import Button from "../src/components/button"
import CtaCall from "../.storybook/icons/ctaCall"

storiesOf("Icon Button", module)
  .add(
    "Default",
    wInfo(`
    Description
    ~~~
    <Button icon={<CtaCall />} large paddingTextIcon>
      Anrufen
    </Button>
    `)(() => (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Button
          icon={<CtaCall />}
          large
          paddingTextIcon
          teal={boolean("Teal", false)}
          onClick={action("on Click")}
        >
          {text("Label", "Anrufen")}
        </Button>
      </div>
    </div>
    ))
  )
