import React from "react"
import { action } from "@storybook/addon-actions"
import Select from "../../../components/select"

export default {
  title: "Select  with autosuggest/Label",
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
    labelText: "Label",
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
  const handleChange = () => action("handleChange")
  var initialValue = 8
  const setValue = (value) => (initialValue = value)
  
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{args.storyName}</div>
      <div className="w-12/12 md:w-3/12">
        {args.skipContainer ? (
          <div className="w-12/12 relative">
            <div className="w-6/12">
              <Select
                {...args}
                selected={initialValue}
                handleChange={(v) => {
                  setValue(v)
                  handleChange()(v)
                  console.log(v)
                  console.log(initialValue)
                }}
              />
            </div>
          </div>
        ) : (
          <Select
            {...args}
            selected={initialValue}
            handleChange={(v) => {
              setValue(v)
              handleChange()(v)
              console.log(v)
              console.log(initialValue)
            }}
          />
        )}
      </div>
    </div>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  storyName: "Standard",
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

export const RequiredIndicator = Template.bind({})
RequiredIndicator.args = {
  required: true,
  storyName: "Required indicator",
}

export const Popup = Template.bind({})
Popup.args = {
  renderLabelPopup: () => <div>Popup Content</div>,
  storyName: "Popup",
}

export const RequiredWithPopup = Template.bind({})
RequiredWithPopup.args = {
  required: true,
  renderLabelPopup: () => <div>Popup Content</div>,
  storyName: "Required with Popup",
}
