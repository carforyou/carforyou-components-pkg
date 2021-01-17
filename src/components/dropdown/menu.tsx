import React, { Component, ReactNode, Ref } from "react"
import { GetItemPropsOptions, GetMenuPropsOptions } from "downshift"
import classNames from "classnames"

import Spinner from "../spinner"
import { wrapLink } from "../../lib/buttonHelper"

interface Item<T> {
  value: T | { customValue: T }
  name: string
  key?: string
  placeholder?: boolean
  preMatch?: string
  match?: string
  postMatch?: string
}

interface Props<T> {
  getItemProps: (props: GetItemPropsOptions<Item<T>>) => Record<string, unknown>
  getMenuProps: (
    props: GetMenuPropsOptions,
    options?: Record<string, unknown>
  ) => Record<string, unknown>
  setHighlightedIndex: (index: number, state?: Record<string, unknown>) => void
  highlightedIndex?: number
  selectedItem?: Item<T>
  inputValue?: string
  options: Array<Item<T>>
  className?: string
  equal?: (a: T, b: T) => boolean
  innerRef?: Ref<HTMLUListElement>
  renderOption?: (option: {
    name: string | ReactNode
    value: T
    isSelected: boolean
  }) => ReactNode
  noResults?: string
  isFetching?: boolean
}

const isCustomValue = (value): boolean => {
  if (value && typeof value === "object") {
    return "customValue" in value
  }
  return false
}

const hightlightItem = <T extends unknown>({
  name,
  preMatch,
  match,
  postMatch,
  value,
}: Item<T>): ReactNode => {
  return match ? (
    <>
      {preMatch}
      <span
        className={classNames("font-bold underline", {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          select_withQuotes: isCustomValue(value),
        })}
      >
        {match}
      </span>
      {postMatch}
    </>
  ) : (
    name
  )
}

class Menu<T> extends Component<Props<T>> {
  equalWrapper = (a, b) => {
    const { equal } = this.props
    const defaultEqual = (x, y) => x === y
    return (equal || defaultEqual)(a, b)
  }
  render = () => {
    const {
      getItemProps,
      getMenuProps,
      setHighlightedIndex,
      highlightedIndex,
      selectedItem,
      options,
      className,
      innerRef,
      noResults,
      inputValue,
      isFetching,
    } = this.props

    let { renderOption } = this.props
    if (!renderOption) {
      renderOption = ({ name }) => name
    }

    const padding = "px-20 py-10"
    return options.length ? (
      <ul
        {...getMenuProps(
          {
            className: classNames(
              "border border-grey-3 absolute z-dropdownMenu bg-white cursor-normal inset-x-0 list-reset scrolling-touch overflow-y-scroll custom-scrollbar max-h-dropdownSM md:max-h-dropdown py-10 shadow-soft rounded-4",
              className
            ),
            onMouseLeave: () => {
              setHighlightedIndex(null)
            },
          },
          { suppressRefError: true }
        )}
        ref={innerRef}
        data-testid="dropdown-options"
      >
        {options.map((item, index) => {
          const isSelected =
            selectedItem && this.equalWrapper(selectedItem.value, item.value)

          const { clonedElement, isWrapped } = wrapLink(
            renderOption({
              value: item.value as T,
              name: hightlightItem(item),
              isSelected,
            }),
            padding
          )

          return (
            // eslint-disable-next-line react/jsx-key
            <li
              data-testid={item.name}
              {...getItemProps({
                key: item.key || item.value?.toString() || `item-${index}`,
                item,
                className: classNames(
                  "hover:bg-grey-bright transition duration-200 cursor-pointer",
                  {
                    "font-bold text-teal": isSelected,
                    "bg-grey-bright": index === highlightedIndex,
                    "text-grey-4": item.placeholder,
                    "text-teal": isCustomValue(item.value),
                    [padding]: !isWrapped,
                  }
                ),
              })}
            >
              {clonedElement}
            </li>
          )
        })}
      </ul>
    ) : inputValue && noResults ? (
      <div
        className={classNames(
          "p-20 text-grey-4 border border-grey-2 absolute z-dropdownMenu bg-white cursor-normal inset-x-0 shadow-soft rounded-4",
          className
        )}
      >
        {isFetching ? (
          <div className="text-salmon w-12/12 flex justify-center">
            <Spinner />
          </div>
        ) : (
          noResults
        )}
      </div>
    ) : null
  }
}
export default Menu
