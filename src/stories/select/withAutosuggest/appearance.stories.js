import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import Select from "../../../components/select"

const handleChange = () => action("handleChange")
const initialValue = ""

export default {
  title: "Select  with autosuggest/Appearance",
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
    withAutosuggest: true,
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

const Template = (args) => {
  const [value, setValue] = useState(null)
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        {args.skipContainer ? (
          <div className="w-12/12 relative">
            <div className="w-6/12">
              <Select
                {...args}
                selected={value}
                handleChange={(v) => {
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
            handleChange={(v) => {
              setValue(v)
              handleChange()(v)
            }}
          />
        )}
      </div>
    </div>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  storyName: "Simple",
}

export const WithSearchIcon = Template.bind({})
WithSearchIcon.args = {
  storyName: "With search icon",
  showSearchIcon: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  storyName: "Disabled",
  disabled: true,
}

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  storyName: "With error message",
  error: "Error message",
}

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  storyName: "With placeholder",
  placeholder: "Placeholder",
}

export const WithHint = Template.bind({})
WithHint.args = {
  storyName: "With hint",
  hint: "Hint text",
}

export const WithNoResultsMessage = Template.bind({})
WithNoResultsMessage.args = {
  selected: initialValue,
  noResultsText: "Sorry no results",
  storyName: "With no results message",
}

export const WithCustomWrapper = Template.bind({})
WithCustomWrapper.args = {
  selected: initialValue,
  skipContainer: true,
  storyName: "With custom wrapper",
}
