import { storiesOf } from "@storybook/react"

import InputDecorator from "./decorator"
import generateStory from "./generator"

const initialValue = ""

storiesOf("Input / Appearance", module)
  .addDecorator(InputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      value: initialValue
    })
  )
  .add(
    "Disabled",
    generateStory({
      value: initialValue,
      disabled: true
    })
  )
  .add(
    "With error message",
    generateStory({
      value: initialValue,
      error: "Error message"
    })
  )
