import { storiesOf } from "@storybook/react"
import { TooltipPosition, TooltipAlignment } from "../../src/components/tooltip"

import generateStory from "./generator"

Object.values(TooltipPosition).reduce(
  (accPosition, position) =>
    Object.values(TooltipAlignment).reduce(
      (accAlignment, alignment) =>
        accAlignment.add(
          `On the ${position} aligned to ${alignment}`,
          generateStory({ position, alignment })
        ),
      accPosition
    ),
  storiesOf("Tooltip", module)
)
