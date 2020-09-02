import React from "react"
import { storiesOf } from "@storybook/react"

import { wInfo } from "./utils"
import OpeningHours from "../src/components/openingHours"

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

storiesOf("Opening Hours", module).add(
  "Closed during lunch time",
  wInfo(`
    Description
    ~~~
    <OpeningHours
    openingHours={{
      open: {
        dayOfWeek: "Saturday",
        time: "09:00",
      },
      close: {
        dayOfWeek: "Saturday",
        time: "12:00",
      },
    }}
    labels={{
      monday: "Monday",
      tuesday: "Tuesday",
    }}>
      Disclaimer
    </OpeningHours>
    ~~~
    `)(() => (
    <div className="pl-40 w-12/12 md:w-6/12">
      <OpeningHours
        openingHours={openingHours}
        labels={{
          monday: "Monday",
          tuesday: "Tuesday",
          wednesday: "Wednesday",
          thursday: "Thursday",
          friday: "Friday",
          saturday: "Saturday",
          sunday: "Sunday",
          open: "open",
          closed: "closed",
        }}
      >
        <p className="py-20 pl-30 text-grey-3">
          This data is provided by Google, and could contain inaccurate
          informations.
        </p>
      </OpeningHours>
    </div>
  ))
)
