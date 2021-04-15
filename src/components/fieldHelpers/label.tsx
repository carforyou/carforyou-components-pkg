import React, { FC } from "react"

interface Props {
  fieldName?: string
  required?: boolean
}

const Required: FC = () => (
  <span className="text-salmon leading-xxs relative top-requiredIndicator">
    &nbsp;*
  </span>
)

const Label: FC<Props> = ({ fieldName, required = false }) => {
  if (!fieldName) return null
  return (
    <label>
      <b className="text-lg flex leading-label mb-5">
        <span className="text-base">{fieldName}</span>
        {required ? <Required /> : null}
      </b>
    </label>
  )
}

export default Label
