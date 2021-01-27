import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "../storyContainer"
import Checkbox from "../../components/checkbox"

const onChange = () => action("onChange")
const initialValue = true

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

interface Props {
  storyName: string
  label: JSX.Element
  name: string
  labelPosition?: string
  disabled?: boolean
}

const Template: FC<Props> = (args) => {
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
