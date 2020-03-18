import React, { useState, ReactElement } from "react"
import Modal from "../components/modal/index"

const useModal = (modal: () => JSX.Element) => {
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
    renderModal
  }
}

export default useModal
