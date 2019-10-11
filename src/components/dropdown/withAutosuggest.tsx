import React, {
  Component,
  ReactChild,
  FormEvent,
  KeyboardEvent,
  RefObject,
  createRef
} from "react"
import classNames from "classnames"

import { GetInputPropsOptions } from "downshift"
import BaseDownshift from "./base"

import Menu from "./menu"

interface InputProps {
  getInputProps: <O>(options?: O) => O & GetInputPropsOptions
  isOpen: boolean
}

interface Props<T> {
  selected?: T
  options: Array<{ value: T; name: string }>
  onSelect: (selection: T | { customValue: string }) => void
  equal?: (a: T, b: T) => boolean
  input: (propGetter: InputProps) => ReactChild
  allowCustomValues?: boolean
  trimInput?: boolean
  onTypeAhead?: (value: string) => void
}

class DropdownWithAutosuggest<T> extends Component<Props<T>> {
  menuRef: RefObject<HTMLUListElement> = createRef()
  hasCustomValues = this.props.allowCustomValues || false

  filterOptions = (options, text) => {
    if (!text) {
      return options
    }

    const regex = new RegExp(text, "i")

    const matching = options
      .filter(el => el.name.toLowerCase().includes(text.toLowerCase()))
      .map(el => {
        const copy = { ...el }
        const matchData = regex.exec(el.name)

        if (matchData) {
          copy.preMatch = copy.name.substring(0, matchData.index)
          copy.match = copy.name.substring(
            matchData.index,
            matchData.index + text.length
          )
          copy.postMatch = copy.name.substring(matchData.index + text.length)
        }
        return copy
      })

    const notMatching = options.filter(
      el => !el.name.toLowerCase().includes(text.toLowerCase())
    )

    return matching.concat(notMatching)
  }

  equalWrapper = (a, b) => {
    const defaultEqual = (x, y) => x === y

    if (
      this.hasCustomValues &&
      a instanceof Object &&
      a.customValue &&
      b instanceof Object &&
      b.customValue
    ) {
      return a.customValue === b.customValue
    } else {
      return (this.props.equal || defaultEqual)(a, b)
    }
  }

  renderToggle = downshift => {
    const { getInputProps, isOpen, highlightedIndex, selectedItem } = downshift
    const { input, options, onSelect } = this.props

    const propGetter = userProps => {
      const { className, name, ...rest } = userProps
      const isDisabled =
        !this.props.onTypeAhead &&
        !this.hasCustomValues &&
        !this.props.options.length

      return getInputProps({
        "data-testid": name,
        "aria-labelledby": "",
        spellCheck: "false",
        autoComplete: "off",
        autoCorrect: "off",
        disabled: isDisabled,
        className: classNames(
          className,
          "cursor-default w-12/12 overflow-hidden",
          {
            dropdown_disabled: isDisabled
          }
        ),
        name,
        id: name,
        onFocus: () => downshift.openMenu(),
        onClick: () => downshift.openMenu(),
        onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
          const target = event.target as HTMLInputElement
          if (event.keyCode === 27 || event.keyCode === 13) {
            target.blur()
          }
        },
        onBlur: (event: FormEvent<HTMLInputElement>) => {
          if (highlightedIndex || highlightedIndex === 0) {
            downshift.selectHighlightedItem()
            return
          }

          const target = event.target as HTMLInputElement
          if (!target.value) {
            downshift.clearSelection(() => onSelect(null))
            return
          }

          const matchingOption = options.find(
            option => option.name === target.value
          )

          if (matchingOption) {
            downshift.selectItem(matchingOption)
            return
          }

          if (this.hasCustomValues) {
            downshift.selectItem({
              name: target.value,
              value: {
                customValue: target.value
              }
            })
          } else {
            downshift.selectItem(selectedItem)
          }
        },
        onChange: (event: FormEvent<HTMLInputElement>) => {
          const target = event.target as HTMLInputElement
          let value = target.value

          if (this.props.trimInput) {
            value = value.trimLeft()
            target.value = value
          }

          if (this.props.onTypeAhead) {
            this.props.onTypeAhead(value)
          }

          if (this.menuRef.current && this.menuRef.current.scrollTo) {
            this.menuRef.current.scrollTo(0, 0)
          }

          if (value) {
            const item = options.find(option =>
              option.name.toLowerCase().startsWith(value.toLowerCase())
            )
            if (item) {
              downshift.setHighlightedIndex(0)
              return
            }
          }

          downshift.setState({ highlightedIndex: null })
        },
        ...rest
      })
    }

    return input({ getInputProps: propGetter, isOpen })
  }

  render = () => {
    const { options, selected, onSelect } = this.props

    return (
      <BaseDownshift
        selected={selected}
        options={options}
        equal={this.equalWrapper}
        onSelect={onSelect}
        filterOptions={this.filterOptions}
        toggle={this.renderToggle}
        menu={(downshift, filteredOptions) => {
          return (
            <Menu
              {...{
                ...downshift,
                innerRef: this.menuRef,
                options: filteredOptions,
                className: "shadow-soft rounded-4 -mt-dropdownMenu",
                equal: this.equalWrapper
              }}
            />
          )
        }}
      />
    )
  }
}

export default DropdownWithAutosuggest
