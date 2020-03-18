import React, { FC } from "react"
import classNames from "classnames"

import useModal from "../../hooks/useModal"
import Info from "../icons/info"

interface Props {
  name: string
  text: string
  error?: boolean
  required?: boolean
  popup?: () => JSX.Element
}

const WithLabel: FC<Props> = ({
  name,
  children,
  text,
  popup,
  error = false,
  required = false
}) => {
  const { openModal, renderModal } = useModal(popup)

  return (
    <>
      {renderModal()}
      <label htmlFor={name}>
        <b
          className={classNames("text-lg flex leading-label", {
            "text-salmon": error,
            "mb-5": !popup
          })}
        >
          <span className="text-base">{text}</span>
          {required ? (
            <span className="text-salmon leading-xxs relative top-requiredIndicator">
              &nbsp;*
            </span>
          ) : null}
          {popup && (
            <div
              className="ml-labelPopupIcon mb-labelPopupIcon cursor-pointer opacity-60 hover:opacity-100 transition duration-200"
              onClick={e => {
                e.preventDefault()
                openModal()
              }}
            >
              <Info />
            </div>
          )}
        </b>
      </label>
      <div className="relative w-12/12">{children}</div>
    </>
  )
}

export default WithLabel
