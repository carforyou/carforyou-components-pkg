import React, { FC, ReactChild } from "react"
import classNames from "classnames"

interface Props {
  error?: string
  children: (error: boolean) => ReactChild
}

const WithValidationError: FC<Props> = ({ error, children }) => {
  return (
    <div className="relative pb-px">
      {error && (
        <div className="text-sm text-salmon absolute bottom-validationError validation-errorMessage">
          {error}
        </div>
      )}
      <div
        className={classNames("validation-inputContainer", {
          "mb-20": !!error
        })}
      >
        {children(!!error)}
      </div>
      <div />
    </div>
  )
}

export default WithValidationError
