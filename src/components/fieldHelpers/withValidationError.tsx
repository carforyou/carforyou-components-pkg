import React, { FC, ReactChild } from "react"

interface Props {
  error?: string
  children: (error: boolean) => ReactChild
}

const WithValidationError: FC<Props> = ({ error, children }) => {
  return (
    <div className="relative">
      {error && (
        <div className="text-sm text-salmon absolute bottom-validationError validationError">
          {error}
        </div>
      )}
      {children(!!error)}
    </div>
  )
}

export default WithValidationError
