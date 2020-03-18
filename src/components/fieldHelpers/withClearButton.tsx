import React, { FC } from "react"

import CloseSIcon from "../icons/closeS"

interface Props {
  display?: boolean
  onClear: () => void
}

const WithClearButton: FC<Props> = ({ children, display = false, onClear }) => {
  return (
    <div className="relative inline-flex w-12/12">
      {children}
      {display ? (
        <div
          tabIndex={-1}
          data-testid="clearButton"
          className="absolute top-0 right-0 bottom-0 cursor-pointer z-clearButton outline-none w-clearButton focus:outline-none translate-center top-half -mr-20"
          onClick={onClear}
        >
          <div className="items-center justify-center flex h-full w-full">
            <CloseSIcon />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default WithClearButton
