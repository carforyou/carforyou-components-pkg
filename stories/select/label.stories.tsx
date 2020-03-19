import React from "react"

import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = null

storiesOf("Select / Label", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      selected: initialValue,
      labelText: "Label"
    })
  )
  .add(
    "With placeholder",
    generateStory({
      selected: initialValue,
      placeholder: "Placeholder",
      labelText: "Label"
    })
  )
  .add(
    "With hint",
    generateStory({
      selected: initialValue,
      hint: "Hint text",
      labelText: "Label"
    })
  )
  .add(
    "Required indicator",
    generateStory({
      selected: initialValue,
      labelText: "Label",
      required: true
    })
  )
  .add(
    "Popup",
    generateStory({
      selected: initialValue,
      labelText: "Label",
      renderLabelPopup: () => <div>Popup Content</div>
    })
  )
  .add(
    "Required with Popup",
    generateStory({
      selected: initialValue,
      required: true,
      labelText: "Label",
      renderLabelPopup: () => <div>Popup Content</div>
    })
  )
