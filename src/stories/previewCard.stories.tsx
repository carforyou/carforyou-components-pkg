import React, { FC } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import PreviewCard, { PreviewCardProps } from "../components/previewCard"

export default {
  title: "Preview card",
  component: PreviewCard,
  args: {
    storyName: "Default",
    previewLabel: "Show more",
    footerTitle: "Dealer Name",
    footerText: "Zürcherstrasse, 8953 Dietikon",
    cardTitle: "Sportgarage",
    image:
      "https://images.preprod.carforyou.ch/2020/12/04/13/45/32/2-promotionimage-1316-vt5CK5OFsSY7.jpg",
    logo: "https://images.preprod.carforyou.ch/2020/12/07/11/52/50/2-logo-1316-Cw3Xsal82n5X.png",
    link: "#",
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<unknown>, PreviewCardProps {
  storyName: string
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<PreviewCard {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
}
