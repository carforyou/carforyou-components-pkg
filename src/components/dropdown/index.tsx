import React, { ReactChild, ReactElement, ReactNode } from "react"

import classNames from "classnames"

import BaseDownshift from "./base"
import Menu from "./menu"
import ButtonToggle from "./buttonToggle"

interface Props<T> {
  /**
   * An array of options to render
   */
  options: Array<{ value: T; name: string }>
  /**
   * Render prop to render toggle
   *   - selected is currently selected option or placeholder
   *   - isOpen tells you if the dropdown is opened. Useful if you wnat to render any opened indicators
   */
  toggle: (
    selected: { name: string; value: T; placeholder?: boolean },
    isOpen: boolean
  ) => ReactChild
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
    name: string | ReactNode
    isSelected: boolean
  }) => ReactNode
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
  hasHint?: boolean
}

function Dropdown<T>({
  options,
  selected,
  placeholder,
  equal,
  onSelect = () => null,
  toggle,
  disabled,
  renderOption,
  hasHint,
}: Props<T>): ReactElement {
  return (
    <BaseDownshift
      selected={selected}
      options={options}
      equal={equal}
      onSelect={onSelect}
      filterOptions={(a, _) => a}
      toggle={(downshift) => (
        <ButtonToggle
          {...{
            ...downshift,
            placeholder,
            disabled,
            className: classNames(
              "w-12/12 cursor-pointer transition duration-200 focus:outline-none",
              { "button-filter-input_disabled": disabled }
            ),
          }}
        >
          {toggle}
        </ButtonToggle>
      )}
      menu={(downshift, filteredOptions) => {
        const props = {
          ...downshift,
          ...downshift.getMenuProps({
            //className: "text-left md:position-left-auto shadow-hard md:shadow-soft rounded-none md:rounded-4",
            //className: "shadow-soft rounded-4",
          }),
          options: [
            ...(placeholder
              ? [{ name: placeholder, value: null, placeholder: true }]
              : []),
            ...filteredOptions,
          ],
          renderOption,
          hasHint,
        }

        return <Menu {...props} />
      }}
    />
  )
}

export default Dropdown
export { Props as DropdownProps }
