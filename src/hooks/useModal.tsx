import React, { useState } from "react"
import classNames from "classnames"

import Modal from "../components/modal/index"

const useModal = (
  modal: (modalProps: { closeModal: () => void }) => JSX.Element,
  options?: {
    size?: "small" | "medium" | "large" | "fullscreen"
    alwaysRender?: boolean
  }
) => {
  const [isVisble, setVisible] = useState(false)
  const { size, alwaysRender } = options || {
    size: "medium",
    alwaysRender: false
  }

  const openModal = () => {
    setVisible(true)
    document.body.classList.add("preventScrolling")
  }

  const closeModal = () => {
    document.body.classList.remove("preventScrolling")
    setVisible(false)
  }

  const renderModalComponent = () => (
    <Modal close={closeModal} size={size}>
      {modal}
    </Modal>
  )

  const renderModal = () =>
    alwaysRender ? (
      <div className={classNames({ hidden: !isVisble })}>
        {renderModalComponent()}
      </div>
    ) : isVisble ? (
      renderModalComponent()
    ) : null

  return {
    openModal,
    renderModal,
    modalVisible: isVisble
  }
}

export default useModal
