import React, { FC, ReactChild } from "react"

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
      <div className="validation-inputContainer mb-20">{children(!!error)}</div>
      <div />
    </div>
  )
}

export default WithValidationError
