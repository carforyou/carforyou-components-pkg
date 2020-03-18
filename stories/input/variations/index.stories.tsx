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
    "With placeholder",
    generateStory({
      value: initialValue,
      placeholder: "Placeholder"
    })
  )
