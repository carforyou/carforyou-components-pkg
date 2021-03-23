import React, { FC } from "react"

import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"
import CustomError, { Error404Props } from "../../components/customError"

export default {
  title: "Error page",
  component: CustomError,
  args: {
    pageTitle: "Page not found",
    pageSubtitle: "The requested page does no longer exist",
    buttonHref: "/",
    buttonLabel: "Go to home page",
  },
}

interface Props extends StoryProps<unknown>, Error404Props {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12 md:w-6/12"}
      component={<CustomError {...args} />}
    />
  )
}

export const ErrorDefault = Template.bind({})
ErrorDefault.args = {
  statusCode: 410,
  pageTitle: "Unknown error",
  pageSubtitle: "An unknown error with the code 410 occurred",
  redirectHref: "/",
  redirectLabel: "Go to home page",
}

export const Error404 = Template.bind({})
Error404.args = {
  statusCode: 404,
  pageTitle: "Page not found",
  pageSubtitle: "The requested page does no longer exist",
  redirectHref: "/",
  redirectLabel: "Go to home page",
}
