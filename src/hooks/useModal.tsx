import React, { useState, RefObject, useEffect } from "react"
import { createPortal } from "react-dom"

import classNames from "classnames"

import Modal, { ModalSize, ModalStyle } from "../components/modal/index"

const useModal = (
  modal: (modalProps: { closeModal: () => void }) => JSX.Element,
  options?: {
    size?: ModalSize
    style?: ModalStyle
    alwaysRender?: boolean
    container?: RefObject<HTMLDivElement>
  }
) => {
  const [isVisble, setVisible] = useState(false)
  const {
    size = "medium",
    style = "white",
    alwaysRender = false,
    container = null,
  } = options || {}

  const openModal = () => {
    setVisible(true)
  }

  const closeModal = () => {
    setVisible(false)
  }

  useEffect(() => {
    if (isVisble) {
      document.body.classList.add("preventScrolling")
    } else {
      document.body.classList.remove("preventScrolling")
    }

    return () => document.body.classList.remove("preventScrolling")
  }, [isVisble])

  const renderModalComponent = () => (
    <Modal close={closeModal} size={size} style={style}>
      {modal}
    </Modal>
  )

  const renderModalWrappper = () =>
    alwaysRender ? (
      <div className={classNames({ hidden: !isVisble })}>
        {renderModalComponent()}
      </div>
    ) : isVisble ? (
      renderModalComponent()
    ) : null

  const renderModal = () =>
    container?.current
      ? createPortal(renderModalWrappper(), container.current)
      : renderModalWrappper()

  return {
    openModal,
    renderModal,
    modalVisible: isVisble,
  }
}

export default useModal
