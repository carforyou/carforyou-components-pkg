import React from "react"

import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../../utils"
import generateStory from "../generator"

const initialValue = null

storiesOf("Select / Label", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      withAutosuggest: false,
      labelText: "Label"
    })
  )
  .add(
    "With placeholder",
    generateStory({
      withAutosuggest: false,
      placeholder: "Placeholder",
      labelText: "Label"
    })
  )
  .add(
    "With hint",
    generateStory({
      withAutosuggest: false,
      hint: "Hint text",
      labelText: "Label"
    })
  )
  .add(
    "Required indicator",
    generateStory({
      withAutosuggest: false,
      labelText: "Label",
      required: true
    })
  )
  .add(
    "Popup",
    generateStory({
      withAutosuggest: false,
      labelText: "Label",
      renderLabelPopup: () => <div>Popup Content</div>
    })
  )
  .add(
    "Required with Popup",
    generateStory({
      withAutosuggest: false,
      required: true,
      labelText: "Label",
      renderLabelPopup: () => <div>Popup Content</div>
    })
  )
