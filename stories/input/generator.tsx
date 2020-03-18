import React from "react"
import { action } from "@storybook/addon-actions"
import { text, array, boolean } from "@storybook/addon-knobs"

import { wInfo } from "../utils"

import Input from "../../src/components/input"

const generateDescription = ({
  name,
  value,
  placeholder,
  label,
  errors,
  clearable,
  disabled,
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
${label ? `    label={${JSON.stringify(label)}}` : ""}
${hint ? `    hint="${hint}"` : ""}
${errors ? `    errors={${JSON.stringify(errors)}}` : ""}
${disabled ? "    disabled" : ""}
${required ? "    required" : ""}
${clearable ? "    clearable" : ""}
    onChange={/* event handler */}
    onBlur={/* event handler */}
  />
  ~~~
  `.replace(/^\s*[\r\n]/gm, "")
}

const generateStoryFunction = ({
  name,
  placeholder,
  label,
  errors,
  disabled,
  clearable,
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
          label={label}
          errors={errors}
          disabled={disabled}
          clearable={clearable}
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
  label = null,
  errors = null,
  disabled = null,
  required = null,
  clearable = null,
  hint = null,
  mode = "text"
}) => {
  const onBlur = () => action("onBlur")
  const onChange = () => action("onChange")

  const common = {
    name,
    placeholder,
    label,
    errors,
    disabled,
    required,
    clearable,
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
