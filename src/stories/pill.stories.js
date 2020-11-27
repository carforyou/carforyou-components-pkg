import React from "react"

import Pill from "../components/pill"

export default {
  title: "Pill",
  component: Pill,
  args: {
    storyName: "Default",
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        <Pill {...args}>{args.label}</Pill>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  secondary: false,
  label: "NEW",
}

export const SecondaryPill = Template.bind({})
SecondaryPill.args = {
  secondary: true,
  label: "NEW",
}
