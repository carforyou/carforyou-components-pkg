import React, { FC } from "react"

interface Props {
  /**
   * title to be displayed
   */
  title: string
}

const MenuSectionTitle: FC<Props> = ({ title }) => {
  return (
    <div className="uppercase font-bold text-xxs leading-xs text-grey-3 tracking-wider mt-25 pl-25 pb-10">
      {title}
    </div>
  )
}

export default MenuSectionTitle
export { Props as MenuSectionTitleProps }
