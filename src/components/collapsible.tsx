import React, { FC, ReactNode, useEffect, useState } from "react"
import classNames from "classnames"

import ArrowDownM from "./icons/arrowDownM"
interface Props {
  /**
   * False if the element shall be expanded by default
   */
  isInitiallyCollapsed?: boolean
  /**
   * A render prop to customize the clickable title of the collapsible element
   *  - isCollapsed tells you the current state of the collapsible element
   */
  renderToggle: (isCollapsed: boolean) => ReactNode
  /**
   * Children to be rendered within the collapsible component. The elements will be visible when the component is expanded.
   */
  children?: () => ReactNode
  /**
   * Function executed when the collapsible state has changed.
   *  - passes the new collapsible state as a function parameter
   */
  onChange?: (isCollapsed: boolean) => void
  /**
   * If the element should get transparent on hover
   */
  opacityOnHover?: boolean
  /**
   * Forces the collapsible to expand
   *   this can be used to allow control of the collapsed state outside of the component
   *   an example use-case is controlling the focus of children collapsibles by the parent
   *   component to ensure that only one is open at the time
   */
  forceExpand?: boolean
}

const Collapsible: FC<Props> = ({
  renderToggle,
  isInitiallyCollapsed = true,
  children,
  onChange,
  opacityOnHover = true,
  forceExpand = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed)

  useEffect(() => {
    setIsCollapsed(forceExpand)
  }, [forceExpand])

  return (
    <>
      <a
        className={classNames("flex items-center cursor-pointer", {
          "hover:opacity-100": !opacityOnHover,
        })}
        onClick={() => {
          onChange && onChange(!isCollapsed)
          setIsCollapsed(!isCollapsed)
        }}
        data-collapsed={isCollapsed}
      >
        <div className="flex w-12/12 items-center">
          {renderToggle(isCollapsed)}
          <ArrowDownM className={isCollapsed ? null : "rotate-180 transform"} />
        </div>
      </a>
      {isCollapsed ? null : children()}
    </>
  )
}

export default Collapsible
export { Props as CollapsibleProps }
