import React, { FC, ReactNode, useEffect } from "react"

import Overlay from "./overlay"
import CloseM from "../icons/closeM"

interface Props {
  close: () => void
  children: (options: { closeModal: () => void }) => ReactNode
}

const Modal: FC<Props> = ({ close, children }) => {
  const handleKeys = e => {
    if (e.keyCode === 27) {
      e.preventDefault()
      close()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeys)
    return () => document.removeEventListener("keydown", handleKeys)
  }, [])

  return (
    <div className="fixed inset-0 overflow-y-scroll scrolling-touch z-modal min-h-screen transition duration-200 flex flex-col justify-center items-center md:overflow-y-auto">
      <Overlay handleClick={close} />
      <div
        className="max-h-full inset-x-0 scrolling-touch md:overflow-y-auto overflow-y-scroll fixed inline-block md:align-middle md:relative md:inset-auto"
        role="dialog"
      >
        <div
          className="absolute z-modalClose cursor-pointer right-modalClose top-modalClose"
          onClick={close}
          data-testid="modal-close"
        >
          <CloseM />
        </div>
        <div className="bg-white z-modal w-12/12 md:w-modalLarge p-40 my-0 rounded-4">
          {children({ closeModal: close })}
        </div>
      </div>
    </div>
  )
}

export default Modal
