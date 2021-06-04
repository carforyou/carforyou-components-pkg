import * as React from "react"

function UmbrellaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3v1M8 18.183v1.01c0 1.1.895 1.99 2 1.99v0c1.105 0 2-.89 2-1.99v-7.416"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M9 12.976c1.657-1.6 4.343-1.6 6 0 1.657-1.6 4.343-1.6 6 0a9 9 0 00-18 0c1.657-1.6 4.343-1.6 6 0z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default UmbrellaIcon
