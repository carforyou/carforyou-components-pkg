import React from "react"
import { action } from "@storybook/addon-actions"
import { text, array, boolean } from "@storybook/addon-knobs"

import { wInfo } from "../utils"

import Input from "../../src/components/input"

const generateDescription = ({
  name,
  value,
  placeholder,
  errors,
  disabled,
  mode
}) => {
  return `
  Description
  ~~~
  <Input
${name ? `    name="${name}"` : ""}
${value || value === "" ? `    value="${value}"` : ""}
${mode ? `    mode="${mode}"` : ""}
${placeholder ? `    placeholder="${placeholder}"` : ""}
${errors ? `    errors={${JSON.stringify(errors)}}` : ""}
${disabled ? "    disabled" : ""}
    onChange={/* event handler */}
    onBlur={/* event handler */}
  />
  ~~~
  `.replace(/^\s*[\r\n]/gm, "")
}

const generateStoryFunction = ({
  name,
  placeholder,
  errors,
  disabled,
  mode,
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
          errors={errors}
          disabled={disabled}
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
  errors = null,
  disabled = null,
  mode = "text"
}) => {
  const onBlur = () => action("onBlur")
  const onChange = () => action("onChange")

  return wInfo(
    generateDescription({
      name,
      value,
      placeholder,
      errors,
      disabled,
      mode
    })
  )(
    generateStoryFunction({
      name,
      placeholder,
      errors,
      disabled,
      mode,
      onBlur,
      onChange
    })
  )
}

export default generateStory
