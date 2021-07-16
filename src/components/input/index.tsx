import React, {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  KeyboardEvent,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
} from "react"
import lodashDebounce from "lodash.debounce"
import classNames from "classnames"

import InputField from "./inputField"
import WithValidationError from "../fieldHelpers/withValidationError"
import WithLabel from "../fieldHelpers/withLabel"
import WithFloatingLabel from "../fieldHelpers/withFloatingLabel"
import WithClearButton from "../fieldHelpers/withClearButton"
import HintText from "../fieldHelpers/hintText"
interface InputProps {
  name: string
  value: string | number
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  autoFocus?: boolean
  hasClearButton?: boolean
  hasSearchIcon?: boolean
  mode: "text" | "numeric" | "decimal" | "tel" | "email"
  onChange: (
    e:
      | ChangeEvent<HTMLInputElement>
      | {
          target: {
            name: string
            value: string | number
            cleared: boolean
          }
        }
  ) => void
  onBlur?: (e: FocusEvent) => void
  onKeyDown?: (e: KeyboardEvent) => void
  onFocus?: (e: FocusEvent) => void
  step?: number
  min?: number
  max?: number
  position?: "left" | "right"
  debounce?: number
  autoComplete?: string
}

interface PopupLabelProps extends InputProps {
  labelText?: string
  renderLabelPopup?: () => JSX.Element
  required?: boolean
}

interface FloatingLabelProps extends InputProps {
  labelText?: string
  floatingLabel?: boolean
}

type Props = PopupLabelProps | FloatingLabelProps

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      value,
      placeholder,
      labelText,
      error,
      hint,
      disabled = false,
      hasClearButton = false,
      hasSearchIcon = false,
      autoFocus = false,
      mode,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      step,
      min,
      max,
      position,
      debounce,
      autoComplete,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef()
    const required =
      "floatingLabel" in rest || ("required" in rest ? rest.required : null)
    const labelProps =
      "floatingLabel" in rest
        ? { floating: rest.floatingLabel }
        : "renderLabelPopup" in rest || "required" in rest
        ? { renderPopup: rest.renderLabelPopup, required }
        : {}
    const clearButtonProps = {
      visible: !!value,
      disabled,
      onClear: () => {
        ;(inputRef.current as HTMLInputElement).value = ""
        onChange({ target: { name, value: "", cleared: true } })
      },
    }

    const debouncedChangeHandler = useMemo(() => {
      if (onChange) {
        return lodashDebounce(onChange, debounce)
      }
      return null
    }, [onChange, debounce])

    useEffect(() => {
      return () => {
        debouncedChangeHandler?.cancel()
      }
    }, [debouncedChangeHandler])

    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(inputRef.current)
        } else {
          const mutableRefObject = ref as MutableRefObject<HTMLInputElement>
          mutableRefObject.current = inputRef.current
        }
      }
    }, [ref])

    const renderInput = (hasError) => (
      <InputField
        ref={inputRef}
        name={name}
        value={value || ""}
        placeholder={placeholder || ""}
        className={classNames("w-12/12", {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          input_withClearButton: hasClearButton,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "select_withSearchIcon bg-right bg-transparent bg-no-repeat": hasSearchIcon,
          "floatingLabel-input": labelProps.floating,
          "input_left hover:z-1 hover:transition hover:duration-200 focus:z-1":
            position === "left",
          "input_right -ml-1 hover:z-1 hover:transition hover:duration-200 focus:z-1":
            position === "right",
        })}
        mode={mode}
        hasError={hasError}
        disabled={disabled}
        required={required}
        onChange={
          debounce
            ? (e) => {
                e.persist()
                debouncedChangeHandler(e)
              }
            : onChange
        }
        onFocus={onFocus}
        onKeyDown={(event) => {
          if (event.keyCode === 13) {
            debouncedChangeHandler?.cancel()
          }
          if (onKeyDown) {
            onKeyDown(event)
          }
        }}
        onBlur={(event) => {
          debouncedChangeHandler?.cancel()
          if (onBlur) {
            onBlur(event)
          }
        }}
        autoFocus={autoFocus}
        step={step}
        min={min}
        max={max}
        debounce={debounce}
        autoComplete={autoComplete}
      />
    )

    const renderField = (hasError) =>
      hasClearButton ? (
        <WithClearButton {...clearButtonProps}>
          {renderInput(hasError)}
        </WithClearButton>
      ) : (
        renderInput(hasError)
      )

    const renderFloatingLabelField = (hasError) => (
      <WithFloatingLabel
        name={name}
        error={hasError}
        text={labelText}
        {...labelProps}
      >
        {renderInput(hasError)}
      </WithFloatingLabel>
    )

    const renderWithfloatingLabel = (hasError) =>
      hasClearButton ? (
        <WithClearButton {...clearButtonProps}>
          {renderFloatingLabelField(hasError)}
        </WithClearButton>
      ) : (
        renderFloatingLabelField(hasError)
      )

    const renderWithLabel = (hasError) => (
      <WithLabel name={name} error={hasError} text={labelText} {...labelProps}>
        {renderField(hasError)}
      </WithLabel>
    )

    const renderHint = (hasError) =>
      hint ? <HintText text={hint} hasError={hasError} /> : null

    return (
      <div className="w-12/12 focus-within:text-teal">
        <WithValidationError error={error}>
          {(hasError) => (
            <>
              {labelText
                ? labelProps.floating
                  ? renderWithfloatingLabel(hasError)
                  : renderWithLabel(hasError)
                : renderField(hasError)}
              {renderHint(hasError)}
            </>
          )}
        </WithValidationError>
      </div>
    )
  }
)

export default Input
export {
  Props as InputProps,
  InputProps as BaseInputProps,
  PopupLabelProps,
  FloatingLabelProps,
}
