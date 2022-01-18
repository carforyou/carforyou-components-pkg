import React from "react"

import StoryContainer from "./storyContainer"
import DatePicker from "../../src/components/datePicker"

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
      callback: (e) => e,
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
Default.args = {
  storyName: "Default",
}

export const WithMinMaxDate = Template.bind({})
WithMinMaxDate.args = {
  storyName: "With min and max date",
  locale: "de-CH",
  placeholder: "01.01.2020",
  minDate: new Date(),
  maxDate: new Date(Date.now() + 31556952000),
  labelText: "Date",
  formik: {
    name: "datePicker",
    value: null,
    callback: (e) => e,
    errorMessage: "",
  },
}
