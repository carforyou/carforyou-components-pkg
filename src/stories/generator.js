import React from "react"

export default function Generator({
  title,
  component,
  style = "w-12/12 md:w-3/12",
}) {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{title}</div>
      <div className={style}>{component}</div>
    </div>
  )
}
