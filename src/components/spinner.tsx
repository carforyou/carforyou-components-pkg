import React, { FC } from "react"
import classNames from "classnames"

interface Props {
  className?: string
}

const Spinner: FC<Props> = ({ className }) => (
  <div className={classNames(className)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="26"
      height="26"
    >
      <path
        className="spinner-pathBack"
        d="M217 357 217 394C217 449 173 492 119 492 64 492 20 449 20 394 20 335 73 295 119 295L394 295C455 295 492 348 492 394 492 449 450 492 394 492 340 492 296 449 296 394L296 315"
      />
      <path
        className="spinner-pathBack"
        d="M296 157 296 118C296 64 340 20 394 20 450 20 492 64 492 118 492 173 450 217 394 217L119 217C64 217 20 173 20 118 20 64 64 20 119 20 173 20 217 64 217 118L217 197"
      />
      <path className="spinner-pathLine spinner-start1" d="M217 357L217 357" />
      <path
        className="spinner-pathLine spinner-line1"
        d="M217 357 217 394C217 449 173 492 119 492 64 492 20 449 20 394 20 335 73 295 119 295L394 295C455 295 492 348 492 394 492 449 450 492 394 492 340 492 296 449 296 394L296 315"
      />
      <path className="spinner-pathLine spinner-start2" d="M296 157L296 157" />
      <path
        className="spinner-pathLine spinner-line2"
        d="M296 157 296 118C296 64 340 20 394 20 450 20 492 64 492 118 492 173 450 217 394 217L119 217C64 217 20 173 20 118 20 64 64 20 119 20 173 20 217 64 217 118L217 197"
      />
    </svg>
  </div>
)

export default Spinner
