import React from "react"
import Checkbox from "../../components/checkbox"
import { action } from "@storybook/addon-actions"

const onChange = () => action("onChange")
const initialValue = false

export default {
  title: "Checkbox/Checked",
  component: Checkbox,
  args: {
    storyName: "",
    value: initialValue,
    checked: true,
    onChange: onChange(),
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
        <Checkbox
          {...args}
          renderLabel={args.label ? () => args.label : null}
        />
      </div>
    </div>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  storyName: "Standard",
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  storyName: "Disabled",
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  error: "Error message",
  storyName: "With error message",
}

export const WithLabelOnTheLeft = Template.bind({})
WithLabelOnTheLeft.args = {
  labelPosition: "left",
  label: "Label",
  storyName: "With label on the left",
}

export const WithLabelOnTheRight = Template.bind({})
WithLabelOnTheRight.args = {
  labelPosition: "right",
  label: "Label",
  storyName: "With label on the right",
}

export const ButtonStyle = Template.bind({})
ButtonStyle.args = {
  buttonStyle: true,
  label: "Label",
  storyName: "Button style",
}

export const ButtonStyleDisabled = Template.bind({})
ButtonStyleDisabled.args = {
  buttonStyle: true,
  label: "Label",
  disabled: true,
  storyName: "Button style disabled",
}

export const ButtonStyleWithErrorMessage = Template.bind({})
ButtonStyleWithErrorMessage.args = {
  buttonStyle: true,
  label: "Label",
  error: "Error message",
  storyName: "Button style with error message",
}
