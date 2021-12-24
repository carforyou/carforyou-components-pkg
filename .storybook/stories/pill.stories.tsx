import React, { FC } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import Pill, { PillProps } from "../../src/components/pill"

export default {
  title: "Pill",
  component: Pill,
  args: {
    storyName: "Default",
    label: "NEW",
  },
}

interface Props extends StoryProps<string>, PillProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<Pill {...args}>{args.label}</Pill>}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  secondary: false,
}

export const SecondaryPill = Template.bind({})
SecondaryPill.args = {
  secondary: true,
}
