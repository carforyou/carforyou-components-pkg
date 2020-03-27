import React, { useState } from "react"
import Modal from "../components/modal/index"

const useModal = (
  modal: (modalProps: { closeModal: () => void }) => JSX.Element
) => {
  const [isVisble, setVisible] = useState(false)

  const openModal = () => {
    setVisible(true)
    document.body.classList.add("preventScrolling")
  }

  const closeModal = () => {
    document.body.classList.remove("preventScrolling")
    setVisible(false)
  }

  const renderModal = () =>
    isVisble ? <Modal close={closeModal}>{modal}</Modal> : null

  return {
    openModal,
    renderModal,
    closeModal
  }
}

export default useModal
