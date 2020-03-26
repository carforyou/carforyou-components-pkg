import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../../utils"
import generateStory from "../generator"

const initialValue = ""

storiesOf("Select with autosuggest / Appearance", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add("Simple", generateStory({}))
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
  .add(
    "With custom wrapper",
    generateStory({
      selected: initialValue,
      skipContainer: true,
      extraDescription:
        "`skipContainer` is useful if you want to have more control over how much the menu spans. You need to put the `<Select>` in a relative position container yourself then."
    })
  )
