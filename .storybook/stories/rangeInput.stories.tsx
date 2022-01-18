import React, { FC } from "react"

import { action } from "@storybook/addon-actions"

import { StoryProps } from "./storyProps"
import StoryContainer from "./storyContainer"
import RangeInput, { RangeInputProps } from "../../src/components/rangeInput"

const onChange = () => action("onChange")

export default {
  title: "RangeInput",
  component: RangeInput,
  args: {
    name: {
      min: "rangeNameFrom",
      max: "rangeNameTo",
    },
    handleChange: onChange(),
    required: false,
    placeholder: {
      min: "min",
      max: "max",
    },
    value: {
      min: null,
      max: null,
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

interface Props extends StoryProps<unknown>, RangeInputProps {
  label: string
}

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
  storyName: "With label",
  label: "Label",
}
