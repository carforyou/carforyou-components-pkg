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
    handleChange: onChange(),
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
  options: [
    { value: 1, name: "One" },
    { value: 2, name: "Two" },
    { value: 3, name: "Three" },
    { value: 4, name: "Four" },
    { value: 5, name: "Five" },
    { value: 6, name: "Six" },
  ],
  select: true,
}
