import React, { FC, ReactNode } from "react"
import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import Button from "../components/button"
import CtaCall from "../../.storybook/icons/ctaCall"

export default {
  title: "Icon Button",
  component: Button,
  args: {
    storyName: "Default",
    onClick: action("on Click"),
    teal: false,
  },
}

interface Props {
  storyName: string
  label: string
  icon?: () => ReactNode
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<Button {...args}>{args.label}</Button>}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  icon: () => <CtaCall />,
  storyName: "Default",
  label: "Anrufen",
}

export const WrappingALink = Template.bind({})
WrappingALink.args = {
  icon: () => <CtaCall />,
  storyName: "Wrapping a link",
  label: <a href="https://carforyou.ch">CAR FOR YOU</a>,
}
