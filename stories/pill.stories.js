import React from "react"
import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import { wInfo } from "./utils"
import Pill from "../src/components/pill"

storiesOf("Pill", module)
  .add(
    "Primary",
    wInfo(`
    Description
    ~~~
    <Pill>NEW</Pill>
    ~~~
    `)(() => <Pill secondary={boolean(false)}>{text("Label", "NEW")}</Pill>)
  )
  .add(
    "Secondary",
    wInfo(`
    Description
    ~~~
    <Pill secondary>NEW</Pill>
    ~~~
    `)(() => <Pill secondary={boolean(true)}>{text("Label", "NEW")}</Pill>)
  )
