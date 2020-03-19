import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = ""

storiesOf("Input / Appearance", module)
  .addDecorator(ControlledInputDecorator(initialValue))
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
  .add(
    "With clear button",
    generateStory({
      value: initialValue,
      hasClearButton: true,
      placeholder: "Type something"
    })
  )
  .add(
    "With placeholder",
    generateStory({
      value: initialValue,
      placeholder: "Placeholder"
    })
  )
  .add(
    "With hint",
    generateStory({
      value: initialValue,
      hint: "Hint text"
    })
  )
