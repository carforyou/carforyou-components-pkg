import React, { useState } from "react"
import RadioButton from "../../components/radioButton"
import { action } from "@storybook/addon-actions"

const onChange = () => action("onChange")
const initialValue = "A"

export default {
  title: "Radio Button/Selected",
  component: RadioButton,
  args: {
    storyName: "",
    value: initialValue,
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
  const [value, setValue] = useState()
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        <RadioButton
          checked={value}
          name={name}
          onChange={(e) => {
            setValue(e.target.value)
            onChange()(e)
          }}
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
