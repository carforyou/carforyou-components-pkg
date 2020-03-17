import React, { FC, ReactChild } from "react"

interface Props {
  errors?: string[]
  children: (error: boolean) => ReactChild
}

const WithValidationError: FC<Props> = ({ errors, children }) => (
  <>
    {children(!!errors)}
    <div className="text-sm text-salmon h-19">
      {errors.length === 1 && errors[0]}
      {errors.length > 1 ? (
        <ul>
          {errors.map((message, index) => (
            <li key={`error-${index}`}>{message}</li>
          ))}
        </ul>
      ) : null}
    </div>
  </>
)

export default WithValidationError
