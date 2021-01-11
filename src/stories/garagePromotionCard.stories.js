import React from "react"
import GaragePromotionCard from "../components/garagePromotionCard"
import StoryContainer from "./storyContainer"

export default {
  title: "Garage Promotion Card",
  component: GaragePromotionCard,
  args: {
    storyName: "Default",
    previewLabel: "Show more",
    dealer: {
      name: "Tartanpion",
      address: "Montplaisir",
      zipCode: "69400",
      city: "Test",
    },
    title: "Mon garage",
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
