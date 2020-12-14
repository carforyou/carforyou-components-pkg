import React from "react"
import StoryContainer from "../storyContainer"
import Input from "../../components/input/index"

export default {
  title: "Input/Mode",
  component: Input,
  args: {
    storyName: "Input / Mode",
    value: "",
  },
}

const Template = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<Input {...args}>{args.label}</Input>}
    />
  )
}

export const Text = Template.bind({})
Text.args = {
  storyName: "Text",
  mode: "text",
}

export const Numeric = Template.bind({})
Numeric.args = {
  storyName: "Numeric",
  mode: "numeric",
}

export const Decimal = Template.bind({})
Decimal.args = {
  storyName: "Decimal",
  mode: "decimal",
}
