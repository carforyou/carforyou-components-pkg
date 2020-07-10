import { storiesOf } from "@storybook/react"

import generateStory from "./generator"

storiesOf("Tooltip", module)
  .add("On the top", generateStory({ position: "top" }))
  .add("On the bottom", generateStory({ position: "bottom" }))
  .add("On the left", generateStory({ position: "left" }))
  .add("On the right", generateStory({ position: "right" }))
