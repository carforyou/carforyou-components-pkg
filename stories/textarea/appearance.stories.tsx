import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = ""

storiesOf("Textarea / Appearance", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      value: initialValue,
    })
  )
  .add(
    "Disabled",
    generateStory({
      value: initialValue,
      disabled: true,
    })
  )
  .add(
    "With error message",
    generateStory({
      value: initialValue,
      error: "Error message",
    })
  )
  .add(
    "With placeholder",
    generateStory({
      value: initialValue,
      placeholder: "Placeholder",
    })
  )
  .add(
    "With hint",
    generateStory({
      value: initialValue,
      hint: "Hint text",
    })
  )
