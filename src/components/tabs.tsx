import React, { FC, ReactNode, useState } from "react"
import classnames from "classnames"

interface Tab {
  title: string
  renderIcon?: () => ReactNode
  renderContent: () => ReactNode
}

interface Props {
  tabs: Tab[]
}

const Tabs: FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  const tabsCount = tabs.length

  return (
    <div className="w-12/12 bg-white rounded-4 border border-grey-2 shadow-soft">
      <div className="flex flex-row">
        {tabs.map(({ title, renderIcon }, index) => (
          <div
            onClick={() => setActiveTab(index)}
            className={classnames(
              "flex items-center flex-1 p-14 text-grey-dark font-bold border-grey-2 cursor-pointer",
              {
                "bg-grey-1 border-b": index !== activeTab,
                "mb-px": index === activeTab,
                "border-r": index !== tabsCount - 1,
                "justify-start": tabsCount === 1,
                "justify-center": tabsCount > 1,
              }
            )}
            key={`tab-${index}`}
          >
            {renderIcon && <span className="pr-8">{renderIcon()}</span>}
            {title}
          </div>
        ))}
      </div>
      <div className="p-16">{tabs[activeTab].renderContent()}</div>
    </div>
  )
}

export { Props as TabsProps }
export default Tabs
