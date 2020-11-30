import React from "react"
import { action } from "@storybook/addon-actions"

import Input from "../../components/input/index"

const onBlur = () => action("onBlur")
const onChange = () => action("onChange")

const setValue = (value) => ("value", value)

export default {
  title: "Input/Appearance",
  component: Input,
  args: {
    storyName: "Input / Appearance",
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
}

export const Disabled = Template.bind({})
Disabled.args = {
  storyName: "Disabled",
  value: "",
  disabled: true,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  storyName: "With Error Message",
  value: "",
  error: "Error message",
}

export const WithClearButton = Template.bind({})
WithClearButton.args = {
  storyName: "With clear button",
  value: "text",
  hasClearButton: true,
  placeholder: "Type something",
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
}
