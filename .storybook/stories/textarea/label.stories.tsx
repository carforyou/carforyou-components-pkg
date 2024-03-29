import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "../storyProps"
import StoryContainer from "../storyContainer"
import Textarea, { TextareaProps } from "../../../src/components/textarea"

const onChange = () => action("onChange")
const onBlur = () => action("onBlur")

export default {
  title: "Textarea/Label",
  component: Textarea,
  args: {
    storyName: "Default",
    onChange: (e) => {
      onChange()(e)
    },
    onBlur: onBlur(),
    value: "",
    labelText: "Label",
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<unknown>, TextareaProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer title={args.storyName} component={<Textarea {...args} />} />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  storyName: "Standard",
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

export const RequiredIndicator = Template.bind({})
RequiredIndicator.args = {
  storyName: "Required indicator",
  required: true,
}

export const Popup = Template.bind({})
Popup.args = {
  storyName: "Popup",
  renderLabelPopup: () => <div>Popup Content</div>,
}

export const RequiredWithPopup = Template.bind({})
RequiredWithPopup.args = {
  storyName: "Required with Popup",
  renderLabelPopup: () => <div>Popup Content</div>,
  required: true,
}
