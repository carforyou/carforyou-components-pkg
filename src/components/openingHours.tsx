import React, { FC } from "react"

import ClockOutlinedTeal from "./icons/clockOutlined"

interface Props {
  openingHours: any
  weekDaysTranslation: string
  mondayTranslation: string
  sundayTranslation: string
  openTranslation: string
  closedTranslation: string
  infoTranslation: string
}

const daysOrder = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
]

export const OpeningHours: FC<Props> = ({
  openingHours,
  weekDaysTranslation,
  mondayTranslation,
  sundayTranslation,
  openTranslation,
  closedTranslation,
  infoTranslation,
}) => {
  const openingHoursByDay = daysOrder.reduce((acc, day) => {
    acc[day] = []
    return acc
  }, {})

  const isOpen24h = () =>
    openingHours.length === 1 &&
    openingHours[0].open.dayOfWeek.toLowerCase() === "sunday" &&
    !openingHours[0].close

  const isSameTime = (prevTime, currentTime) => {
    if (currentTime.length) {
      return currentTime.every((h, i) => h === prevTime[i])
    }
    return !currentTime.length && !prevTime.length
  }

  const getFormattedDays = (days) => {
    if (days.length > 1) {
      return `${`${days[0]}`.slice(0, 2)}-${`${days[days.length - 1]}`.slice(
        0,
        2
      )}`
    }
    return days[0]
  }

  const renderRow = (day, morning, afternoon = null) => {
    return (
      <div className="w-12/12 flex items-baseline pb-5" key={day}>
        <div className="w-4/12">{day}</div>
        <div className="ml-20 flex flex-col leading-xs">
          <span>{morning}</span>
          {afternoon ? <span>{afternoon}</span> : null}
        </div>
      </div>
    )
  }

  const renderOpeningHours = () => {
    if (isOpen24h()) {
      return renderRow(
        `${mondayTranslation.slice(0, 2)}-${sundayTranslation.slice(0, 2)}`,
        openTranslation
      )
    }

    openingHours.forEach((h) => {
      const dayOfWeek = h.open.dayOfWeek.toLowerCase()
      openingHoursByDay[dayOfWeek].push(h.open.time)
      openingHoursByDay[dayOfWeek].push(h.close.time)
    })

    return daysOrder
      .reduce((acc, current) => {
        const currentDay = current
        const lastIndex = acc.length - 1

        if (acc[lastIndex]) {
          const sameTime = isSameTime(
            acc[lastIndex][1],
            openingHoursByDay[currentDay]
          )

          if (sameTime) {
            acc[lastIndex][0].push(currentDay)
            return acc
          }
        }
        acc.push([[currentDay], openingHoursByDay[currentDay]])
        return acc
      }, [])
      .map((openingTimes) => {
        const [days, times] = openingTimes

        switch (times.length) {
          case 2: // without lunch break
            return renderRow(getFormattedDays(days), times.join("-"))
          case 4: // with lunch break
            return renderRow(
              getFormattedDays(days),
              times.slice(0, 2).join("-"),
              times.slice(2).join("-")
            )
          default:
            // closed
            return renderRow(getFormattedDays(days), closedTranslation)
        }
      })
  }

  return openingHours ? (
    <>
      <div className="flex mt-15 text-grey-4 text-sm">
        <ClockOutlinedTeal height="20" width="20" />
        <div className="w-12/12 pl-15">{renderOpeningHours()}</div>
      </div>
      <p className="py-20 pl-30 text-grey-3">{infoTranslation}</p>
    </>
  ) : null
}

export default OpeningHours
