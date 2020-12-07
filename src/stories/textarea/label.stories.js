import React from "react"
import Textarea from "../../components/textarea"
import { action } from "@storybook/addon-actions"

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

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        <Textarea {...args} />
      </div>
    </div>
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
