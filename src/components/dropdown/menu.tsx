import React, { Component, RefObject } from "react"
import classNames from "classnames"

interface Item<T> {
  value: T
  name: string
  key?: string
  placeholder?: boolean
  preMatch?: string
  match?: string
  postMatch?: string
}

interface Props<T> {
  getItemProps: (props: object) => object
  getMenuProps: (props: object, options?: object) => object
  setHighlightedIndex: (index: number, state?: object) => void
  highlightedIndex?: number
  selectedItem?: Item<T>
  inputValue?: string
  options: Array<Item<T>>
  className?: string
  equal?: (a: T, b: T) => boolean
  innerRef?: RefObject<HTMLUListElement>
}

class Menu<T> extends Component<Props<T>> {
  equal = (a, b) => {
    const defaultEqual = (x, y) => x === y
    return (this.props.equal || defaultEqual)(a, b)
  }

  isObject(value) {
    return value instanceof Object
  }

  hightlightItem = ({ name, preMatch, match, postMatch }: Item<T>) => {
    return match ? (
      <>
        {preMatch}
        <span className="font-bold underline">{match}</span>
        {postMatch}
      </>
    ) : (
      name
    )
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
      innerRef
    } = this.props

    return options.length ? (
      <ul
        {...getMenuProps(
          {
            className: classNames(
              "border border-grey-2 absolute z-dropdownMenu bg-white py-10 cursor-normal max-h-dropdownSM md:max-h-dropdown scrolling-touch overflow-y-scroll custom-scrollbar inset-x-0",
              className
            ),
            onMouseLeave: () => {
              setHighlightedIndex(null)
            }
          },
          { suppressRefError: true }
        )}
        ref={innerRef}
        data-testid="dropdown-options"
      >
        {options.map((item, index) => (
          // tslint:disable-next-line:jsx-key
          <li
            {...getItemProps({
              "data-testid": item.name,
              key: item.key || item.value || `item-${index}`,
              item,
              className: classNames(
                "hover:bg-grey-bright transition-2 px-20 py-10 cursor-pointer",
                {
                  "font-bold text-teal":
                    selectedItem && this.equal(selectedItem.value, item.value),
                  "bg-grey-bright": index === highlightedIndex,
                  "text-grey-3": item.placeholder
                }
              )
            })}
          >
            {this.hightlightItem(item)}
          </li>
        ))}
      </ul>
    ) : null
  }
}

export default Menu
