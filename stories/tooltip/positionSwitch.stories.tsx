import { storiesOf } from "@storybook/react"

import generateStory from "./generator"

storiesOf("Tooltip / Position switch", module)
  .add(
    "With too little space on the top",
    generateStory({ position: "top", positionSwitchThreshold: 100000 })
  )
  .add(
    "With too little space on the bottom",
    generateStory({ position: "bottom", positionSwitchThreshold: 100000 })
  )
  .add(
    "With too little space on the right",
    generateStory({ position: "right", positionSwitchThreshold: 100000 })
  )
  .add(
    "With too little space on the left",
    generateStory({ position: "left", positionSwitchThreshold: 100000 })
  )
