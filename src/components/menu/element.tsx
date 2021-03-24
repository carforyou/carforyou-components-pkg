import React, { FC } from "react"

import MenuSectionTitle, { MenuSectionTitleProps } from "./sectionTitle"
import MenuItem, { MenuItemProps } from "./item"

interface TaggedMenuItemProps extends MenuItemProps {
  tag: "item"
}

interface TaggedMenuSectionTitleProps extends MenuSectionTitleProps {
  tag: "title"
}

type Props = TaggedMenuItemProps | TaggedMenuSectionTitleProps

const MenuElement: FC<Props> = (props) => {
  switch (props.tag) {
    case "item":
      return <MenuItem {...props} />
    case "title":
      return <MenuSectionTitle {...props} />
  }
}

export default MenuElement
export { Props as MenuElementProps }
