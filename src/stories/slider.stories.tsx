import React, { FC } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import Slider from "../components/slider"

export default {
  title: "Slider",
  component: Slider,
  args: {
    storyName: "",
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template: FC<StoryProps<unknown>> = (args) => {
  return <StoryContainer title={args.storyName} component={<Slider />} />
}

export const Default = Template.bind({})
