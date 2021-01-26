import React, { useState, FC } from "react"
import { action } from "@storybook/addon-actions"

import StoryContainer from "../../storyContainer"
import Select from "../../../components/select"

const handleChange = () => action("handleChange")

export default {
  title: "Select/Appearance",
  component: Select,
  args: {
    storyName: "",
    options: [
      { value: 1, name: "One" },
      { value: 2, name: "Two" },
      { value: 3, name: "Three" },
      { value: 4, name: "Four" },
      { value: 5, name: "Five" },
      { value: 6, name: "Six" },
    ],
    skipContainer: false,
    withAutosuggest: false,
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
    skipContainer: {
      description:
        "`skipContainer` is useful if you want to have more control over how much the menu spans. You need to put the `<Select>` in a relative position container yourself then.",
    },
  },
}

interface Props {
  storyName: string
  skipContainer: boolean
  selected: boolean
  handleChange: (value: string) => void
  name: string
  options: Array<{ name: string; value: any | { customValue: any } }>
  withAutosuggest: boolean
  // options: Array<{ name: string; value: T | { customValue: T } }>
  // withAutosuggest: boolean
}

const Template: FC<Props> = ({ ...args } : Props) => {
  const [value, setValue] = useState(null)
  return (
    <StoryContainer
      title={args.storyName}
      component={
        args.skipContainer ? (
          <div className="w-12/12 relative">
            <div className="w-6/12">
              <Select
                {...args}
                selected={value}
                handleChange={(v: React.ChangeEvent<HTMLSelectElement>) => {
                  setValue(v)
                  handleChange()(v)
                }}
              />
            </div>
          </div>
        ) : (
          <Select
            {...args}
            selected={value}
            handleChange={(v: React.ChangeEvent<HTMLSelectElement>) => {
              setValue(v)
              handleChange()(v)
            }}
          />
        )
      }
    />
  )
}

export const Simple = Template.bind({})
Simple.args = {
  storyName: "Simple",
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

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  placeholder: "Placeholder",
  storyName: "With placeholder",
}

export const WithHint = Template.bind({})
WithHint.args = {
  hint: "Hint text",
  storyName: "With hint",
}

export const WithCustomWrapper = Template.bind({})
WithCustomWrapper.args = {
  skipContainer: true,
  storyName: "With custom wrapper",
}
