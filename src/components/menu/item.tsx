import React, { ComponentType, FC } from "react"

interface Props {
  /**
   * title to be displayed
   */
  title: string
  /**
   * icon component to be rendered
   */
  IconComponent: ComponentType<{ width: string; height: string }>
  /**
   * click event handler (e.g. displaying modal, tracking function)
   */
  onClick?: () => void
  /**
   * url to navigate to
   */
  url?: string
}

const MenuItem: FC<Props> = ({ title, IconComponent, onClick, url }) => {
  return (
    <a
      className="flex items-center py-13 cursor-pointer"
      onClick={onClick}
      href={url}
    >
      <span className="text-grey-4 mr-10">
        <IconComponent width="24px" height="24px" />
      </span>
      {title}
    </a>
  )
}

export default MenuItem
export { Props as MenuItemProps }
