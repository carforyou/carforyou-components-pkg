import React, { FC } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import Image, { ImageProps } from "../../src/components/image"

export default {
  title: "Image",
  component: Image,
  args: {
    storyName: "Image",
    source: "/dummyImage.jpeg",
  },
}

interface Props extends StoryProps<unknown>, ImageProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={args.fullScreen === undefined && "h-screen m-20 w-4/12"}
      component={<Image {...args}>{args.children}</Image>}
    />
  )
}

export const Cover = Template.bind({})
Cover.args = {
  objectFit: "cover",
}

export const Contain = Template.bind({})
Contain.args = {
  objectFit: "contain",
}

export const FullScreenImage = Template.bind({})
FullScreenImage.args = {
  objectFit: "cover",
  fullScreen: true,
}
