import React from "react"
import { action } from "@storybook/addon-actions"

import { wInfo } from "../utils"

import Input from "../../src/components/input"

const generateDescription = ({
  name,
  value,
  placeholder,
  labelText,
  renderLabelPopup,
  floatingLabel,
  error,
  disabled,
  hasClearButton,
  required,
  mode,
  hint,
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
${error ? `    error="${error}"` : ""}
${disabled ? "    disabled" : ""}
${hasClearButton ? "    hasClearButton" : ""}
${required ? "    required" : ""}
${floatingLabel ? "    floatingLabel" : ""}
    onChange={/* event handler */}
    onBlur={/* event handler */}
  />
  ~~~
  `.replace(/^\s*[\r\n]/gm, "")
}

const generateStoryFunction = ({ mode, onChange, onBlur, name, ...rest }) => ({
  value,
  setValue,
}) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Input
          name={name}
          value={value}
          mode={mode as "text" | "numeric" | "decimal"}
          onChange={(e) => {
            setValue(e.target.value)
            onChange()(e)
          }}
          onBlur={onBlur()}
          {...rest}
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
  floatingLabel = null,
  error = null,
  disabled = null,
  hasClearButton = null,
  required = null,
  hint = null,
  mode = "text",
}) => {
  const onBlur = () => action("onBlur")
  const onChange = () => action("onChange")

  const common = {
    name,
    placeholder,
    labelText,
    error,
    disabled,
    hasClearButton,
    mode,
    hint,
  }

  const labelProps =
    renderLabelPopup || required
      ? {
          renderLabelPopup,
          required,
        }
      : floatingLabel
      ? { floatingLabel }
      : {}

  return wInfo(
    generateDescription({
      value,
      renderLabelPopup,
      floatingLabel,
      required,
      ...common,
    })
  )(
    generateStoryFunction({
      ...common,
      ...labelProps,
      onBlur,
      onChange,
    })
  )
}

export default generateStory
