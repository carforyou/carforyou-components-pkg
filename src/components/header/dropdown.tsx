import React, { FC, useState, useEffect, useContext } from "react"
import classNames from "classnames"

import { defaultConfig as tailwindConfig } from "../../tailwind/index"
const {
  theme: {
    colors: { black: colorDropdownArrow },
  },
} = tailwindConfig

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
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, isDarkOrTransparent, isLightOrDark } = useContext(
    HeaderThemeContext
  )

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
      <div
        className={classNames(
          "flex items-center cursor-pointer py-10 lg:py-0 hover:opacity-60",
          {
            "lg:text-white": isDarkOrTransparent,
          }
        )}
        onClick={toggle}
      >
        {renderParent()}
        <ArrowDownM
          height="28"
          width="28"
          color={colorDropdownArrow}
          className={classNames("inline-block", {
            "lg:text-white": isDarkOrTransparent,
          })}
        />
      </div>
    )
  }

  const renderOpenState = () => {
    return (
      <div className="bg-grey-1 lg:bg-transparent relative z-dropdownMenu cursor-pointer -mx-headerMenu lg:mx-0 px-14 lg:px-0 py-10 lg:py-0">
        <div
          className={classNames(
            "flex items-center font-bold lg:font-regular hover:opacity-60",
            {
              "lg:text-white": isDarkOrTransparent,
            }
          )}
          onClick={toggle}
        >
          {renderParent()}
          <ArrowDownM
            height="28"
            width="28"
            className={classNames("inline-block, customRotate-180", {
              "lg:text-white": isDarkOrTransparent,
            })}
          />
        </div>
        <div
          className={classNames(
            "bg-grey-1 lg:bg-white relative lg:absolute lg:border lg:border-grey-2 lg:rounded-4",
            {
              "right-0": stickOut === "left",
              "bg-white": isLightOrDark,
              "text-black": isDark,
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
