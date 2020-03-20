import React, { FC } from "react"

interface Props {
  name: string
  text: string
  error?: boolean
}

const WithFloatingLabel: FC<Props> = ({
  name,
  children,
  text,
  error = false
}) => {
  return (
    <label className="floatingLabel relative" htmlFor={name}>
      {children}
      <span className="floatingLabel-label">{text}</span>
    </label>
  )
}

export default WithFloatingLabel
