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
      label: { text: "Label" }
    })
  )
  .add(
    "With clear button",
    generateStory({
      value: initialValue,
      hasClearButton: true,
      placeholder: "Type something",
      label: { text: "Label" }
    })
  )
  .add(
    "With placeholder",
    generateStory({
      value: initialValue,
      placeholder: "Placeholder",
      label: { text: "Label" }
    })
  )
  .add(
    "With hint",
    generateStory({
      value: initialValue,
      hint: "Hint text",
      label: { text: "Label" }
    })
  )
  .add(
    "Required indicator",
    generateStory({
      value: initialValue,
      label: { text: "Label" },
      required: true
    })
  )
  .add(
    "Popup",
    generateStory({
      value: initialValue,
      label: { text: "Label", popup: () => <div>Popup Content</div> }
    })
  )
  .add(
    "Required with Popup",
    generateStory({
      value: initialValue,
      required: true,
      label: { text: "Label", popup: () => <div>Popup Content</div> }
    })
  )
