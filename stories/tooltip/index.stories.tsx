import { storiesOf } from "@storybook/react"
import { TooltipPosition } from "../../src/components/tooltip"

import generateStory from "./generator"

Object.entries(TooltipPosition).reduce(
  (acc, [name, position]) =>
    acc.add(`On the ${name}`, generateStory({ position })),
  storiesOf("Tooltip", module)
)
