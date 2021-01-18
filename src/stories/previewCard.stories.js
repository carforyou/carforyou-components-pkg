import React from "react"

import StoryContainer from "./storyContainer"
import PreviewCard from "../components/previewCard"

export default {
  title: "Preview card",
  component: PreviewCard,
  args: {
    storyName: "Default",
    previewLabel: "Show more",
    name: "Name of dealer",
    location: {
      address: "Zürcherstrasse",
      zipCode: "8953",
      city: "Dietikon",
    },
    title: "Sportgarage",
    image:
      "https://images.preprod.carforyou.ch/2020/12/04/13/45/32/2-promotionimage-1316-vt5CK5OFsSY7.jpg",
    logo:
      "https://images.preprod.carforyou.ch/2020/12/07/11/52/50/2-logo-1316-Cw3Xsal82n5X.png",
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

const Template = (args) => {
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
