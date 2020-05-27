import React from "react"
import { action } from "@storybook/addon-actions"

import { wInfo } from "../utils"

import Checkbox from "../../src/components/checkbox"

const generateDescription = ({
  name,
  checked = false,
  disabled = false,
  error,
  label,
  labelPosition,
  buttonStyle
}) => {
  return `
  Description
  ~~~
  <Checkbox
${name ? `    name="${name}"` : ""}
${label ? `    labelText={() => "${label}"}` : ""}
${labelPosition ? `    labelPosition="${labelPosition}"` : ""}
${error ? `    error="${error}"` : ""}
${disabled ? "    disabled" : ""}
${checked ? "    checked" : ""}
${buttonStyle ? "    buttonStyle" : ""}
    onChange={/* event handler */}
  />
  ~~~
  `.replace(/^\s*[\r\n]/gm, "")
}

const generateStoryFunction = ({ name, onChange, label, ...rest }) => ({
  value,
  setValue
}) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Checkbox
          name={name}
          checked={value}
          onChange={e => {
            setValue(e.target.checked)
            onChange()(e)
          }}
          renderLabel={label ? () => label : null}
          {...rest}
        />
      </div>
    </div>
  )
}

const generateStory = ({
  value,
  name = "testCheckbox",
  disabled = false,
  error = null,
  label = null,
  labelPosition = null,
  buttonStyle = null
}) => {
  const onChange = () => action("onChange")

  const common = {
    name,
    error,
    disabled,
    label
  }

  const labelProps = labelPosition
    ? {
        labelPosition
      }
    : buttonStyle
    ? { buttonStyle }
    : {}

  return wInfo(
    generateDescription({
      checked: value,
      labelPosition,
      buttonStyle,
      ...common
    })
  )(
    generateStoryFunction({
      ...common,
      ...labelProps,
      onChange
    })
  )
}

export default generateStory
