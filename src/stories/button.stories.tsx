import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import Button from "../components/button"

export default {
  title: "Button",
  component: Button,
  args: {
    storyName: "Default",
    label: "Storybook",
    onClick: action("on Click"),
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
  label: string
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
  storyName: "Default",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
  storyName: "Small",
}

export const Responsive = Template.bind({})
Responsive.args = {
  size: "responsive",
  storyName: "Responsive",
}

export const Teal = Template.bind({})
Teal.args = {
  teal: true,
  storyName: "Teal",
}

export const TealBorder = Template.bind({})
TealBorder.args = {
  tealBorder: true,
  storyName: "Teal Border",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  storyName: "Disabled",
}

export const WrappingALink = Template.bind({})
WrappingALink.args = {
  storyName: "Wrapping a link",
  label: <a href="https://carforyou.ch">CAR FOR YOU</a>,
}
