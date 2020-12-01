import React from "react"
import { action } from "@storybook/addon-actions"
import Select from "../../../components/select"

const initialValue = ""

export default {
  title: "Select with autosuggest/Appearance",
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
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
  },
}
const generateStoryFunction = ({ args }) => ({ value, setValue }) => {
  const renderSelect = () => (
    <Select
      {...args}
      selected={value}
      handleChange={(v) => {
        setValue(v)
        handleChange(v)
      }}
    />
  )

  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        {args.skipContainer ? (
          <div className="w-12/12 relative">
            <div className="w-6/12">{renderSelect()}</div>
          </div>
        ) : (
          renderSelect()
        )}
      </div>
    </div>
  )
}

const Template = ({ args }) => {
  const handleChange = () => action("handleChange")
  return generateStoryFunction({
    ...args,
    handleChange: handleChange(),
  })
}

export const Simple = Template.bind({})
Simple.args = {
  storyName: "Simple",
  showSearchIcon: true,
  handleChange: handleChange(),
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
  extraDescription:
    "`skipContainer` is useful if you want to have more control over how much the menu spans. You need to put the `<Select>` in a relative position container yourself then.",
  storyName: "With custom wrapper",
}
