import React, { FC } from "react"

const Ready: FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex items-center">
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h32v32H0z" />
          <path
            d="M21.444 10c.86 0 1.556.674 1.556 1.505v11.742a.765.765 0 01-.778.753.791.791 0 01-.547-.218l-3.261-3.121h-7.858c-.86 0-1.556-.674-1.556-1.505v-7.651C9 10.674 9.696 10 10.556 10h10.888z"
            fill="#ffffff"
          />
        </g>
      </svg>
      Support
    </div>
  )
}

export default Ready
