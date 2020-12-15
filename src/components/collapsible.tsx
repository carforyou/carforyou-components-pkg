import React, { ReactNode, FC, useState } from "react"
import classNames from "classnames"

import ArrowDown from "./icons/arrowDown"

interface Props {
  /**
   * False if the element shall be expanded by default
   * default: true
   */
  isInitiallyCollapsed?: boolean
  /**
   * A render prop to customize the clickable title of the collapsible element
   *  - isCollapsed tells you the current state of the collapsible element
   */
  renderToggle: (options: { isCollapsed: boolean }) => ReactNode
  /**
   * Children to be rendered within the collapse component. The elements will be visible when the component is expanded.
   */
  children?: () => ReactNode
  /**
   * Function executed when the collapse state has changed.
   *  - passes the new collapse state as a function parameter
   */
  onCollapseStateChange?: (isCollapsed: boolean) => void
  /**
   * The size of the arrow down icon
   * default: 32
   */
  collapseIconSize?: number
  /**
   * If the element should get a bit transparent on hover
   * default: true
   */
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
