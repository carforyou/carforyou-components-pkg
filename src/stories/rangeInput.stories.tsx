import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import RangeInput, { RangeInputProps } from "../components/rangeInput"

const onChange = () => action("onChange")

export default {
  title: "RangeInput",
  component: RangeInput,
  args: {
    name: {
      min: "min",
      max: "max",
    },
    value: {
      min: "",
      max: "",
    },
    handleChangeMin: onChange(),
    handleChangeMax: onChange(),
    isValid: {
      min: true,
      max: true,
    },
    placeholder: {
      min: "min",
      max: "max",
    },
    required: false,
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<unknown>, RangeInputProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<RangeInput {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  storyName: "With Label",
  rangeInputLabel: "Label",
}
