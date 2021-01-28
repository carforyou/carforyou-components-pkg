import React, { FC } from "react"

import StoryContainer from "./storyContainer"
import Pill, { PillProps } from "../components/pill"

export default {
  title: "Pill",
  component: Pill,
  args: {
    storyName: "Default",
    label: "NEW",
  },
}

interface Props extends PillProps {
  storyName: string
  label: string
}

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
