import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = ""

storiesOf("Input / Modes", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Text",
    generateStory({
      value: initialValue,
      mode: "text"
    })
  )
  .add(
    "Numeric",
    generateStory({
      value: initialValue,
      mode: "numeric"
    })
  )
  .add(
    "Decimal",
    generateStory({
      value: initialValue,
      mode: "decimal"
    })
  )
