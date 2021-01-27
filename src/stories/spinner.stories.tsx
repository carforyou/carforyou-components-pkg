import React, { FC } from "react"

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

interface Props {
  storyName: string
}

const Template: FC<Props> = (args) => {
  return <StoryContainer title={args.storyName} component={<Spinner />} />
}

export const Default = Template.bind({})
