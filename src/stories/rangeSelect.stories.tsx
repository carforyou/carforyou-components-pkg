import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import RangeSelect, { RangeSelectProps } from "../components/rangeSelect"

const onChange = () => action("onChange")

export default {
  title: "RangeSelect",
  component: RangeSelect,
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

interface Props extends StoryProps<unknown>, RangeSelectProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<RangeSelect {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  storyName: "Default",
  select: false,
}

export const Select = Template.bind({})
Select.args = {
  storyName: "Select",
  minValue: 1,
  maxValue: 6,
  options: [
    { name: "One", value: 1 },
    { name: "Two", value: 2 },
    { name: "Three", value: 3 },
    { name: "Four", value: 4 },
    { name: "Five", value: 5 },
    { name: "Six", value: 6 },
  ],
  select: true,
}
