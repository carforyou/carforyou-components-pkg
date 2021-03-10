import React, { FC, ReactNode, useEffect, useState } from "react"
import classNames from "classnames"

import ArrowDownM from "./icons/arrowDownM"
interface Props {
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
   * Forces the collapsible to collapse
   *   this can be used to allow control of the collapsed state outside of the component
   *   an example use-case is controlling the focus of children collapsibles by the parent
   *   component to ensure that only one is open at the time
   */
  forceCollapse?: boolean
  /** Makes sure that the content is always in the DOM */
  alwaysRender?: boolean
  /** Teal color chevron */
  tealChevron?: boolean
  /** Chevron position on the top for mobile and center for desktop */
  mobileChevron?: boolean
}

const Collapsible: FC<Props> = ({
  renderToggle,
  children,
  onChange,
  opacityOnHover = true,
  forceCollapse = true,
  alwaysRender = false,
  tealChevron = false,
  mobileChevron = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(forceCollapse)

  useEffect(() => {
    setIsCollapsed(forceCollapse)
  }, [forceCollapse])

  const arrowColor = tealChevron ? "text-teal" : ""
  const chevronPosition = mobileChevron
    ? "items-start lg:items-center"
    : "items-center"

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
        <div className={`flex w-12/12 ${chevronPosition}`}>
          {renderToggle(isCollapsed)}
          <ArrowDownM
            className={
              isCollapsed
                ? `${arrowColor}`
                : `rotate-180 transform ${arrowColor}`
            }
          />
        </div>
      </a>
      {alwaysRender ? (
        <div className={isCollapsed ? "hidden" : "block"}>{children()}</div>
      ) : isCollapsed ? null : (
        children()
      )}
    </>
  )
}

export default Collapsible
export { Props as CollapsibleProps }
