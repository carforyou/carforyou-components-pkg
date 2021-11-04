import React from "react"
import classNames from "classnames"

import { RangeElement } from "./rangeFilterScale"

interface Props {
  facets?: Record<string, number>
  scale: RangeElement[]
  range: [number, number]
}

const Chart: React.FC<Props> = ({ facets, scale, range }) => {
  if (!facets) return null

  const maxValue = Math.max(...Object.values(facets))
  return (
    <div className="w-12/12 flex justify-between h-rangeFilterChart">
      {scale.map((scaleElement, index) => (
        <div
          key={scaleElement.key}
          data-testid="facet"
          className={classNames(
            "h-full inline-block flex-grow mx-px",
            index < range[0] || index > range[1] - 1 ? "bg-grey-1" : "bg-teal"
          )}
          style={{
            transitionProperty: "transform",
            transitionDuration: "1s",
            transformOrigin: "bottom",
            transform: `scaleY(${
              maxValue > 0 ? facets[scaleElement.key] / maxValue : 0
            })`,
          }}
        />
      ))}
    </div>
  )
}

export default Chart
