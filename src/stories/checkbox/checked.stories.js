import React from "react"
import Checkbox from "../../components/checkbox"
import { action } from "@storybook/addon-actions"

const onChange = () => action("onChange")
const setValue = (value) => ("value", value)
const initialValue = false

export default {
  title: "Checkbox",
  component: Checkbox,
  args: {
    storyName: "Default",
    name: "testCheckbox",
    disabled: false,
    error: null,
    label: null,
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Checkbox {...args} />
      </div>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  value: initialValue,
  onChange: (e) => {
    setValue(e.target.checked)
    onChange()(e)
  },
}
