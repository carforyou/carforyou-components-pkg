import React, { FC } from "react"
import { action } from "@storybook/addon-actions"

import StoryContainer from "../storyContainer"
import Input from "../../components/input/index"

const onBlur = () => action("onBlur")
const onChange = () => action("onChange")
const setValue = (value: string) => value

export default {
  title: "Input/Appearance",
  component: Input,
  args: {
    storyName: "Input / Appearance",
  },
}

interface Props {
  storyName: string
  label: string
  name: string
  value: string
  mode: "text" | "numeric" | "decimal" | "tel" | "email"
  onChange: <T extends { target: { name: string; value: string | number } }>(
    e: T
  ) => void
  hasClearButton?: boolean
  disabled?: boolean
  error?: string
  onBlur?: () => void
  hint?: string
}

const Template: FC<Props> = (args) => {
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
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
