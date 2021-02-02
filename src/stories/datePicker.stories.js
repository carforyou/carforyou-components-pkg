import React from "react"

import StoryContainer from "./storyContainer"
import DatePicker from "../components/datePicker"

export default {
  title: "DatePicker",
  component: DatePicker,
  args: {
    storyName: "",
    locale: "de-CH",
    placeholder: "01.01.2020",
    labelText: "Date",
    formik: {
      name: "datePicker",
      value: null,
      callback: null,
      errorMessage: "",
    },
  },
}

const Template = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      component={<DatePicker {...args} />}
    />
  )
}

export const Default = Template.bind({})
