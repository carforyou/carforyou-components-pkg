import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = ""

storiesOf("Select / Appearance", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add("Standard", generateStory({}))
  .add(
    "With search icon",
    generateStory({
      showSearchIcon: true
    })
  )
  .add(
    "Disabled",
    generateStory({
      disabled: true
    })
  )
  .add(
    "With error message",
    generateStory({
      error: "Error message"
    })
  )
  .add(
    "With placeholder",
    generateStory({
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
