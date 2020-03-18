import React from "react"
import { action } from "@storybook/addon-actions"
import { text, array, boolean } from "@storybook/addon-knobs"

import { wInfo } from "../utils"

import Input from "../../src/components/input"

const generateDescription = ({
  name,
  value,
  placeholder,
  labelText,
  renderLabelPopup,
  error,
  disabled,
  hasClearButton,
  required,
  mode,
  hint
}) => {
  return `
  Description
  ~~~
  <Input
${name ? `    name="${name}"` : ""}
${value || value === "" ? `    value="${value}"` : ""}
${mode ? `    mode="${mode}"` : ""}
${placeholder ? `    placeholder="${placeholder}"` : ""}
${labelText ? `    labelText="${labelText}"` : ""}
${
  renderLabelPopup
    ? `    renderLabelPopup={/* render prop with popup content */}`
    : ""
}
${hint ? `    hint="${hint}"` : ""}
${error ? `    errors="${error}"` : ""}
${disabled ? "    disabled" : ""}
${hasClearButton ? "    hasClearButton" : ""}
${required ? "    required" : ""}
    onChange={/* event handler */}
    onBlur={/* event handler */}
  />
  ~~~
  `.replace(/^\s*[\r\n]/gm, "")
}

const generateStoryFunction = ({
  name,
  placeholder,
  labelText,
  renderLabelPopup,
  error,
  disabled,
  hasClearButton,
  required,
  mode,
  hint,
  onBlur,
  onChange
}) => ({ value, setValue }) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Input
          name={name}
          mode={mode as "text" | "numeric" | "decimal"}
          value={value}
          placeholder={placeholder}
          labelText={labelText}
          renderLabelPopup={renderLabelPopup}
          error={error}
          disabled={disabled}
          hasClearButton={hasClearButton}
          required={required}
          hint={hint}
          onChange={e => {
            setValue(e.target.value)
            onChange()(e)
          }}
          onBlur={onBlur()}
        />
      </div>
    </div>
  )
}

const generateStory = ({
  name = "testInput",
  value = null,
  placeholder = null,
  labelText = null,
  renderLabelPopup = null,
  error = null,
  disabled = null,
  hasClearButton = null,
  required = null,
  hint = null,
  mode = "text"
}) => {
  const onBlur = () => action("onBlur")
  const onChange = () => action("onChange")

  const common = {
    name,
    placeholder,
    labelText,
    renderLabelPopup,
    error,
    disabled,
    required,
    hasClearButton,
    mode,
    hint
  }

  return wInfo(
    generateDescription({
      value,
      ...common
    })
  )(
    generateStoryFunction({
      ...common,
      onBlur,
      onChange
    })
  )
}

export default generateStory
