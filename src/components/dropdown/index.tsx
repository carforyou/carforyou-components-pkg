import React, { FC, ReactChild } from "react"

import classNames from "classnames"

import BaseDownshift from "./base"
import ButtonToggle from "./buttonToggle"

interface Props<T> {
  /**
   * An array of options to render
   */
  options: Array<{ value: T; name: string }>
  /**
   * Render prop to render togggle
   *   - selected is currently selected option or placeholder
   *   - isOpen tells you if the dropdown is opened. Useful if you wnat to render any opened indicators
   */
  toggle: (
    selected: { name: string; value: T; placeholder?: boolean },
    isOpen: boolean
  ) => ReactChild
  /**
   * Render prop to render items menu
   * You can use DropdonwMenu component for that
   */
  menu: (propsGetter: any) => ReactChild
  /**
   * Selection handler
   */
  onSelect: (selection: T) => void
  /**
   * Currently selected option
   */
  selected?: T
  /**
   * Placeholder to show when no option is selected
   */
  placeholder?: string
  /**
   * To disable the dropdown
   */
  disabled?: boolean
  /**
   * Equality checker for options
   *  Defaults to ===
   */
  equal?: (a: T, b: T) => boolean
}

type DropdownType<T = any> = FC<Props<T>>

const Dropdown: DropdownType = ({
  options,
  selected,
  placeholder,
  equal,
  onSelect,
  toggle,
  menu,
  disabled
}) => {
  return (
    <BaseDownshift
      selected={selected}
      options={options}
      equal={equal}
      onSelect={onSelect}
      filterOptions={(a, _) => a}
      toggle={downshift => (
        <ButtonToggle
          {...{
            ...downshift,
            placeholder,
            disabled,
            className: classNames(
              "w-12/12 cursor-pointer transition-2 focus:outline-none",
              { "button-filter-input_disabled": disabled }
            )
          }}
        >
          {toggle}
        </ButtonToggle>
      )}
      menu={(downshift, filteredOptions) => {
        const propsGetter = (props = {}) => ({
          ...downshift,
          options: [
            ...(placeholder
              ? [{ name: placeholder, value: null, placeholder: true }]
              : []),
            ...filteredOptions
          ],
          ...props
        })
        return menu({ getMenuProps: propsGetter })
      }}
    />
  )
}

export default Dropdown
