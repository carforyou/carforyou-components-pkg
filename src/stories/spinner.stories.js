import React from "react"

import StoryContainer from "./storyContainer"
import Spinner from "../components/spinner"

export default {
  title: "Spinner",
  component: Spinner,
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

const Template = (args) => {
  return <StoryContainer title={args.storyName} component={<Spinner />} />
}

export const Default = Template.bind({})
