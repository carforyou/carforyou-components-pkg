import * as React from "react"

function Description(props) {
  return (
    <>
      <div className="w-5/12 pr-10">
        <span className="text-lg font-bold">{props.title}</span>
        <div className="font-regular text-base">{props.description}</div>
      </div>
      <div className="flex justify-center items-center rounded border border-grey-2 w-7/12 bg-grey-bright p-10">
        {props.children}
      </div>
    </>
  )
}

export default Description
