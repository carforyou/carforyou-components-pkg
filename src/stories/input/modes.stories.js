import React from "react"

import Input from "../../components/input/index"

export default {
  title: "Input/Mode",
  component: Input,
  args: {
    storyName: "Input / Mode",
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        <Input {...args}>{args.label}</Input>
      </div>
    </div>
  )
}

export const Text = Template.bind({})
Text.args = {
  storyName: "Text",
  value: "",
  mode: "text",
}

export const Numeric = Template.bind({})
Numeric.args = {
  storyName: "Numeric",
  value: "",
  mode: "numeric",
}

export const Decimal = Template.bind({})
Decimal.args = {
  storyName: "Decimal",
  value: "",
  mode: "decimal",
}
