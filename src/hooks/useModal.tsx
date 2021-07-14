import { createPortal } from "react-dom"
import React, { RefObject, useCallback, useEffect, useState } from "react"

import classNames from "classnames"

import Modal, {
  ModalOverflow,
  ModalSize,
  ModalStyle,
} from "../components/modal/index"

export interface UseModalOptions {
  size?: ModalSize
  style?: ModalStyle
  alwaysRender?: boolean
  container?: RefObject<HTMLDivElement>
  verticalOverflow?: ModalOverflow
  onClose?: () => void
}

const useModal = (
  modal: (modalProps: { closeModal: () => void }) => JSX.Element,
  options?: UseModalOptions
) => {
  const [isVisible, setVisible] = useState(false)
  const {
    size = "medium",
    style = "white",
    alwaysRender = false,
    container = null,
    verticalOverflow = null,
    onClose = null,
  } = options || {}

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("preventScrolling")
    } else {
      document.body.classList.remove("preventScrolling")
    }

    return () => document.body.classList.remove("preventScrolling")
  }, [isVisible])

  const renderModalComponent = () => (
    <Modal
      close={closeModal}
      onClose={onClose}
      size={size}
      style={style}
      verticalOverflow={verticalOverflow}
    >
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
