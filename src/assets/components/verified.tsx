import * as React from "react"

function VerifiedIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.126 13.8L3 17l2.5 1.5L7 21l3.899-4.095m2.202 0l3.9 4.095 1.5-2.5L21 17l-3.127-3.2"
        stroke="#EAA403"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.95 5.05a7 7 0 11-9.9 9.9 7 7 0 019.9-9.9"
        stroke="#EAA403"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M11.999 12.584l1.797.944a.477.477 0 00.692-.503l-.343-2 1.454-1.417a.477.477 0 00-.264-.814l-2.01-.292-.897-1.82a.476.476 0 00-.855 0l-.898 1.82-2.01.293a.477.477 0 00-.264.814l1.454 1.416-.343 2.001a.477.477 0 00.692.503L12 12.585h-.002v0z"
        stroke="#EAA403"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default VerifiedIcon
