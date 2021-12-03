import React, { FC } from "react"
import classNames from "classnames"

import CloseSIcon from "../../assets/dist/icons/closeS"

interface Props {
  visible?: boolean
  disabled?: boolean
  onClear: () => void
}

const WithClearButton: FC<Props> = ({
  children,
  visible = false,
  disabled = false,
  onClear,
}) => {
  return (
    <div className="relative flex w-12/12 clearButton-container">
      {children}
      {visible ? (
        <div
          tabIndex={-1}
          data-testid="clearButton"
          className={classNames(
            "absolute top-0 right-0 bottom-0 cursor-pointer outline-none w-clearButton focus:outline-none",
            { "opacity-20": disabled }
          )}
          onClick={!disabled ? onClear : null}
        >
          <div className="items-center justify-center flex h-full w-full">
            <CloseSIcon width="24" height="24" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default WithClearButton
