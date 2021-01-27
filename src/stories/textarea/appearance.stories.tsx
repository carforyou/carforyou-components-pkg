import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "../storyContainer"
import Textarea from "../../components/textarea"

const onChange = () => action("onChange")
const onBlur = () => action("onBlur")

export default {
  title: "Textarea/Appearance",
  component: Textarea,
  args: {
    storyName: "Default",
    onChange: (e) => {
      onChange()(e)
    },
    onBlur: onBlur(),
    value: "",
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props {
  storyName: string
  name: string
  value: string
  onChange: () => void
  onBlur: () => void
  disabled?: boolean
  error?: string
  hint?: string
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer title={args.storyName} component={<Textarea {...args} />} />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  storyName: "Standard",
}

export const Disabled = Template.bind({})
Disabled.args = {
  storyName: "Disabled",
  disabled: true,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  storyName: "With error message",
  error: "Error message",
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  storyName: "With placeholder",
  placeholder: "Placeholder",
}

export const WithHint = Template.bind({})
WithHint.args = {
  storyName: "With hint",
  hint: "Hint text",
}
