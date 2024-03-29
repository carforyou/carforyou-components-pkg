import React, { FC, useState } from "react"
import { action } from "@storybook/addon-actions"

import { StoryProps } from "../../storyProps"
import StoryContainer from "../../storyContainer"
import Select, { SimpleSelectProps } from "../../../../src/components/select"

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
    skipContainer: false,
    withAutosuggest: false,
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

interface Props extends StoryProps<unknown>, SimpleSelectProps<unknown> {}

const Template: FC<Props> = (args) => {
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
        )
      }
    />
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

export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  error: "Error message",
  storyName: "With error message",
}

export const RequiredWithPopup = Template.bind({})
RequiredWithPopup.args = {
  required: true,
  renderLabelPopup: () => <div>Popup Content</div>,
  storyName: "Required with Popup",
}
