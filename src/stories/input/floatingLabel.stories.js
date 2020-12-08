import React from "react"
import { action } from "@storybook/addon-actions"

import Input from "../../components/input/index"

const onBlur = () => action("onBlur")
const onChange = () => action("onChange")

const setValue = (value) => ("value", value)

export default {
  title: "Input/Floating Label",
  component: Input,
  args: {
    storyName: "Input / Floating Label",
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

export const Standard = Template.bind({})
Standard.args = {
  storyName: "Standard",
  value: "",
  labelText: "Label",
  floatingLabel: true,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  storyName: "With Error Message",
  value: "",
  labelText: "Label",
  floatingLabel: true,
  error: "Error message",
}

export const WithClearButton = Template.bind({})
WithClearButton.args = {
  storyName: "With clear button",
  value: "text",
  hasClearButton: true,
  labelText: "Label",
  floatingLabel: true,
  onChange: (e) => {
    setValue(e.target.value)
    onChange()(e)
  },
  onBlur: onBlur(),
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  storyName: "With placeholder",
  value: "",
  placeholder: "Placeholder",
}

export const WithHint = Template.bind({})
WithHint.args = {
  storyName: "With hint",
  value: "",
  hint: "Hint text",
  labelText: "Label",
  floatingLabel: true,
}
