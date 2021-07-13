import React, { FC, ReactChild } from "react"

interface Props {
  error?: string
  children: (error: boolean) => ReactChild
}

const WithValidationError: FC<Props> = ({ error, children }) => {
  return (
    <div className="relative pb-px">
      {error && (
        <div className="text-xs text-salmon absolute bottom-validationError validation-errorMessage whitespace-nowrap">
          {error}
        </div>
      )}
      <div className="validation-inputContainer mb-20">{children(!!error)}</div>
      <div />
    </div>
  )
}

export default WithValidationError
