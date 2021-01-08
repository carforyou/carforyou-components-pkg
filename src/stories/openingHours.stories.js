import React from "react"

import StoryContainer from "./storyContainer"
import OpeningHours from "../components/openingHours"

const openingHours = [
  {
    open: {
      dayOfWeek: "Monday",
      time: "07:30",
    },
    close: {
      dayOfWeek: "Monday",
      time: "12:00",
    },
  },
  {
    open: {
      dayOfWeek: "Monday",
      time: "13:30",
    },
    close: {
      dayOfWeek: "Monday",
      time: "18:00",
    },
  },
  {
    open: {
      dayOfWeek: "Tuesday",
      time: "07:30",
    },
    close: {
      dayOfWeek: "Tuesday",
      time: "12:00",
    },
  },
  {
    open: {
      dayOfWeek: "Tuesday",
      time: "13:30",
    },
    close: {
      dayOfWeek: "Tuesday",
      time: "18:00",
    },
  },
  {
    open: {
      dayOfWeek: "Wednesday",
      time: "07:30",
    },
    close: {
      dayOfWeek: "Wednesday",
      time: "12:00",
    },
  },
  {
    open: {
      dayOfWeek: "Wednesday",
      time: "13:30",
    },
    close: {
      dayOfWeek: "Wednesday",
      time: "18:00",
    },
  },
  {
    open: {
      dayOfWeek: "Thursday",
      time: "07:30",
    },
    close: {
      dayOfWeek: "Thursday",
      time: "12:00",
    },
  },
  {
    open: {
      dayOfWeek: "Thursday",
      time: "13:30",
    },
    close: {
      dayOfWeek: "Thursday",
      time: "18:00",
    },
  },
  {
    open: {
      dayOfWeek: "Friday",
      time: "07:30",
    },
    close: {
      dayOfWeek: "Friday",
      time: "12:00",
    },
  },
  {
    open: {
      dayOfWeek: "Friday",
      time: "13:30",
    },
    close: {
      dayOfWeek: "Friday",
      time: "17:00",
    },
  },
  {
    open: {
      dayOfWeek: "Saturday",
      time: "09:00",
    },
    close: {
      dayOfWeek: "Saturday",
      time: "12:00",
    },
  },
]

export default {
  title: "Opening hours",
  component: OpeningHours,
  args: {
    storyName: "Default",
    label: "Closed during lunch time",
  },
}

const Template = (args) => {
  return (
    <StoryContainer
      title={args.storyName}
      style={"w-12/12 md:w-6/12"}
      component={<OpeningHours {...args} />}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  openingHours: openingHours,
  labels: {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    open: "open 24h",
    closed: "closed",
  },
  clockIcon: true,
}
