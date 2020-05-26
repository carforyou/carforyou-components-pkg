import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = "A"

storiesOf("Radio button / Selected", module)
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
    "With label on the left",
    generateStory({
      value: initialValue,
      labelPosition: "left",
      label: "Label",
    })
  )
  .add(
    "With label on the right",
    generateStory({
      value: initialValue,
      labelPosition: "right",
      label: "Label",
    })
  )
