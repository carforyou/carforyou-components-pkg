import React, { FC } from "react"

import { StoryProps } from "./storyProps"
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

const Template: FC<StoryProps<unknown>> = (args) => {
  return <StoryContainer title={args.storyName} component={<Spinner />} />
}

export const Default = Template.bind({})
