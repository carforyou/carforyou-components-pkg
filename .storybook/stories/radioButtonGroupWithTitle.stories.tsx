import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import RadioButtonGroupWithTitle, { RadioButtonGroupProps } from "../../src/components/radioButtonGroupWithTitle"

const onChange = () => action("onChange")
const initialValue = "B"

export default {
  title: "Radio Button Group with Title",
  component: RadioButtonGroupWithTitle,
  args: {
    storyName: "",
    title: "Radio Group",
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

interface Props extends StoryProps<JSX.Element>, RadioButtonGroupProps {}

const Template: FC<Props> = (args) => {
  return (
      <>
    <div className="text-2xl mb-20">{args.title}</div>
        <RadioButtonGroupWithTitle
          {...args}
        />
      </>
    
  )
}

export const Standard = Template.bind({})
Standard.args = {
    required: true,
  storyName: "Standard",
  radioInputs: [{name: "radioButtonGroupWithTitle", value: initialValue,
  checked: false,
  onChange: (e) => {
    onChange()(e)
  }, renderLabel:() => "labelgff fgfgdg"}, {name: "radioButtonGroupWithTitle", value: initialValue,
  checked: false,
  onChange: (e) => {
    onChange()(e)
  }, renderLabel:() => "label"}, {name: "radioButtonGroupWithTitle", value: initialValue,
  checked: false,
  onChange: (e) => {
    onChange()(e)
  }, renderLabel:() => "label"}, {name: "radioButtonGroupWithTitle", value: initialValue,
  checked: false,
  onChange: (e) => {
    onChange()(e)
  }, renderLabel:() => "label"}, {name: "radioButtonGroupWithTitle", value: initialValue,
  checked: false,
  onChange: (e) => {
    onChange()(e)
  }, renderLabel:() => "label"}, {name: "radioButtonGroupWithTitle", value: initialValue,
  checked: false,
  onChange: (e) => {
    onChange()(e)
  }, renderLabel:() => "label"}]
}