import React, { FC } from "react"

import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"
import GdbdBadge, { GdbdBadgeProps, Scores } from "../../components/badges/gdbd"

export default {
  title: "Badges/GdbdBadge",
  component: GdbdBadge,
  args: {
    language: "en",
    score: Scores.GoodDeal,
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
  score: Scores.GreatDeal,
}

export const GoodDeal = Template.bind({})
GoodDeal.args = {
  score: Scores.GoodDeal,
}

export const FairDeal = Template.bind({})
GreatDeal.args = {
  score: Scores.FairDeal,
}

export const HighDeal = Template.bind({})
GreatDeal.args = {
  score: Scores.HighDeal,
}

export const NotDefined = Template.bind({})
NotDefined.args = {
  score: Scores.NotDefined,
}

// FIXME:
export const WithTooltip = Template.bind({})
const DummyTooltip: FC = () => <div>Dummy tool tip</div>
WithTooltip.args = {
  tooltip: DummyTooltip,
}
