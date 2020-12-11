import React, { ReactNode, FC, useState } from "react"

import ArrowDownM from "./icons/arrowDownMCrop"

interface Props {
  isInitiallyCollapsed?: boolean
  renderToggle: (options: { isCollapsed: boolean }) => ReactNode
  children?: () => ReactNode
  trackingHandler?: (action: string) => void
}

const Collapsible: FC<Props> = ({
  renderToggle,
  isInitiallyCollapsed = true,
  children,
  trackingHandler,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed)

  return (
    <>
      <a
        className="font-bold flex items-center cursor-pointer"
        onClick={() => {
          trackingHandler
            ? trackingHandler(isCollapsed ? "open" : "close")
            : null
          setIsCollapsed(!isCollapsed)
        }}
        data-collapsed={isCollapsed}
      >
        <div className="flex w-12/12 items-center">
          {renderToggle({ isCollapsed })}
          <ArrowDownM
            height="32"
            width="32"
            className={isCollapsed ? null : "rotate-180 transform"}
          />
        </div>
      </a>
      {isCollapsed ? null : children()}
    </>
  )
}

export default Collapsible
