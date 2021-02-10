import React from "react"

import { action } from "@storybook/addon-actions"

import StoryContainer from "../storyContainer"
import InputFilter from "../../components/filters/input"

export default {
  title: "Filters/Input",
  component: InputFilter,
  args: {
    storyName: "",
    name: "testFilter",
  },
  argTypes: {
    storyName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = (props) => {
  return (
    <StoryContainer
      title={props.storyName}
      component={
        <InputFilter
          {...props}
          apply={(_filters) => {
            action("applyFilter")
          }}
        />
      }
    />
  )
}

export const Simple = Template.bind({})
Simple.args = {
  storyName: "Simple",
}

export const WithInitialValue = Template.bind({})
WithInitialValue.args = {
  storyName: "With initial value",
  initialValue: "value",
}
