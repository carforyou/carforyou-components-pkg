import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import RangeSelect, { RangeSelectProps } from "../../src/components/rangeSelect"

const onChange = () => action("onChange")

export default {
  title: "RangeSelect",
  component: RangeSelect,
  args: {
    name: {
      min: "rangeSelectFrom",
      max: "rangeSelectTo",
    },
    handleChange: {
      min: onChange(),
      max: onChange(),
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
  options: [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" },
  ],
}
