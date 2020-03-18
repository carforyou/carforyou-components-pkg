import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  name: string
  text: string
  error?: boolean
  required?: boolean
}

const WithLabel: FC<Props> = ({
  name,
  children,
  text,
  error = false,
  required = false
}) => {
  return (
    <>
      <label htmlFor={name}>
        <b
          className={classNames("mb-5 text-lg flex leading-label", {
            "text-salmon": error
          })}
        >
          <span className="text-base">{text}</span>
          {required ? (
            <span className="text-salmon leading-xxs relative top-requiredIndicator">
              &nbsp;*
            </span>
          ) : null}
        </b>
      </label>
      <div className="relative w-12/12">{children}</div>
    </>
  )
}

export default WithLabel
