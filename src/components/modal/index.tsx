import React, { FC, ReactNode, useEffect } from "react"
import classNames from "classnames"

import Overlay from "./overlay"
import CloseMIcon from "../icons/closeM"

export type ModalSize = "small" | "medium" | "large" | "fullscreen"

export type ModalStyle = "white" | "dark"

export type ModalOverflow = "auto" | "scroll" | "visible"
export interface ModalProps {
  // Function to close the modal
  close: () => void
  // Callback function called when the modal is closed
  onClose?: () => void
  // Modal content
  children: (options: { closeModal: () => void }) => ReactNode
  // Screen size
  size: ModalSize
  // Background color
  style: ModalStyle
  // Vertical overflow
  verticalOverflow?: ModalOverflow
  // Title in the modal
  title?: ReactNode
}

const Modal: FC<ModalProps> = ({
  close,
  onClose,
  size,
  style,
  children,
  verticalOverflow,
  title,
}) => {
  const overflowClass = verticalOverflow
    ? `overflow-y-${verticalOverflow}`
    : "md:overflow-y-auto overflow-y-scroll"
  const handleClose = () => {
    onClose ? onClose() : null
    close()
  }

  const handleKeys = (e) => {
    if (e.keyCode === 27) {
      e.preventDefault()
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeys)
    return () => document.removeEventListener("keydown", handleKeys)
  }, [])

  return (
    <div className="fixed inset-0 scrolling-touch overflow-y-scroll md:overflow-y-auto z-modal min-h-full transition duration-200 flex flex-col justify-center items-center">
      <Overlay handleClick={handleClose} />
      <div
        className={classNames(
          "min-h-full max-h-full scrolling-touch fixed inline-block",
          overflowClass,
          size === "fullscreen"
            ? "inset-0"
            : "inset-x-0 md:min-h-auto md:align-middle md:inset-auto md:relative h-full md:h-auto rounded-4",
          style === "white" ? "bg-white" : "bg-grey-dark text-white"
        )}
        role="dialog"
      >
        <div
          className={classNames("z-modal w-12/12 my-0", {
            "p-15 md:p-40 md:w-modalLarge": size === "large",
            "p-15 md:p-40 md:w-modal": size === "medium",
            "p-15 md:p-40 md:w-modalSmall": size === "small",
            "h-full": size === "fullscreen",
          })}
        >
          {title ? (
            <div className="flex items-center">
              <span className="font-bold text-xl w-12/12">{title}</span>
              <div
                className="z-modalClose cursor-pointer"
                onClick={handleClose}
                data-testid="modal-close"
              >
                <CloseMIcon color={style === "dark" ? "#FFFFFF" : "#232A36"} />
              </div>
            </div>
          ) : (
            <div
              className="absolute z-modalClose cursor-pointer right-modalClose top-modalClose"
              onClick={handleClose}
              data-testid="modal-close"
            >
              <CloseMIcon color={style === "dark" ? "#FFFFFF" : "#232A36"} />
            </div>
          )}

          <div className="pt-15">{children({ closeModal: close })}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
