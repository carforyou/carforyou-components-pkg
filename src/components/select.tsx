import React, { forwardRef } from "react"
import classNames from "classnames"

import DropdownWithAutosuggest, {
  DropdownWithAutosuggestProps,
} from "../components/dropdown/withAutosuggest"
import Dropdown, { DropdownProps } from "./dropdown/index"

import WithValidationError from "./fieldHelpers/withValidationError"
import WithLabel from "./fieldHelpers/withLabel"
import WithClearButton from "./fieldHelpers/withClearButton"
import HintText from "./fieldHelpers/hintText"
import InputField from "./input/inputField"

interface BaseProps<T> {
  name: string
  options: Array<{ name: string; value: T | { customValue: T } }>
  handleChange: (value: T) => void
  selected?: T
  error?: string
  disabled?: boolean
  labelText?: string
  renderLabelPopup?: () => JSX.Element
  required?: boolean
  placeholder?: string
  hint?: string
  position?: "left" | "right"
  skipContainer?: boolean
}

interface AutosuggestSelect<T> extends BaseProps<T> {
  fetchSuggestions?: (
    value: string
  ) => Promise<Array<{ value: T; name: string }>>
  allowCustomValues?: boolean
  showSearchIcon?: boolean
  withAutosuggest: true
  inputMode?: "text" | "numeric"
  noResultsText?: string
  isFetching?: boolean
}

interface SimpleSelect<T> extends BaseProps<T> {
  withAutosuggest: false
}

type Props<T> = AutosuggestSelect<T> | SimpleSelect<T>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Select = forwardRef<HTMLInputElement, Props<any>>(
  (
    {
      name,
      options,
      handleChange,
      selected,
      error,
      disabled = false,
      labelText,
      renderLabelPopup,
      required = false,
      placeholder,
      hint,
      position,
      skipContainer = false,
      ...rest
    },
    ref
  ) => {
    const baseProps = {
      options,
      onSelect: handleChange,
      selected,
      hasHint: hint ? true : false,
      //menuClassName: hint ? "-mt-selectWithHintMenu" : "-mt-selectMenu",
    }

    const dropdownProps =
      "withAutosuggest" in rest && rest.withAutosuggest
        ? {
            ...baseProps,
            fetchSuggestions: rest.fetchSuggestions,
            allowCustomValues: rest.allowCustomValues,
            noResults: rest.noResultsText,
            isFetching: rest.isFetching,
            input: ({ getInputProps, isOpen }) => {
              const props = getInputProps({
                ref,
                className: classNames(
                  "input_withClearButton",
                  {
                    input_left: position === "left",
                    input_right: position === "right",
                  },
                  "select",
                  selectClasses(isOpen)
                ),
                name,
                mode: rest.inputMode || "text",
                placeholder,
                disabled,
                required,
              })

              return (
                <WithValidationError error={error}>
                  {(hasError) => (
                    <>
                      {labelText ? (
                        <WithLabel
                          name={name}
                          error={hasError}
                          required={required}
                          text={labelText}
                          renderPopup={renderLabelPopup}
                        >
                          {renderInput(hasError, props)}
                        </WithLabel>
                      ) : (
                        renderInput(hasError, props)
                      )}
                      {renderHint(hasError)}
                    </>
                  )}
                </WithValidationError>
              )
            },
          }
        : {
            ...baseProps,
            placeholder,
            disabled,
            toggle: (downshift, isOpen) => {
              const toggleProps = {
                className: classNames(
                  "w-12/12 text-left select-toggle input_withClearButton",
                  {
                    input_left: position === "left",
                    input_right: position === "right",
                  },
                  "select",
                  selectClasses(isOpen),
                  {
                    "select-toggle_disabled": disabled,
                    "text-grey-3": downshift.placeholder,
                  }
                ),
                children: downshift.name,
              }

              return (
                <WithValidationError error={error}>
                  {(hasError) => (
                    <>
                      {labelText ? (
                        <WithLabel
                          name={name}
                          error={hasError}
                          required={required}
                          text={labelText}
                          renderPopup={renderLabelPopup}
                        >
                          {renderToggle(hasError, toggleProps)}
                        </WithLabel>
                      ) : (
                        renderToggle(hasError, toggleProps)
                      )}
                      {renderHint(hasError)}
                    </>
                  )}
                </WithValidationError>
              )
            },
          }

    const selectClasses = (isOpen) => {
      const showSearchIcon =
        "withAutosuggest" in rest && rest.withAutosuggest && rest.showSearchIcon
      const showOpenedIcon =
        isOpen &&
        (options.length ||
          ("withAutosuggest" in rest &&
            rest.withAutosuggest &&
            rest.fetchSuggestions))

      return {
        select_open: showOpenedIcon && !selected,
        select_closed: !isOpen && !selected,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        select_withSearchIcon: showOpenedIcon && !selected && showSearchIcon,
      }
    }

    const renderHint = (hasError) =>
      hint ? <HintText text={hint} hasError={hasError} /> : null

    const renderInput = (hasError, props) => (
      <>
        <WithClearButton
          disabled={disabled}
          visible={!!selected}
          onClear={() => handleChange(null)}
        >
          <InputField hasError={hasError} {...props} />
        </WithClearButton>
      </>
    )

    const renderToggle = (hasError, props) => (
      <>
        <WithClearButton
          disabled={disabled}
          onClear={() => handleChange(null)}
          visible={!!selected}
        >
          <div {...props} data-valid={!hasError} />
        </WithClearButton>
      </>
    )

    const renderDropdown = () => (
      <>
        {"withAutosuggest" in rest && rest.withAutosuggest ? (
          <DropdownWithAutosuggest
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(dropdownProps as DropdownWithAutosuggestProps<any>)}
          />
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <Dropdown {...(dropdownProps as DropdownProps<any>)} />
        )}
      </>
    )

    return skipContainer ? (
      renderDropdown()
    ) : (
      <div className="w-12/12 relative">{renderDropdown()}</div>
    )
  }
)

export default Select
