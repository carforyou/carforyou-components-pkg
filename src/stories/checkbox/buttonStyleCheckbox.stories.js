import React from "react"
import Checkbox from "../../components/checkbox"
import StoryContainer from "../storyContainer"
import { action } from "@storybook/addon-actions"

const onChange = () => action("onChange")
const initialValue = false

export default {
  title: "Checkbox/Button style checkbox",
  component: Checkbox,
  args: {
    storyName: "",
    value: initialValue,
    checked: true,
    buttonStyle: true,
    label: "Label",
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
    <StoryContainer
      title={args.storyName}
      component={
        <Checkbox
          {...args}
          renderLabel={args.label ? () => args.label : null}
        />
      }
    />
  )
}

export const ButtonStyle = Template.bind({})
ButtonStyle.args = {
  storyName: "Button style",
}

export const ButtonStyleDisabled = Template.bind({})
ButtonStyleDisabled.args = {
  disabled: true,
  storyName: "Button style disabled",
}

export const ButtonStyleWithErrorMessage = Template.bind({})
ButtonStyleWithErrorMessage.args = {
  error: "Error message",
  storyName: "Button style with error message",
}
