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
  showSearchIcon,
  skipContainer,
  extraDescription,
  withAutosuggest
}) => {
  return `
  Description
  ~~~
${skipContainer ? '  <div className="relative">' : ""}
${skipContainer ? "  " : ""}  <Select
${skipContainer ? "  " : ""}${name ? `    name="${name}"` : ""}
${skipContainer ? "  " : ""}${
    options ? `    options={[${JSON.stringify(options)}]}` : ""
  }
${skipContainer ? "  " : ""}${selected ? `    selected={${selected}}` : ""}
${skipContainer ? "  " : ""}${
    placeholder ? `    placeholder="${placeholder}"` : ""
  }
${skipContainer ? "  " : ""}${labelText ? `    labelText="${labelText}"` : ""}
${skipContainer ? "  " : ""}${
    renderLabelPopup
      ? `    renderLabelPopup={/* render prop with popup content */}`
      : ""
  }
${skipContainer ? "  " : ""}${hint ? `    hint="${hint}"` : ""}
${skipContainer ? "  " : ""}${error ? `    errors="${error}"` : ""}
${skipContainer ? "  " : ""}${withAutosuggest ? "    withAutosuggest" : ""}
${skipContainer ? "  " : ""}${disabled ? "    disabled" : ""}
${skipContainer ? "  " : ""}${showSearchIcon ? "    showSearchIcon" : ""}
${skipContainer ? "  " : ""}${allowCustomValues ? "    allowCustomValues" : ""}
${skipContainer ? "  " : ""}${required ? "    required" : ""}
${skipContainer ? "  " : ""}${skipContainer ? "    skipContainer" : ""}
${skipContainer ? "  " : ""}    handleChange={/* event handler */}
${skipContainer ? "  " : ""}  />
${skipContainer ? "  </div>" : ""}
  ~~~
  ${extraDescription ? extraDescription : ""}
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
  showSearchIcon,
  skipContainer,
  withAutosuggest
}) => ({ value, setValue }) => {
  const renderSelect = () => (
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
      skipContainer={skipContainer}
      withAutosuggest={withAutosuggest}
    />
  )

  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 md:w-3/12">
        {skipContainer ? (
          <div className="w-12/12 relative">
            <div className="w-6/12">{renderSelect()}</div>
          </div>
        ) : (
          renderSelect()
        )}
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
  showSearchIcon = null,
  skipContainer = false,
  extraDescription = null,
  withAutosuggest = true
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
    hint,
    withAutosuggest,
    skipContainer
  }

  return wInfo(generateDescription({ ...common, extraDescription }))(
    generateStoryFunction({
      ...common,
      handleChange: handleChange()
    })
  )
}

export default generateStory
