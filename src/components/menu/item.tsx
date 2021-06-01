import React, { ComponentType, FC, Fragment } from "react"
import classNames from "classnames"

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
   * notification component to be rendered
   */
  NotificationComponent?: ComponentType<{ width: string; height: string }>
  /**
   * click event handler (e.g. displaying modal, tracking function)
   */
  onClick?: () => void
  /**
   * url to navigate to
   */
  url?: string
  /**
   * marks the item as active in the UI
   */
  active?: boolean
  /**
   * component to wrap the link with
   */
  LinkWrapper?: ComponentType<{ href?: string }>
}

const MenuItem: FC<Props> = ({
  title,
  IconComponent,
  NotificationComponent,
  onClick,
  url,
  active = false,
  LinkWrapper,
}) => {
  const LinkWrapperComponent = LinkWrapper || Fragment

  return (
    <LinkWrapperComponent {...(LinkWrapper ? { href: url } : {})}>
      <a
        className={classNames("flex items-center py-13 pl-25 cursor-pointer", {
          "bg-teal-light text-teal rounded-4 font-bold": active,
        })}
        onClick={onClick}
        href={url}
      >
        <span
          className={classNames("mr-10 text-base leading-sm", {
            "text-grey-4": !active,
          })}
        >
          <IconComponent width="24px" height="24px" />
        </span>
        {title}
        {NotificationComponent ? (
          <span className="w-12/12 text-right px-5">
            <NotificationComponent width="14px" height="14px" />
          </span>
        ) : null}
      </a>
    </LinkWrapperComponent>
  )
}

export default MenuItem
export { Props as MenuItemProps }
