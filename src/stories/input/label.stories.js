import React from "react"
import { action } from "@storybook/addon-actions"

import StoryContainer from "../storyContainer"
import Input from "../../components/input/index"

const onBlur = () => action("onBlur")
const onChange = () => action("onChange")

const setValue = (value) => ("value", value)

export default {
  title: "Input/Label",
  component: Input,
  args: {
    storyName: "Input / Label",
    labelText: "Label",
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

export const Standard = Template.bind({})
Standard.args = {
  storyName: "Standard",
  value: "",
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
  placeholder: "Placeholder",
}

export const WithHint = Template.bind({})
WithHint.args = {
  storyName: "With hint",
  value: "",
  hint: "Hint text",
}

export const WithRequiredIndicator = Template.bind({})
WithRequiredIndicator.args = {
  storyName: "With required indicator",
  value: "",
  required: true,
}

export const WithPopup = Template.bind({})
WithPopup.args = {
  storyName: "With Popup",
  value: "",
  renderLabelPopup: () => <div>Popup Content</div>,
}

export const RequiredWithPopup = Template.bind({})
RequiredWithPopup.args = {
  storyName: "Required with popup",
  value: "",
  required: true,
  renderLabelPopup: () => <div>Popup Content</div>,
}
