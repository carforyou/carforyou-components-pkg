import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  name: string
  text: string
  error?: boolean
}

const WithLabel: FC<Props> = ({ name, children, text, error = false }) => {
  return (
    <>
      <label htmlFor={name}>
        <b
          className={classNames("mb-5 text-lg flex leading-label", {
            "text-salmon": error
          })}
        >
          <span className="text-base">{text}</span>
        </b>
      </label>
      <div className="relative w-12/12">{children}</div>
    </>
  )
}

export default WithLabel
