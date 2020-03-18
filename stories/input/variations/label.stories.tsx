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
      label: "Label"
    })
  )
  .add(
    "Clearable",
    generateStory({
      value: initialValue,
      clearable: true,
      placeholder: "Type something",
      label: "Label"
    })
  )
  .add(
    "With placeholder",
    generateStory({
      value: initialValue,
      placeholder: "Placeholder",
      label: "Label"
    })
  )
  .add(
    "With hint",
    generateStory({
      value: initialValue,
      hint: "Hint text",
      label: "Label"
    })
  )
  .add(
    "Required indicator",
    generateStory({
      value: initialValue,
      label: "Label",
      required: true
    })
  )
