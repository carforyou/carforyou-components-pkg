import React, { ReactChild, FC, ReactElement } from "react"

interface Props<T> {
  placeholder?: string
  getToggleButtonProps: (props: object) => object
  isOpen: boolean
  selectedItem: { name: string; value: T }
  className: string
  disabled: boolean
  children: (
    selected: { name: string; value: T; placeholder?: boolean },
    isOpen: boolean
  ) => ReactChild
}

function ButtonToggle<T>({
  placeholder,
  getToggleButtonProps,
  isOpen,
  selectedItem,
  className,
  children,
  disabled,
}: Props<T>): ReactElement {
  const selected = selectedItem
    ? selectedItem
    : { value: null, name: placeholder, placeholder: true }

  return (
    <button
      {...getToggleButtonProps({ className })}
      data-testid="dropdown-toggle"
      disabled={disabled}
    >
      {children(selected, isOpen)}
    </button>
  )
}

export default ButtonToggle
