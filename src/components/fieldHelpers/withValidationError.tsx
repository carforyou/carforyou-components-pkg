import React, { FC, ReactChild } from "react"
import classNames from "classnames"

interface Props {
  error?: string
  children: (error: boolean) => ReactChild
}

const WithValidationError: FC<Props> = ({ error, children }) => {
  return (
    <div className="relative overflow-auto">
      {error && (
        <div className="text-sm text-salmon absolute bottom-validationError validation__errorMessage">
          {error}
        </div>
      )}
      <div
        className={classNames("validation__inputContainer", {
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
