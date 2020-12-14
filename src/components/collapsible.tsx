import React, { ReactNode, FC, useState } from "react"

import ArrowDownM from "./icons/arrowDownMCrop"

interface Props {
  isInitiallyCollapsed?: boolean
  renderToggle: (options: { isCollapsed: boolean }) => ReactNode
  children?: () => ReactNode
  onCollapseStateChange?: (isCollapsed: boolean) => void
  collapseIconSize?: number
  className?: string
}

const Collapsible: FC<Props> = ({
  renderToggle,
  isInitiallyCollapsed = true,
  children,
  onCollapseStateChange,
  collapseIconSize = 24,
  className,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed)

  return (
    <>
      <a
        className={
          "flex items-center cursor-pointer" +
          (className ? " " + className : "")
        }
        onClick={() => {
          onCollapseStateChange ? onCollapseStateChange(!isCollapsed) : null
          setIsCollapsed(!isCollapsed)
        }}
        data-collapsed={isCollapsed}
      >
        <div className="flex w-12/12 items-center">
          {renderToggle({ isCollapsed })}
          <ArrowDownM
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
