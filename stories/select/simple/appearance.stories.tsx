import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../../utils"
import generateStory from "../generator"

const initialValue = ""

storiesOf("Select / Appearance", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Simple",
    generateStory({
      withAutosuggest: false,
    })
  )
  .add(
    "Disabled",
    generateStory({
      withAutosuggest: false,
      disabled: true,
    })
  )
  .add(
    "With error message",
    generateStory({
      withAutosuggest: false,
      error: "Error message",
    })
  )
  .add(
    "With placeholder",
    generateStory({
      withAutosuggest: false,
      placeholder: "Placeholder",
    })
  )
  .add(
    "With hint",
    generateStory({
      withAutosuggest: false,
      hint: "Hint text",
    })
  )
  .add(
    "With custom wrapper",
    generateStory({
      withAutosuggest: false,
      skipContainer: true,
      extraDescription:
        "`skipContainer` is useful if you want to have more control over how much the menu spans. You need to put the `<Select>` in a relative position container yourself then.",
    })
  )
