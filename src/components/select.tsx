import React, { ReactElement, RefObject } from "react"
import classNames from "classnames"

import DropdownWithAutosuggest from "../components/dropdown/withAutosuggest"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithLabel from "./fieldHelpers/withLabel"
import WithClearButton from "./fieldHelpers/withClearButton"
import HintText from "./fieldHelpers/hintText"
import InputField from "./input/inputField"

interface Props<T> {
  ref?: RefObject<HTMLInputElement>
  name: string
  options: Array<{ name: string; value: T | { customValue: T } }>
  allowCustomValues?: boolean
  handleChange: (value: T) => void
  selected?: T
  error?: string
  disabled?: boolean
  labelText?: string
  renderLabelPopup?: () => JSX.Element
  required?: boolean
  placeholder?: string
  hint?: string
  showSearchIcon?: boolean
}

function Select<T>({
  ref,
  name,
  options,
  allowCustomValues = false,
  handleChange,
  selected,
  error,
  disabled = false,
  labelText,
  renderLabelPopup,
  required = false,
  placeholder,
  showSearchIcon = false,
  hint
}: Props<T>): ReactElement {
  const renderHint = hasError =>
    hint ? <HintText text={hint} hasError={hasError} /> : null

  const renderDropdown = hasError => (
    <DropdownWithAutosuggest
      options={options}
      onSelect={handleChange}
      selected={selected}
      allowCustomValues={allowCustomValues}
      input={({ getInputProps, isOpen }) => {
        const props = getInputProps({
          ref,
          className: classNames("input_withClearButton", "select", {
            select_open: isOpen && options.length && !selected,
            select_closed: !isOpen && !selected,
            select_withSearchIcon:
              isOpen && options.length && !selected && showSearchIcon
          }),
          name,
          placeholder,
          disabled,
          required
        })

        return (
          <WithClearButton
            visible={!!selected}
            onClear={() => handleChange(null)}
          >
            <InputField mode="text" hasError={hasError} {...props} />
          </WithClearButton>
        )
      }}
    />
  )

  return (
    <WithValidationError error={error}>
      {hasError => (
        <>
          {labelText ? (
            <WithLabel
              name={name}
              error={hasError}
              required={required}
              text={labelText}
              renderPopup={renderLabelPopup}
            >
              {renderDropdown(hasError)}
            </WithLabel>
          ) : (
            renderDropdown(hasError)
          )}
          {renderHint(hasError)}
        </>
      )}
    </WithValidationError>
  )
}

export default Select
