import React from "react"

import StoryContainer from "./storyContainer"
import GaragePromotionCard from "../components/garagePromotionCard"

export default {
  title: "Garage Promotion Card",
  component: GaragePromotionCard,
  args: {
    storyName: "Default",
    previewLabel: "Show more",
    dealerName: "Name of dealer",
    dealerLocation: {
      address: "Zürcherstrasse",
      zipCode: "8953",
      city: "Dietikon",
    },
    title: "Sportgarage",
    mainImage: {
      s3Key: "2020/12/04/13/45/32/2-promotionimage-1316-vt5CK5OFsSY7.jpg",
    },
    logo: {
      s3Key: "2020/12/07/11/52/50/2-logo-1316-Cw3Xsal82n5X.png",
    },
    linkToDealerPage: "#",
    cdnUrl: "https://images.preprod.carforyou.ch/",
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
      component={<GaragePromotionCard {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
}
