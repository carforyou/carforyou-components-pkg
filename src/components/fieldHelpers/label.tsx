import React, { FC } from "react"

import Asterisk from "../../components/asterisk"

interface Props {
  fieldName?: string
  required?: boolean
}

const Label: FC<Props> = ({ fieldName, required = false }) => {
  if (!fieldName) return null
  return (
    <label>
      <b className="text-lg flex leading-label mb-5">
        <span className="text-base">{fieldName}</span>
        {required && <Asterisk />}
      </b>
    </label>
  )
}

export default Label
