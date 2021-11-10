import React, { FC, useEffect, useRef, useState } from "react"

import Input from "../input/index"

import { scrollIntoViewIfMobile } from "../../lib/scrollHelper"
import getClosestElement from "../../lib/getClosestElement"

interface Props {
  name: string
  initialValue?: string
  mode: "text" | "numeric" | "decimal" | "tel" | "email"
  placeholder?: string
  step?: number
  min?: number
  max?: number
  position?: "left" | "right"
  apply: (event) => void
  onApply?: (value: string) => void
  hasClearButton?: boolean
  textAlignment?: "left" | "right" | "center-right"
}

const InputFilter: FC<Props> = ({
  name,
  initialValue,
  mode,
  placeholder,
  step,
  min,
  max,
  position,
  apply,
  onApply,
  hasClearButton = true,
  textAlignment = "left",
}) => {
  const [refocus, setRefocus] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    ;(inputRef.current as HTMLInputElement).value = initialValue
  }, [initialValue])

  const onFocus = (event) => {
    event.persist()
    setRefocus(() => {
      const closestSection = getClosestElement(
        event.target,
        "[data-closestpoint]"
      )
      scrollIntoViewIfMobile(closestSection)
      return true
    })
  }

  const applyWithTrigger = (event) => {
    apply(event)
    onApply && onApply(event.target.value)
  }

  const onChange = (event) => applyWithTrigger(event)

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      applyWithTrigger(event)
    }
  }

  const onBlur = (event) => {
    applyWithTrigger(event)
    setRefocus(false)
  }

  return (
    <Input
      ref={inputRef}
      mode={mode}
      name={name}
      step={step}
      min={min}
      max={max}
      value={initialValue}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onChange={onChange}
      position={position}
      autoFocus={refocus}
      hasClearButton={hasClearButton}
      debounce={1000}
      textAlignment={textAlignment}
    />
  )
}

export default InputFilter
