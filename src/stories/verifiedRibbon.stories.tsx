import React, { FC } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import VerifiedRibbon, {
  VerifiedRibbonProps,
} from "../components/verifiedRibbon"

export default {
  title: "Verified Ribbon",
  component: VerifiedRibbon,
  args: {
    storyName: "Default",
  },
}

interface Props extends StoryProps<string>, VerifiedRibbonProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12 md:w-6/12"}
      component={<VerifiedRibbon {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Verified ribbon",
  label: "Verified",
  ribbonWidth: "152",
  iconWidth: "28",
  fontSize: "text-base",
}
