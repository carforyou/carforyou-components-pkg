import React, { useState } from "react"
import RadioButton from "../../components/radioButton"
import { action } from "@storybook/addon-actions"


export default {
  title: "Radio Button/Selected",
  component: RadioButton,
  args: {
    storyName: "",
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
  const [value, setValue] = useState(true)
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Checkbox
          {...args}
          checked={value}
          onChange={(e) => {
            setValue(e.target.checked)
            onChange()(e)
          }}
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
