import React, { ReactElement, ReactNode, useState } from "react"

import Button from "./button"

interface Props<T> {
  /**
   * An array of options to show
   */
  options: Array<{ value: T; name: string }>
  /**
   * Currently selected value
   * Defaults to first option
   */
  initialSelection?: T
  /**
   * Selection handler
   */
  onSelect?: (selection: T) => void
  /**
   * A render prop to customize single option rendering
   * default: ({ name }) => name
   */
  renderOption?: (option: {
    value: T
    name: string
    isSelected: boolean
  }) => ReactNode
  /**
   * `small` variant has 8px vertical padding, default has 16px
   */
  small?: boolean
  disabled?: boolean
  growing?: boolean
}

function SegmentedControl<T>({
  options,
  initialSelection,
  onSelect = () => null,
  renderOption = ({ name }) => name,
  small = false,
  disabled = false,
  growing = false,
}: Props<T>): ReactElement {
  const [selectedValue, updateSelected] = useState(
    (options.find(({ value }) => value === initialSelection) || options[0])
      .value
  )
  const lastOption = options.length - 1

  return (
    <div className="flex w-12/12">
      {options.map(({ name, value }, index) => {
        const selected = value === selectedValue
        return (
          <Button
            key={`option-${name}-${index}`}
            selected={selected}
            disabled={disabled}
            small={small}
            growing={growing}
            position={
              index === 0 ? "left" : index === lastOption ? "right" : "middle"
            }
            onClick={() => {
              if (selected) {
                return
              }
              updateSelected(value)
              onSelect(value)
            }}
          >
            {renderOption({ name, value, isSelected: selected })}
          </Button>
        )
      })}
    </div>
  )
}

export default SegmentedControl
export { Props as SegmentedControlProps }
