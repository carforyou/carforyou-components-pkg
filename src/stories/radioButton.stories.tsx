import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "./storyContainer"
import RadioButton, { RadioButtonProps } from "../components/radioButton"

const onChange = () => action("onChange")
const initialValue = "B"

export default {
  title: "Radio Button",
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

interface Props extends RadioButtonProps {
  storyName: string
  label: JSX.Element
}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={
        <RadioButton
          renderLabel={args.label ? () => args.label : null}
          {...args}
        />
      }
    />
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
