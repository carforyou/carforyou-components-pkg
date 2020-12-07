import React from "react"
import RadioButton from "../../components/radioButton"
import { action } from "@storybook/addon-actions"

const onChange = () => action("onChange")
const initialValue = "B"

export default {
  title: "Radio Button/Not selected",
  component: RadioButton,
  args: {
    storyName: "",
    value: initialValue,
    checked: false,
    onChange: (e) => {
      onChange()(e)
    },
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
        <RadioButton
          renderLabel={args.label ? () => args.label : null}
          {...args}
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
  storyName: "Disabled",
  disabled: true,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  storyName: "With error message",
  error: "Error message",
}

export const WithLabelOnTheLeft = Template.bind({})
WithLabelOnTheLeft.args = {
  storyName: "With label on the left",
  labelPosition: "left",
  label: "Label",
}

export const WithLabelOnTheRight = Template.bind({})
WithLabelOnTheRight.args = {
  storyName: "With label on the right",
  labelPosition: "right",
  label: "Label",
}
