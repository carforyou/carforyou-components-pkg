import React, { FC } from "react"

import { DummyTooltip } from "./dummyTooltip"
import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"

import InvertedVerifiedBadge, {
  VerifiedBadgeProps,
} from "../../components/badges/invertedVerified"

export default {
  title: "Badges/InvertedVerifiedBadge",
  component: InvertedVerifiedBadge,
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
      component={<InvertedVerifiedBadge {...args} />}
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

export const WithoutText = Template.bind({})
WithoutText.args = {
  withText: false,
}

export const WithTooltip = Template.bind({})
WithTooltip.args = {
  tooltipContent: <DummyTooltip />,
}
