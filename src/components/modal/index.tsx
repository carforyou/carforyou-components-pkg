import React, { FC, ReactNode, useEffect } from "react"
import classNames from "classnames"

import Overlay from "./overlay"
import CloseMIcon from "../icons/closeM"

export type ModalSize = "small" | "medium" | "large" | "fullscreen"

export type ModalStyle = "white" | "dark"

interface Props {
  close: () => void
  onClose?: () => void
  children: (options: { closeModal: () => void }) => ReactNode
  size: ModalSize
  style: ModalStyle
}

const Modal: FC<Props> = ({ close, onClose, size, style, children }) => {
  const handleKeys = (e) => {
    if (e.keyCode === 27) {
      e.preventDefault()
      onClose ? onClose() : null
      close()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeys)
    return () => document.removeEventListener("keydown", handleKeys)
  }, [])

  return (
    <div className="fixed inset-0 overflow-y-scroll scrolling-touch z-modal min-h-full transition duration-200 flex flex-col justify-center items-center md:overflow-y-auto">
      <Overlay handleClick={close} />
      <div
        className={classNames(
          "min-h-full max-h-full scrolling-touch md:overflow-y-auto overflow-y-scroll fixed inline-block md:relative",
          size === "fullscreen"
            ? "inset-0"
            : "inset-x-0 md:min-h-auto md:align-middle md:inset-auto h-full md:h-auto rounded-4",
          style === "white" ? "bg-white" : "bg-grey-dark text-white"
        )}
        role="dialog"
      >
        <div
          className="absolute z-modalClose cursor-pointer right-modalClose top-modalClose"
          onClick={() => {
            onClose ? onClose() : null
            close()
          }}
          data-testid="modal-close"
        >
          <CloseMIcon color={style === "dark" ? "#FFFFFF" : "#232A36"} />
        </div>
        <div
          className={classNames("z-modal w-12/12 my-0", {
            "p-40 md:w-modalLarge": size === "large",
            "p-40 md:w-modal": size === "medium",
            "p-40 md:w-modalSmall": size === "small",
            "h-full": size === "fullscreen",
          })}
        >
          {children({ closeModal: close })}
        </div>
      </div>
    </div>
  )
}

export default Modal
