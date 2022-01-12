import React, { FC } from "react"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import CustomErrorPage, {
  Error404Props,
} from "../../src/components/error/customErrorPage"

export default {
  title: "Error page",
  component: CustomErrorPage,
  args: {
    statusCode: 404,
    image: "error404.png",
    title: "Page not found",
    subtitle: "The requested page does no longer exist",
    buttonLabel: "Go to home page",
  },
}

interface Props extends StoryProps<unknown>, Error404Props {}

export const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12 md:w-6/12"}
      component={<CustomErrorPage {...args} />}
    />
  )
}
