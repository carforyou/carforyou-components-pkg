import React from "react"
import { action } from "@storybook/addon-actions"

import Button from "../components/button"
import CtaCall from "../../.storybook/icons/ctaCall"

export default {
  title: "Icon Button",
  component: Button,
  args: {
    storyName: "Default",
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        <Button {...args}>{args.label}</Button>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  icon: () => <CtaCall />,
  onClick: action("on Click"),
  teal: false,
  storyName: "Default",
  label: "Anrufen",
}

export const WrappingALink = Template.bind({})
WrappingALink.args = {
  icon: () => <CtaCall />,
  onClick: action("on Click"),
  teal: false,
  storyName: "Wrapping a link",
  label: <a href="https://carforyou.ch">CarForYou</a>,
}
