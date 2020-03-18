import React, { FC } from "react"
import classNames from "classnames"

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
      <span
        className={classNames("label--floating", {
          "text-salmon": error
        })}
      >
        {text}
      </span>
    </label>
  )
}

export default WithFloatingLabel
