import React, { Component } from "react"

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

interface State {
  refocus: boolean
  value: string
}

const timeout = 1000

export default class InputFilter extends Component<Props, State> {
  state = {
    refocus: false,
    value: this.props.initialValue,
  }

  timeoutFn = null

  onChange = (event) => {
    this.setState({ value: event.target.value })
    if (event.target.cleared) {
      this.props.apply(event)
    }
  }

  onKeyDown = (event) => {
    clearTimeout(this.timeoutFn)
    event.persist()

    if (event.keyCode === 13) {
      event.preventDefault()
      this.props.apply(event)
    } else {
      this.timeoutFn = setTimeout(() => this.props.apply(event), timeout)
    }
  }

  onFocus = (event) => {
    event.persist()
    this.setState({ refocus: true }, () => {
      const closestSection = getClosestElement(
        event.target,
        "[data-closestpoint]"
      )
      scrollIntoViewIfMobile(closestSection)
    })
  }

  onBlur = (event) => {
    clearTimeout(this.timeoutFn)
    this.props.apply(event)
    this.setState({ refocus: false, value: event.target.value })
  }

  componentDidUpdate(prevProps) {
    const { initialValue } = this.props

    if (initialValue !== prevProps.initialValue) {
      const newValue = initialValue ? initialValue : null

      this.setState({ value: newValue })
    }
  }

  render() {
    const {
      name,
      initialValue,
      mode,
      placeholder,
      step,
      min,
      max,
      position,
    } = this.props

    const { refocus, value } = this.state

    return (
      <Input
        mode={mode}
        name={name}
        step={step}
        min={min}
        max={max}
        value={value}
        placeholder={placeholder}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onKeyDown={this.onKeyDown}
        onChange={this.onChange}
        position={position}
        key={initialValue}
        autoFocus={refocus}
        hasClearButton
      />
    )
  }
}
