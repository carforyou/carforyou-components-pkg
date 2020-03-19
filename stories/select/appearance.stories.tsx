import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = ""

storiesOf("Select / Appearance", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      selected: initialValue
    })
  )
  .add(
    "With search icon",
    generateStory({
      selected: initialValue,
      showSearchIcon: true
    })
  )
  .add(
    "Disabled",
    generateStory({
      selected: initialValue,
      disabled: true
    })
  )
  .add(
    "With error message",
    generateStory({
      selected: initialValue,
      error: "Error message"
    })
  )
  .add(
    "With placeholder",
    generateStory({
      selected: initialValue,
      placeholder: "Placeholder"
    })
  )
  .add(
    "With hint",
    generateStory({
      selected: initialValue,
      hint: "Hint text"
    })
  )
