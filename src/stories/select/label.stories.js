import React from "react"
import { action } from "@storybook/addon-actions"
import Select from "../../components/select"

const handleChange = () => action("handleChange")

export default {
  title: "Select/Label",
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
    labelText: "Label",
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

const TemplateLabel = (args) => {
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

export const Standard = TemplateLabel.bind({})
Standard.args = {
  storyName: "Standard",
}

export const WithPlaceholder = TemplateLabel.bind({})
WithPlaceholder.args = {
  placeholder: "Placeholder",
  storyName: "With placeholder",
}

export const WithHint = TemplateLabel.bind({})
WithHint.args = {
  hint: "Hint text",
  storyName: "With hint",
}

export const RequiredIndicator = TemplateLabel.bind({})
RequiredIndicator.args = {
  required: true,
  storyName: "Required indicator",
}

export const Popup = TemplateLabel.bind({})
Popup.args = {
  renderLabelPopup: () => <div>Popup Content</div>,
  storyName: "Popup",
}

export const WithErrorMessage = TemplateLabel.bind({})
WithErrorMessage.args = {
  error: "Error message",
  storyName: "With error message",
}

export const RequiredWithPopup = TemplateLabel.bind({})
RequiredWithPopup.args = {
  required: true,
  renderLabelPopup: () => <div>Popup Content</div>,
  storyName: "Required with Popup",
}
