import React, { useState, RefObject, useEffect } from "react"
import { createPortal } from "react-dom"

import classNames from "classnames"

import Modal, { ModalSize, ModalStyle } from "../components/modal/index"

const useModal = (
  modal: (modalProps: {
    closeModal: () => void
  }) => JSX.Element,
  options?: {
    size?: ModalSize
    style?: ModalStyle
    alwaysRender?: boolean
    container?: RefObject<HTMLDivElement>
  },
  onClose?: () => void
) => {
  const [isVisible, setVisible] = useState(false)
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
    if (isVisible) {
      document.body.classList.add("preventScrolling")
    } else {
      document.body.classList.remove("preventScrolling")
    }

    return () => document.body.classList.remove("preventScrolling")
  }, [isVisible])

  const renderModalComponent = () => (
    <Modal close={closeModal} onClose={onClose} size={size} style={style}>
      {modal}
    </Modal>
  )

  const renderModalWrapper = () =>
    alwaysRender ? (
      <div className={classNames({ hidden: !isVisible })}>
        {renderModalComponent()}
      </div>
    ) : isVisible ? (
      renderModalComponent()
    ) : null

  const renderModal = () =>
    container?.current
      ? createPortal(renderModalWrapper(), container.current)
      : renderModalWrapper()

  return {
    openModal,
    closeModal,
    renderModal,
    modalVisible: isVisible,
  }
}

export default useModal
