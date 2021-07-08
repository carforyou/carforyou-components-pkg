import React, { FC } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import Image, { ImageProps } from "../components/image"

export default {
  title: "Image",
  component: Image,
  args: {
    storyName: "Image",
  },
}

interface Props extends StoryProps<unknown>, ImageProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<Image {...args}>{args.children}</Image>}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  image: "/dummyImage.jpeg",
}

export const ImageMissing = Template.bind({})
ImageMissing.args = {
  image: null,
}
