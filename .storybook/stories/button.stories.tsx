import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import Button, { ButtonProps } from "../../src/components/button"

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

interface Props extends StoryProps<string>, ButtonProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<Button {...args}>{args.label}</Button>}
      style={args.style === "white-border" ? "bg-grey-dark p-20" : ""}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  storyName: "Disabled",
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
  style: "teal",
  storyName: "Teal",
}

export const TealDisabled = Template.bind({})
TealDisabled.args = {
  style: "teal",
  disabled: true,
  storyName: "Teal",
}

export const TealBorder = Template.bind({})
TealBorder.args = {
  style: "teal-border",
  storyName: "Teal Border",
}

export const TealBorderDisabled = Template.bind({})
TealBorderDisabled.args = {
  style: "teal-border",
  disabled: true,
  storyName: "Teal Border",
}

export const White = Template.bind({})
White.args = {
  style: "white-border",
  storyName: "White border",
}

export const WhiteDisabled = Template.bind({})
WhiteDisabled.args = {
  style: "white-border",
  disabled: true,
  storyName: "White border disabled",
}

export const WrappingALink = Template.bind({})
WrappingALink.args = {
  storyName: "Wrapping a link",
  label: <a href="https://carforyou.ch">CAR FOR YOU</a>,
}
