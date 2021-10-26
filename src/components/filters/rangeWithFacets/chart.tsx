import React from "react"
import classNames from "classnames"

interface Props {
  facets: Record<string, number>
  range: [number, number]
}

const Chart: React.FC<Props> = ({ facets, range }) => {
  if (!facets) return null

  const maxValue = Math.max(...Object.values(facets))
  return (
    <div className="w-12/12 h-118 flex justify-between">
      {Object.keys(facets).map((facet, index) => (
        <div
          key={facet}
          data-testid="facet"
          className={classNames(
            "h-full inline-block flex-grow mx-px",
            index < range[0] || index > range[1] - 1 ? "bg-grey-1" : "bg-teal"
          )}
          style={{
            transitionProperty: "transform",
            transitionDuration: "1s",
            transformOrigin: "bottom",
            transform: `scaleY(${facets[facet] / maxValue})`,
          }}
        />
      ))}
    </div>
  )
}

export default Chart
