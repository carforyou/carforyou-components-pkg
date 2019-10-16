import React, { ReactElement, useState } from "react"

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
  onSelect: (selection: T) => void
  /**
   * `small` variant has 8px vertical padding, default has 16px
   */
  small?: boolean
  disabled?: boolean
}

function SegmentedControl<T>({
  options,
  initialSelection,
  onSelect,
  small = false,
  disabled = false
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
            {name}
          </Button>
        )
      })}
    </div>
  )
}

export default SegmentedControl
