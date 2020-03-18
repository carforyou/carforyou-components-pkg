import React, { FC } from "react"
import classNames from "classnames"

import useModal from "../../hooks/useModal"
import InfoIcon from "../icons/info"

interface Props {
  name: string
  text: string
  error?: boolean
  required?: boolean
  rendePopup?: () => JSX.Element
}

const WithLabel: FC<Props> = ({
  name,
  children,
  text,
  rendePopup,
  error = false,
  required = false
}) => {
  const { openModal, renderModal } = useModal(rendePopup)

  return (
    <>
      {renderModal()}
      <label htmlFor={name}>
        <b
          className={classNames("text-lg flex leading-label", {
            "text-salmon": error,
            "mb-5": !rendePopup
          })}
        >
          <span className="text-base">{text}</span>
          {required ? (
            <span className="text-salmon leading-xxs relative top-requiredIndicator">
              &nbsp;*
            </span>
          ) : null}
          {rendePopup && (
            <a
              className="ml-labelPopupIcon mb-labelPopupIcon cursor-pointer opacity-60 hover:opacity-100 transition duration-200"
              onClick={e => {
                e.preventDefault()
                openModal()
              }}
            >
              <InfoIcon />
            </a>
          )}
        </b>
      </label>
      <div className="relative w-12/12">{children}</div>
    </>
  )
}

export default WithLabel
