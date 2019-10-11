import React, { Component, ReactChild } from "react"

import classNames from "classnames"

import BaseDownshift from "./base"
import ButtonToggle from "./buttonToggle"

interface Props<T> {
  selected?: T
  placeholder?: string
  options: Array<{ value: T; name: string }>
  disabled?: boolean
  onSelect: (selection: T) => void
  equal?: (a: T, b: T) => boolean
  toggle: (
    selected: { name: string; value: T; placeholder?: boolean },
    isOpen: boolean
  ) => ReactChild
  menu: (propsGetter: any) => ReactChild
}

class Dropdown<T> extends Component<Props<T>> {
  render = () => {
    const {
      options,
      selected,
      placeholder,
      equal,
      onSelect,
      toggle,
      menu,
      disabled
    } = this.props

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
}

export default Dropdown
