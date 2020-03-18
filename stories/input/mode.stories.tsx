import { storiesOf } from "@storybook/react"

import InputDecorator from "./decorator"
import generateStory from "./generator"

const initialValue = ""

storiesOf("Input / Modes", module)
  .addDecorator(InputDecorator(initialValue))
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
