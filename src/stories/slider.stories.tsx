import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import Slider, { SliderProps } from "../components/slider"

const onChange = () => action("onChange")

export default {
  title: "Slider",
  component: Slider,
  args: {
    storyName: "",
    step: 50,
    min: 0,
    max: 1000,
    name: "slider",
    defaultValue: 0,
    inputLabel: "Slider example",
    handleChange: onChange(),
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

interface Props extends StoryProps<unknown>, SliderProps {}

const Template: FC<Props> = (args) => {
  return (
    <StoryContainer title={args.storyName} component={<Slider {...args} />} />
  )
}

export const Default = Template.bind({})

export const Required = Template.bind({})
Required.args = {
  required: true,
}
