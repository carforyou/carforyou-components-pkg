import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import RadioButtonGroupWithTitle, { RadioButtonGroupProps } from "../../src/components/radioButtonGroupWithTitle"

const onChange = () => action("onChange")

export default {
  title: "Radio Button Group with Title",
  component: RadioButtonGroupWithTitle,
  args: {
    storyName: "",
    title: "Radio Group",
    radioInputs: 
    [
        {
            name: "radioButtonGroupWithTitle", 
            value: "A",
            checked: false,
            onChange: (e) => {
                onChange()(e)
            }, 
            renderLabel:() => "option 1"
        }, 
        {
            name: "radioButtonGroupWithTitle", 
            value: "B",
            checked: false,
            onChange: (e) => {
                onChange()(e)
            }, 
            renderLabel:() => "option 2"
        }, 
        {   
            name: "radioButtonGroupWithTitle", 
            value: "C",
            checked: false,
            onChange: (e) => {
                onChange()(e)
            }, 
            renderLabel:() => "option 3"
        }
    ]
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<JSX.Element>, RadioButtonGroupProps {}

const Template: FC<Props> = (args) => {
  return (
      <>
    <div className="text-2xl mb-20">{args.storyName}</div>
        <RadioButtonGroupWithTitle
          {...args}
        />
      </>
    
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

export const Required = Template.bind({})
Required.args = {
  storyName: "Required",
  required: true,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  storyName: "With error message",
  error: "Error message",
}