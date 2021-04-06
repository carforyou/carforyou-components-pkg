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
    storyName: "",
    name: {
      min: "string",
      max: "string",
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
    required: true,
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

export const Select = Template.bind({})
Select.args = {
  storyName: "Default",
  minValue: 1,
  maxValue: 6,
}
