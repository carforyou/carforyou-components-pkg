import React from "react"

import { storiesOf } from "@storybook/react"

import InputDecorator from "../decorator"
import generateStory from "../generator"

const initialValue = ""

storiesOf("Input / Variations / Label", module)
  .addDecorator(InputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      value: initialValue,
      labelText: "Label"
    })
  )
  .add(
    "With clear button",
    generateStory({
      value: initialValue,
      hasClearButton: true,
      placeholder: "Type something",
      labelText: "Label"
    })
  )
  .add(
    "With placeholder",
    generateStory({
      value: initialValue,
      placeholder: "Placeholder",
      labelText: "Label"
    })
  )
  .add(
    "With hint",
    generateStory({
      value: initialValue,
      hint: "Hint text",
      labelText: "Label"
    })
  )
  .add(
    "Required indicator",
    generateStory({
      value: initialValue,
      labelText: "Label",
      required: true
    })
  )
  .add(
    "Popup",
    generateStory({
      value: initialValue,
      labelText: "Label",
      renderLabelPopup: () => <div>Popup Content</div>
    })
  )
  .add(
    "Required with Popup",
    generateStory({
      value: initialValue,
      required: true,
      labelText: "Label",
      renderLabelPopup: () => <div>Popup Content</div>
    })
  )
