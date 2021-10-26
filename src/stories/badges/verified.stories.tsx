import React, { FC } from "react"

import { DummyTooltip } from "./dummyTooltip"
import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"

import VerifiedBadge, {
  VerifiedBadgeProps,
} from "../../components/badges/verified"

export default {
  title: "Badges/VerifiedBadge",
  component: VerifiedBadge,
  args: {
    language: "en",
    size: "large",
  },
  argTypes: {
    tooltip: {
      table: {
        disable: true,
      },
    },
  },
}

type Props = StoryProps<unknown> & VerifiedBadgeProps

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<VerifiedBadge {...args} />}
    />
  )
}

export const English = Template.bind({})
English.args = {
  language: "en",
}

export const German = Template.bind({})
German.args = {
  language: "de",
}

export const French = Template.bind({})
French.args = {
  language: "fr",
}

export const Italian = Template.bind({})
Italian.args = {
  language: "it",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
}

export const DarkBackground = Template.bind({})
DarkBackground.args = {
  textColor: "white",
  background: "grey",
  badgeSize: "medium",
}

export const WithTooltip = Template.bind({})
WithTooltip.args = {
  tooltipContent: <DummyTooltip />,
}
