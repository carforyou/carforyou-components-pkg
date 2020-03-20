import React from "react"
import { action } from "@storybook/addon-actions"

import { wInfo } from "../utils"

import Select from "../../src/components/select"

const generateDescription = ({
  name,
  options,
  allowCustomValues,
  selected,
  error,
  disabled,
  labelText,
  renderLabelPopup,
  required,
  placeholder,
  hint,
  showSearchIcon
}) => {
  return `
  Description
  ~~~
  <Select
${name ? `    name="${name}"` : ""}
${options ? `    options={[${JSON.stringify(options)}]}` : ""}
${selected ? `    selected={${selected}}` : ""}
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
${showSearchIcon ? "    showSearchIcon" : ""}
${allowCustomValues ? "    allowCustomValues" : ""}
${required ? "    required" : ""}
    handleChange={/* event handler */}
  />
  ~~~
  `.replace(/^\s*[\r\n]/gm, "")
}

const generateStoryFunction = ({
  handleChange,
  name,
  options,
  allowCustomValues,
  error,
  disabled,
  labelText,
  renderLabelPopup,
  required,
  placeholder,
  hint,
  showSearchIcon
}) => ({ value, setValue }) => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        <Select
          name={name}
          options={options}
          allowCustomValues={allowCustomValues}
          selected={value}
          error={error}
          disabled={disabled}
          labelText={labelText}
          renderLabelPopup={renderLabelPopup}
          required={required}
          placeholder={placeholder}
          hint={hint}
          showSearchIcon={showSearchIcon}
          handleChange={v => {
            setValue(v)
            handleChange(v)
          }}
        />
      </div>
    </div>
  )
}

const generateStory = ({
  name = "testSelect",
  options = [
    { value: 1, name: "One" },
    { value: 2, name: "Two" },
    { value: 3, name: "Three" },
    { value: 4, name: "Four" },
    { value: 5, name: "Five" },
    { value: 6, name: "Six" }
  ],
  allowCustomValues = false,
  selected = null,
  error = null,
  disabled = null,
  labelText = null,
  renderLabelPopup = null,
  required = null,
  placeholder = null,
  hint = null,
  showSearchIcon = null
}) => {
  const handleChange = () => action("handleChange")

  const common = {
    name,
    options,
    selected,
    allowCustomValues,
    showSearchIcon,
    placeholder,
    labelText,
    renderLabelPopup,
    error,
    disabled,
    required,
    hint
  }

  return wInfo(generateDescription(common))(
    generateStoryFunction({
      ...common,
      handleChange: handleChange()
    })
  )
}

export default generateStory
