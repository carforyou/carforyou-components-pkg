import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = false

storiesOf("Checkbox / Unchecked", module)
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
    "With label on the left",
    generateStory({
      value: initialValue,
      labelPosition: "left",
      label: "Label"
    })
  )
  .add(
    "With label on the right",
    generateStory({
      value: initialValue,
      labelPosition: "right",
      label: "Label"
    })
  )
  .add(
    "Button style",
    generateStory({
      value: initialValue,
      buttonStyle: true,
      label: "Label"
    })
  )
  .add(
    "Button style disabled",
    generateStory({
      value: initialValue,
      buttonStyle: true,
      disabled: true,
      label: "Label"
    })
  )
  .add(
    "Button style with error message",
    generateStory({
      value: initialValue,
      buttonStyle: true,
      label: "Label",
      error: "Error message"
    })
  )
