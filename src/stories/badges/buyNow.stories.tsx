import React, { FC } from "react"

import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"

import BuyNowBadge, { BuyNowBadgeProps } from "../../components/badges/buyNow"

export default {
  title: "Badges/BuyNowBadge",
  component: BuyNowBadge,
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

type Props = StoryProps<unknown> & BuyNowBadgeProps

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<BuyNowBadge {...args} />}
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
