import React, { FC } from "react"

interface Props {
  label?: string
  required?: boolean
  htmlFor?: string
}

const Required: FC = () => (
  <span className="text-salmon leading-xxs relative top-requiredIndicator">
    &nbsp;*
  </span>
)

const Label: FC<Props> = ({ label, required = false, htmlFor }) => {
  if (!label) return null
  htmlFor = htmlFor || label

  return (
    <label htmlFor={htmlFor}>
      <b className="text-lg flex leading-label mb-5">
        <span className="text-base">{label}</span>
        {required ? <Required /> : null}
      </b>
    </label>
  )
}

export default Label
