import React, { FC, useState, useEffect, useContext } from "react"
import classNames from "classnames"

import ArrowDownM from "../icons/arrowDownMCrop"
import HeaderThemeContext, { HeaderTheme } from "./themeContext"

interface Props {
  renderParent: () => JSX.Element
  children: JSX.Element
  theme?: HeaderTheme
  stickOut?: "left" | "right"
}

const HeaderDropdown: FC<Props> = ({
  renderParent,
  stickOut = "right",
  children
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useContext(HeaderThemeContext)

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", toggle)
      document.addEventListener("keydown", toggle)
    }

    return () => {
      document.removeEventListener("click", toggle)
      document.removeEventListener("keydown", toggle)
    }
  }, [isOpen])

  const toggle = () => setIsOpen(!isOpen)

  const renderClosedState = () => {
    return (
      <div className="flex items-center cursor-pointer" onClick={toggle}>
        {renderParent()}
        <ArrowDownM
          height="28"
          width="28"
          className={classNames("inline-block", {
            "text-white":
              theme === HeaderTheme.DARK || theme === HeaderTheme.TRANSPARENT
          })}
        />
      </div>
    )
  }

  const renderOpenState = () => {
    return (
      <div className="relative z-dropdownMenu cursor-pointer">
        <div className="flex items-center" onClick={toggle}>
          {renderParent()}
          <ArrowDownM
            height="28"
            width="28"
            className={classNames("inline-block, customRotate-180", {
              "text-white":
                theme === HeaderTheme.DARK || theme === HeaderTheme.TRANSPARENT
            })}
          />
        </div>
        <div
          className={classNames(
            "absolute border border-grey-2 bg-white rounded-4",
            {
              "right-0": stickOut === "left",
              "bg-white":
                theme === HeaderTheme.LIGHT || theme === HeaderTheme.DARK,
              "text-black": theme === HeaderTheme.DARK
            }
          )}
        >
          {children}
        </div>
      </div>
    )
  }

  return <>{isOpen ? renderOpenState() : renderClosedState()}</>
}

export default HeaderDropdown
