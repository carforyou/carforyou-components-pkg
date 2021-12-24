import React, { FC } from "react"

import Asterisk from "../../../src/components/asterisk"

interface Props {
  name: string
  text: string
  error?: boolean
  required?: boolean
}

const WithFloatingLabel: FC<Props> = ({ name, children, text, required }) => {
  return (
    <label className="floatingLabel relative w-12/12" htmlFor={name}>
      {children}
      <span className="floatingLabel-label">
        {text}
        {required && <Asterisk isRelative={false} />}
      </span>
    </label>
  )
}

export default WithFloatingLabel
