import React from "react"

import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../../utils"
import generateStory from "../generator"

const initialValue = null

storiesOf("Select with autosuggest / Label", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      labelText: "Label",
    })
  )
  .add(
    "With placeholder",
    generateStory({
      placeholder: "Placeholder",
      labelText: "Label",
    })
  )
  .add(
    "With hint",
    generateStory({
      hint: "Hint text",
      labelText: "Label",
    })
  )
  .add(
    "Required indicator",
    generateStory({
      labelText: "Label",
      required: true,
    })
  )
  .add(
    "Popup",
    generateStory({
      labelText: "Label",
      renderLabelPopup: () => <div>Popup Content</div>,
    })
  )
  .add(
    "Required with Popup",
    generateStory({
      required: true,
      labelText: "Label",
      renderLabelPopup: () => <div>Popup Content</div>,
    })
  )
