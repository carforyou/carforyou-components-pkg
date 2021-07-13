import React, { FC, useEffect, useRef, useState } from "react"

import Input from "../input/index"

import { scrollIntoViewIfMobile } from "../../lib/scrollHelper"
import getClosestElement from "../../lib/getClosestElement"

interface Props {
  name: string
  initialValue?: string
  mode: "text" | "numeric" | "decimal" | "tel" | "email"
  placeholder: string
  step?: number
  min?: number
  max?: number
  position?: "left" | "right"
  apply: (event) => void
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

  const onChange = (event) => apply(event)

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      apply(event)
    }
  }

  const onBlur = (event) => {
    apply(event)
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
      hasClearButton
      debounce={1000}
    />
  )
}

export default InputFilter
