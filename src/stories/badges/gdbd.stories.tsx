import React, { FC } from "react"

import { DummyTooltip } from "./dummyTooltip"
import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"
import GdbdBadge, { GdbdBadgeProps } from "../../components/badges/gdbd"

export default {
  title: "Badges/GdbdBadge",
  component: GdbdBadge,
  args: {
    language: "en",
    score: "not-defined",
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

interface Props extends StoryProps<string>, GdbdBadgeProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<GdbdBadge {...args} />}
    />
  )
}

export const English = Template.bind({})
English.args = {
  language: "en",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
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

export const GreatDeal = Template.bind({})
GreatDeal.args = {
  score: "great-deal",
}

export const GoodDeal = Template.bind({})
GoodDeal.args = {
  score: "good-deal",
}

export const FairDeal = Template.bind({})
FairDeal.args = {
  score: "fair-deal",
}

export const HighDeal = Template.bind({})
HighDeal.args = {
  score: "high-deal",
}

export const NotDefined = Template.bind({})
NotDefined.args = {
  score: "not-defined",
}

export const WithTooltip = Template.bind({})
WithTooltip.args = {
  tooltipContent: <DummyTooltip />,
}
