import { storiesOf } from "@storybook/react"

import generateStory from "./generator"

storiesOf("Modal", module)
  .add("Small", generateStory({ size: "small" }))
  .add("Medium", generateStory({ size: "medium" }))
  .add("Large", generateStory({ size: "large" }))
  .add("Fulscreen", generateStory({ size: "fullscreen" }))
  .add("Dark Fulscreen", generateStory({ style: "dark", size: "fullscreen" }))
