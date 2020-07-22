import { storiesOf } from "@storybook/react"

import generateModalStory from "./generator"

storiesOf("Modal", module)
  .add("Small", generateModalStory({ size: "small" }))
  .add(
    "Small with onClose event",
    generateModalStory({
      size: "small",
      onClose: () => {
        alert("onClose callback called")
      },
    })
  )
  .add("Medium", generateModalStory({ size: "medium" }))
  .add("Large", generateModalStory({ size: "large" }))
  .add("Fulscreen", generateModalStory({ size: "fullscreen" }))
  .add(
    "Dark Fulscreen",
    generateModalStory({ style: "dark", size: "fullscreen" })
  )
