import * as React from "react"
import { FC, ReactNode } from "react"

import "../css/button.css"
import Spinner from "./spinner"

interface Props {
  children: ReactNode
  className?: string
  loading: boolean
}

const BaseButton: FC<Props> = ({ className, loading, children }) => {
  return (
    <button
      type="submit"
      formNoValidate
      className={className}
      disabled={loading}
    >
      {loading ? <Spinner className="-mt-3 w-12/12" /> : children}
    </button>
  )
}

export default BaseButton
