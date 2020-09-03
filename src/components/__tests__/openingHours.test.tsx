import React from "react"
import { render } from "@testing-library/react"

import OpeningHours from "../openingHours"

describe("<Opening hours />", () => {
  const labels = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    open: "open",
    closed: "closed",
  }

  it("renders correct markup - 24h open and the clock icon", () => {
    const openingHours = [
      {
        open: {
          dayOfWeek: "Sunday",
          time: "00:00",
        },
        close: null,
      },
    ]

    const { container } = render(
      <OpeningHours openingHours={openingHours} labels={labels} clockIcon />
    )

    expect(container).toMatchSnapshot()
  })

  it("renders correct markup - open working days", () => {
    const openingHours = [
      {
        open: {
          dayOfWeek: "Monday",
          time: "08:00",
        },
        close: {
          dayOfWeek: "Monday",
          time: "19:00",
        },
      },
      {
        open: {
          dayOfWeek: "Tuesday",
          time: "08:00",
        },
        close: {
          dayOfWeek: "Tuesday",
          time: "19:00",
        },
      },
      {
        open: {
          dayOfWeek: "Wednesday",
          time: "08:00",
        },
        close: {
          dayOfWeek: "Wednesday",
          time: "19:00",
        },
      },
      {
        open: {
          dayOfWeek: "Thursday",
          time: "08:00",
        },
        close: {
          dayOfWeek: "Thursday",
          time: "19:00",
        },
      },
      {
        open: {
          dayOfWeek: "Friday",
          time: "08:00",
        },
        close: {
          dayOfWeek: "Friday",
          time: "19:00",
        },
      },
      {
        open: {
          dayOfWeek: "Saturday",
          time: "08:00",
        },
        close: {
          dayOfWeek: "Saturday",
          time: "19:00",
        },
      },
    ]

    const { container } = render(
      <OpeningHours openingHours={openingHours} labels={labels} />
    )

    expect(container).toMatchSnapshot()
  })

  it("renders correct markup - closed during lunch time", () => {
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

    const { container } = render(
      <OpeningHours openingHours={openingHours} labels={labels} />
    )

    expect(container).toMatchSnapshot()
  })
})
