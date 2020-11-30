import React from "react"
import { action } from "@storybook/addon-actions"
import Select from "../../components/select"

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
    allowCustomValues: false,
    skipContainer: false,
    withAutosuggest: false,
    handleChange: handleChange(),
  },
  argTypes: {
    buttonName: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = (args) => {
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
  extraDescription:
    "`skipContainer` is useful if you want to have more control over how much the menu spans. You need to put the `<Select>` in a relative position container yourself then.",
  storyName: "With custom wrapper",
}
