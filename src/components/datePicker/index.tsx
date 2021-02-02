import Calendar from "react-calendar"
import React, { FC, useEffect, useRef, useState } from "react"

import Input from "../input/index"

const isToday = (date) => {
  if (!date) return false

  const now = new Date()
  return (
    date.getDate() == now.getDate() &&
    date.getMonth() == now.getMonth() &&
    date.getFullYear() == now.getFullYear()
  )
}

const formatWeekDay = (locale, date) => {
  return date.toLocaleString(locale || "de-CH", { weekday: "narrow" })
}

export type Locale = "de-CH" | "fr-CH" | "it-CH" | "en-GB"
export type Language = "de" | "fr" | "it" | "en"

interface Props {
  locale: Locale
  placeholder: string
  labelText?: string
  minDate?: Date
  maxDate?: Date
  formik: {
    name: string
    value: null | Date
    callback
    errorMessage?: string
  }
}

const DatePicker: FC<Props> = ({
  locale,
  placeholder,
  labelText,
  minDate = null,
  maxDate = null,
  formik: {
    value: initialValue = null,
    callback: updateFormValue,
    name: formFiledName,
    errorMessage,
  },
}) => {
  const [selectedDate, setSelectedDate] = useState(initialValue)
  const [showCalendar, setShowCalendar] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (showCalendar) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [showCalendar])

  const handleOutsideClick = (event) => {
    const outsideClick = !containerRef.current.contains(event.target)

    if (outsideClick) {
      setShowCalendar(false)
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <Input
        name="datePickerInput"
        placeholder={placeholder}
        mode="text"
        labelText={labelText}
        autoComplete="off"
        value={selectedDate?.toLocaleDateString(locale, {
          weekday: "short",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
        onFocus={() => {
          setShowCalendar(true)
        }}
        onChange={({ target: { value } }) => {
          if (value === "") {
            setSelectedDate(null)
            setShowCalendar(false)
          }
        }}
        hasClearButton={!isToday(selectedDate)}
        error={errorMessage}
      />

      {showCalendar ? (
        <div className="calendarContainer transition duration-800 absolute -mt-20 left-0 xxs:left-auto w-12/12">
          <Calendar
            locale={locale}
            minDate={minDate}
            maxDate={maxDate}
            minDetail="decade"
            onChange={(newValue) => {
              const [updatedDate] = Array.isArray(newValue)
                ? newValue
                : [newValue]
              setSelectedDate(updatedDate)
              updateFormValue({
                target: {
                  name: formFiledName,
                  value: updatedDate,
                },
              })
              setShowCalendar(false)
            }}
            value={selectedDate}
            formatShortWeekday={formatWeekDay}
            tileDisabled={({ date, view }) => {
              return view === "month" && date.getDay() === 0
            }}
            className="react-calendar"
          />
        </div>
      ) : null}
    </div>
  )
}

export default DatePicker
