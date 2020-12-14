import React, { ReactNode, FC, useState } from "react"
import classNames from "classnames"

import ArrowDown from "./icons/arrowDown"

interface Props {
  isInitiallyCollapsed?: boolean
  renderToggle: (options: { isCollapsed: boolean }) => ReactNode
  children?: () => ReactNode
  onCollapseStateChange?: (isCollapsed: boolean) => void
  collapseIconSize?: number
  opacityOnHover?: boolean
}

const Collapsible: FC<Props> = ({
  renderToggle,
  isInitiallyCollapsed = true,
  children,
  onCollapseStateChange,
  collapseIconSize = 32,
  opacityOnHover = true,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed)

  return (
    <>
      <a
        className={classNames("flex items-center cursor-pointer", {
          "hover:opacity-100": !opacityOnHover,
        })}
        onClick={() => {
          onCollapseStateChange ? onCollapseStateChange(!isCollapsed) : null
          setIsCollapsed(!isCollapsed)
        }}
        data-collapsed={isCollapsed}
      >
        <div className="flex w-12/12 items-center">
          {renderToggle({ isCollapsed })}
          <ArrowDown
            height={collapseIconSize}
            width={collapseIconSize}
            className={isCollapsed ? null : "rotate-180 transform"}
          />
        </div>
      </a>
      {isCollapsed ? null : children()}
    </>
  )
}

export default Collapsible
