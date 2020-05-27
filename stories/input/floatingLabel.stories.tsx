import React from "react"

import { storiesOf } from "@storybook/react"

import { ControlledInputDecorator } from "../utils"
import generateStory from "./generator"

const initialValue = ""

storiesOf("Input / Floating Label", module)
  .addDecorator(ControlledInputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      value: initialValue,
      labelText: "Label",
      floatingLabel: true
    })
  )
  .add(
    "With error",
    generateStory({
      value: initialValue,
      labelText: "Label",
      floatingLabel: true,
      error: "Error message"
    })
  )
  .add(
    "With clear button",
    generateStory({
      value: initialValue,
      hasClearButton: true,
      labelText: "Label",
      floatingLabel: true
    })
  )
  .add(
    "With hint",
    generateStory({
      value: initialValue,
      hint: "Hint text",
      labelText: "Label",
      floatingLabel: true
    })
  )
