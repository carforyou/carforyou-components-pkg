import React from "react"
import Button from "../components/button"
import { action } from "@storybook/addon-actions"

export default {
  title: "Button",
  component: Button,
  args: {
    buttonName: "Default",
    label: "Storybook",
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.buttonName}</div>
      <div className="w-12/12 md:w-3/12">
        <Button {...args}>{args.label}</Button>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  onClick: action("on Click"),
  buttonName: "Default",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
  onClick: action("on Click"),
  buttonName: "Small",
}

export const Responsive = Template.bind({})
Responsive.args = {
  size: "responsive",
  onClick: action("on Click"),
  buttonName: "Responsive",
}

export const Teal = Template.bind({})
Teal.args = {
  teal: true,
  onClick: action("on Click"),
  buttonName: "Teal",
}

export const TealBorder = Template.bind({})
TealBorder.args = {
  tealBorder: true,
  onClick: action("on Click"),
  buttonName: "Teal Border",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  onClick: action("on Click"),
  buttonName: "Disabled",
}

export const WrappingALink = Template.bind({})
WrappingALink.args = {
  onClick: action("on Click"),
  buttonName: "Wrapping a link",
  label: <a href="https://carforyou.ch">CarForYou</a>,
}
