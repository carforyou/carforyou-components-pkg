import React from "react"
import Generator from "./generator.js"
import Pill from "../components/pill"

export default {
  title: "Pill",
  component: Pill,
  args: {
    storyName: "Default",
    label: "NEW",
  },
}

const Template = (args) => {
  return (
    <Generator
      title={args.storyName}
      component={<Pill {...args}>{args.label}</Pill>}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  secondary: false,
}

export const SecondaryPill = Template.bind({})
SecondaryPill.args = {
  secondary: true,
}
