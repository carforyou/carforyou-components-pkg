import React, { FC } from "react"

import classNames from "classnames"

import useModal from "../../../src/hooks/useModal"
import Asterisk from "../../../src/components/asterisk"
import InfoIcon from "../../../src/assets/dist/icons/info"

interface Props {
  name: string
  text: string
  error?: boolean
  required?: boolean
  renderPopup?: () => JSX.Element
}

const WithLabel: FC<Props> = ({
  name,
  children,
  text,
  error = false,
  renderPopup = null,
  required = false,
}) => {
  const { openModal, renderModal } = useModal(renderPopup)

  return (
    <>
      {renderModal()}
      <label htmlFor={name}>
        <b
          className={classNames("text-lg flex leading-label", {
            "text-salmon": error,
            "mb-5": !renderPopup,
          })}
        >
          <span className="text-base">{text}</span>
          {required && <Asterisk />}
          {!!renderPopup && (
            <a
              className="ml-labelPopupIcon mb-labelPopupIcon cursor-pointer opacity-60 hover:opacity-100 transition duration-200"
              onClick={(e) => {
                e.preventDefault()
                openModal()
              }}
            >
              <InfoIcon width="24" height="24" />
            </a>
          )}
        </b>
      </label>
      <div className="w-12/12">{children}</div>
    </>
  )
}

export default WithLabel
