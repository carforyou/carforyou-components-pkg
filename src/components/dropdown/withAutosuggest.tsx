import React, {
  ReactChild,
  FormEvent,
  KeyboardEvent,
  Ref,
  useRef,
  InputHTMLAttributes,
  ReactElement,
  useState
} from "react"
import classNames from "classnames"
import { GetInputPropsOptions } from "downshift"

import { getClosestElement } from "../../lib/elementsHelper"
import { scrollIntoViewIfMobile } from "../../lib/scrollHelper"

import BaseDownshift from "./base"

import Menu from "./menu"

interface InputProps {
  getInputProps: <O extends GetInputPropsOptions>(
    options?: O
  ) => InputHTMLAttributes<HTMLInputElement>
  isOpen: boolean
}

interface Props<T> {
  /**
   * An array of options
   */
  options: Array<{ value: T; name: string }>
  /**
   * Render prop to render the text input
   */
  input: (propGetter: InputProps) => ReactChild
  /**
   * Selection event handler
   */
  onSelect: (selection: T | { customValue: string }) => void
  /**
   * Initially selected value
   */
  selected?: T
  /**
   * Equality check on option values.
   * Defaults to ===
   */
  equal?: (a: T, b: T) => boolean
  /**
   * Whether custom values should be allowed
   * If set to true user input would be passed as a value to the event handler if no matching option is found
   */
  allowCustomValues?: boolean
  /**
   * If set to true input value will be trimmed before processing
   */
  trimInput?: boolean
  /**
   * An event handler to dynamically generate suggestion list
   */
  onTypeAhead?: (value: string) => void
  menuClassName?: string
  noResults?: string
}

const filterOptions = noResults => (allOptions, text) => {
  if (!text) {
    return allOptions
  }

  const specialChars = /[-\/\\^$*+?.()|[\]{}]/g
  const cleanedText = text.replace(specialChars, "\\$&")
  const regex = new RegExp(cleanedText, "i")
  const startsWith = new RegExp(`^${cleanedText}`, "i")

  const matching = allOptions
    .filter(el => el.name.toLowerCase().includes(text.toLowerCase()))
    .sort((a, b) => {
      if (startsWith.test(a.name) && startsWith.test(b.name)) {
        return 0
      }

      if (startsWith.test(a.name)) {
        return -1
      }

      if (startsWith.test(b.name)) {
        return 1
      }

      return 0
    })
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

  return matching.length ? matching : noResults ? matching : allOptions
}

function DropdownWithAutosuggest<T>({
  options,
  selected,
  onSelect,
  equal,
  input,
  onTypeAhead,
  trimInput,
  allowCustomValues = false,
  menuClassName,
  noResults
}: Props<T>): ReactElement {
  const menuRef: Ref<HTMLUListElement> = useRef()
  const [inputValue, setInputValue] = useState("")
  const [isFetching, setIsFetching] = useState(false)

  const equalWrapper = (a, b) => {
    const defaultEqual = (x, y) => x === y

    if (
      allowCustomValues &&
      a instanceof Object &&
      a.customValue &&
      b instanceof Object &&
      b.customValue
    ) {
      return a.customValue === b.customValue
    } else {
      return (equal || defaultEqual)(a, b)
    }
  }

  const renderToggle = downshift => {
    const { getInputProps, isOpen, highlightedIndex, selectedItem } = downshift

    const propGetter = userProps => {
      const { className, name, ...rest } = userProps
      const isDisabled = !onTypeAhead && !allowCustomValues && !options.length

      return getInputProps({
        "data-testid": name,
        "aria-labelledby": "",
        spellCheck: "false",
        autoComplete: "off",
        autoCorrect: "off",
        disabled: isDisabled,
        className: classNames(
          className,
          "cursor-text w-12/12 overflow-hidden",
          {
            dropdown_disabled: isDisabled
          }
        ),
        name,
        id: name,
        onFocus: e => {
          e.persist()
          downshift.openMenu(() => {
            const closestSection = getClosestElement(
              e.target,
              "[data-closestpoint]"
            )
            scrollIntoViewIfMobile(closestSection)
          })
        },
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

          const matchingOption = options.find(option =>
            option.name.toLowerCase().startsWith(target.value.toLowerCase())
          )
          if (matchingOption) {
            downshift.selectItem(matchingOption)
            return
          }

          if (allowCustomValues) {
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
        onChange: async (event: FormEvent<HTMLInputElement>) => {
          const target = event.target as HTMLInputElement
          let value = target.value

          if (trimInput) {
            value = value.trimLeft()
            target.value = value
          }
          setInputValue(value)
          if (onTypeAhead) {
            setIsFetching(true)
            await onTypeAhead(value)
            setIsFetching(false)
          }

          if (menuRef.current && menuRef.current.scrollTo) {
            menuRef.current.scrollTo(0, 0)
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

  return (
    <BaseDownshift
      selected={selected}
      options={options}
      equal={equalWrapper}
      onSelect={onSelect}
      filterOptions={filterOptions(noResults)}
      toggle={renderToggle}
      menu={(downshift, filteredOptions) => {
        return (
          <Menu
            {...{
              ...downshift,
              innerRef: menuRef,
              options: filteredOptions,
              className: classNames("shadow-soft rounded-4", menuClassName),
              equal: equalWrapper,
              noResults,
              inputValue,
              isFetching
            }}
          />
        )
      }}
    />
  )
}

export default DropdownWithAutosuggest
export { Props as DropdownWithAutosuggestProps }
