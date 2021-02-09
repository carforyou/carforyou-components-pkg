import React, { FC, ReactNode } from "react"

import { formatNumber } from "../../lib/formattingHelper"

import Checkbox from "../../components/checkbox"

interface Item {
  value: string | number
  label: string
  renderIcon?: () => ReactNode
}

interface Props {
  name: string
  options: Item[]
  apply: (filtersToApply) => void
  selected?: (string | number)[]
  facet?: { [key: string]: number }
}

const CheckboxFilter: FC<Props> = ({
  name,
  options,
  apply: applyFilters,
  selected = [],
  facet = {},
}) => {
  const values = options.map(({ value }) => value)

  const selectValue = (value) => () => {
    const selectionCopy = [...selected]

    if (selectionCopy.includes(value)) {
      const i = selectionCopy.indexOf(value)
      selectionCopy.splice(i, 1)
    } else {
      selectionCopy.push(value)
    }

    selectionCopy.sort((a, b) =>
      values.indexOf(a) < values.indexOf(b) ? -1 : 1
    )

    applyFilters({ [name]: selectionCopy })
  }

  const renderOption = ({ value, label, renderIcon }: Item) => {
    const isSelected = selected.includes(value)
    const resultsCount = facet[value.toString()] || 0
    const hasFacet = Object.keys(facet).length > 0
    const isDisabled = hasFacet && resultsCount === 0 && !isSelected

    return (
      <div className="w-12/12 -mb-5" key={`filter_${name}_${value}`}>
        <Checkbox
          name={`filter_${name}_${value}`}
          renderLabel={() => (
            <span className="text-base leading-xs flex items-center justify-between">
              {renderIcon ? (
                <span className="flex items-center">
                  {renderIcon()}
                  {label}
                </span>
              ) : (
                label
              )}
              {hasFacet && (
                <span className="inline-block mr-5 text-grey-3 text-sm">
                  ({formatNumber(resultsCount)})
                </span>
              )}
            </span>
          )}
          labelPosition="left"
          onChange={selectValue(value)}
          disabled={isDisabled}
          checked={isSelected}
        />
      </div>
    )
  }

  return <div className="flex flex-wrap mb-5">{options.map(renderOption)}</div>
}

export default CheckboxFilter
