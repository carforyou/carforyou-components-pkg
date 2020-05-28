import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = "A"

storiesOf("Radio button / Not selected", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      value: "B",
    })
  )
  .add(
    "Disabled",
    generateStory({
      value: "B",
      disabled: true,
    })
  )
  .add(
    "With error message",
    generateStory({
      value: "B",
      error: "Error message",
    })
  )
  .add(
    "With label on the left",
    generateStory({
      value: "B",
      labelPosition: "left",
      label: "Label",
    })
  )
  .add(
    "With label on the right",
    generateStory({
      value: "B",
      labelPosition: "right",
      label: "Label",
    })
  )
