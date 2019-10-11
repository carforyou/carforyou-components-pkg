import React, { FC, ReactChild } from "react"

import Downshift, { ControllerStateAndHelpers } from "downshift"

import Overlay from "./overlay"

interface Item<T> {
  value: T
  name: string
}

interface Props<T> {
  selected?: T
  options: Array<Item<T>>
  filterOptions: (options: Array<Item<T>>, name?: string) => Array<Item<T>>
  onSelect: (selection: T) => void
  equal?: (a: T, b: T) => boolean
  toggle: (downshift: ControllerStateAndHelpers<Item<T>>) => ReactChild
  menu: (
    downshift: ControllerStateAndHelpers<Item<T>>,
    filteredOptions: Array<Item<T>>
  ) => ReactChild
}

type BaseDropdownType<T = any> = FC<Props<T>>

const BaseDropdown: BaseDropdownType = ({
  options,
  selected,
  onSelect,
  toggle,
  menu,
  filterOptions,
  equal
}) => {
  const equalWrapper = (a, b) => {
    const defaultEqual = (x, y) => x === y
    return (equal || defaultEqual)(a, b)
  }

  const selectedItem = selected
    ? options.find(option => equalWrapper(option.value, selected))
    : null

  return (
    <Downshift
      itemToString={item => (item ? item.name : "")}
      initialSelectedItem={selectedItem}
      onChange={item => onSelect(item && item.value)}
      key={selectedItem && selectedItem.name}
    >
      {downshift => {
        const { isOpen, inputValue } = downshift

        return (
          <div className="w-12/12" aria-labelledby="">
            {toggle(downshift)}
            {isOpen ? (
              <>
                <Overlay handleClick={downshift.closeMenu} />
                {menu(downshift, filterOptions(options, inputValue))}
              </>
            ) : null}
          </div>
        )
      }}
    </Downshift>
  )
}

export default BaseDropdown
