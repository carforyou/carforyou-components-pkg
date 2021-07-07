import * as React from "react"

function ImageMissing() {
  return (
    <svg
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path d="M0 0h48L0 48V0zm55 48H7L55 0v48z" id="a" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(5 9)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            d="M46 40H8a4 4 0 01-4-4V14a4 4 0 014-4h9s1.125-.125 2-1l2-2s.781-1 2-1h8c1.312 0 2 1 2 1l2 2c.875.875 2 1 2 1h9a4 4 0 014 4v22a4 4 0 01-4 4zm2-26a2 2 0 00-2-2l-9.221-.013c-.305-.033-1.889-.269-3.193-1.573l-2.13-2.13-.104-.151A.604.604 0 0031 8h-8c-.153 0-.375.178-.424.231l-.075.096-2.087 2.086c-1.305 1.305-2.889 1.54-3.193 1.573l-4.151.006c-.024.002-.047.008-.07.008h-2c-.014 0-.026-.004-.04-.004L8 12a2 2 0 00-2 2v22a2 2 0 002 2h38a2 2 0 002-2V14z"
            fill="#D7DBDF"
            fillRule="nonzero"
            mask="url(#b)"
          />
          <path
            d="M27 36c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11zm0-20a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9zm0 15a6 6 0 01-6-6 6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6zm0-10a4 4 0 10.001 7.999A4 4 0 0027 21zM9 7h7v2H9z"
            fill="#D7DBDF"
            mask="url(#b)"
          />
        </g>
        <path
          d="M52.124 13.376a1 1 0 010 1.414L15.247 51.668a1 1 0 01-1.414-1.414L50.71 13.375a1 1 0 011.414 0z"
          fill="#D7DBDF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}

export default ImageMissing
