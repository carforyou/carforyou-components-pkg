import { storiesOf } from "@storybook/react"

import InputDecorator from "../decorator"
import generateStory from "../generator"

const initialValue = ""

storiesOf("Input / Variations", module)
  .addDecorator(InputDecorator(initialValue))
  .add(
    "Standard",
    generateStory({
      value: initialValue
    })
  )
  .add(
    "Clearable",
    generateStory({
      value: initialValue,
      clearable: true,
      placeholder: "Type something"
    })
  )
  .add(
    "With placeholder",
    generateStory({
      value: initialValue,
      placeholder: "Placeholder"
    })
  )
  .add(
    "With hint",
    generateStory({
      value: initialValue,
      hint: "Hint text"
    })
  )
