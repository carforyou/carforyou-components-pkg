import React from "react"
import { action } from "@storybook/addon-actions"
import Select from "../../../components/select"

const value = ""
const setValue = (value) => ("value", value)
const handleChange = () => action("handleChange")
const onChange = (v) => {
  setValue(v)
  handleChange(v)
}

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
    allowCustomValues: false,
    skipContainer: false,
    withAutosuggest: true,
    handleChange: onChange,
    selected: "",
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
  },
}

const TemplateAutoSuggest = (args) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        {args.skipContainer ? (
          <div className="w-12/12 relative">
            <div className="w-6/12">
              <Select {...args} />
            </div>
          </div>
        ) : (
          <Select {...args} />
        )}
      </div>
    </div>
  )
}

export const Simple = TemplateAutoSuggest.bind({})
Simple.args = {
  storyName: "Simple",
  showSearchIcon: true,
}

export const WithSearchIcon = TemplateAutoSuggest.bind({})
WithSearchIcon.args = {
  storyName: "With search icon",
  showSearchIcon: true,
}

export const Disabled = TemplateAutoSuggest.bind({})
Disabled.args = {
  storyName: "Disabled",
  disabled: true,
}

export const WithErrorMessage = TemplateAutoSuggest.bind({})
WithErrorMessage.args = {
  storyName: "With error message",
  error: "Error message",
}

export const WithPlaceholder = TemplateAutoSuggest.bind({})
WithPlaceholder.args = {
  storyName: "With placeholder",
  placeholder: "Placeholder",
}

export const WithHint = TemplateAutoSuggest.bind({})
WithHint.args = {
  storyName: "With hint",
  hint: "Hint text",
}

export const WithNoResultsMessage = TemplateAutoSuggest.bind({})
WithNoResultsMessage.args = {
  selected: initialValue,
  noResultsText: "Sorry no results",
  storyName: "With no results message",
}

export const WithCustomWrapper = TemplateAutoSuggest.bind({})
WithCustomWrapper.args = {
  selected: initialValue,
  skipContainer: true,
  extraDescription:
    "`skipContainer` is useful if you want to have more control over how much the menu spans. You need to put the `<Select>` in a relative position container yourself then.",
  storyName: "With custom wrapper",
}
