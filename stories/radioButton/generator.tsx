import React from "react"
import { action } from "@storybook/addon-actions"

import { wInfo } from "../utils"

import RadioButton from "../../src/components/radioButton"

const generateDescription = ({
  name,
  value,
  checked = false,
  disabled = false,
  error,
  label,
  labelPosition
}) => {
  return `
  Description
  ~~~
  <Checkbox
${name ? `    name="${name}"` : ""}
${value ? `    value="${value}"` : ""}
${label ? `    labelText={() => "${label}"}` : ""}
${labelPosition ? `    labelPosition="${labelPosition}"` : ""}
${error ? `    error="${error}"` : ""}
${disabled ? "    disabled" : ""}
${checked ? "    checked" : ""}
    onChange={/* event handler */}
  />
  ~~~
  `.replace(/^\s*[\r\n]/gm, "")
}

const generateStoryFunction = ({
  name,
  value: inputValue,
  onChange,
  label,
  ...rest
}) => ({ value, setValue }) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <RadioButton
          value={inputValue}
          checked={value === inputValue}
          name={name}
          onChange={e => {
            setValue(e.target.value)
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
  labelPosition = null
}) => {
  const onChange = () => action("onChange")

  const common = {
    value,
    name,
    error,
    disabled,
    label,
    labelPosition
  }

  return wInfo(generateDescription(common))(
    generateStoryFunction({
      ...common,
      onChange
    })
  )
}

export default generateStory
