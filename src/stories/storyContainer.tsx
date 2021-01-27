import React from "react"

interface StoryContainerArgs {
  title: string
  component: JSX.Element
  style?: string
}

export default function StoryContainer({
  title,
  component,
  style = "w-12/12 md:w-3/12",
}: StoryContainerArgs): JSX.Element {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">{title}</div>
      <div className={style}>{component}</div>
    </div>
  )
}
