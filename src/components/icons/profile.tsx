import React, { FC } from "react"
import { defaultConfig as tailwindConfig } from "../../tailwind/index"
const {
  theme: {
    colors: { "grey-3": defaultColor },
    width: { iconDefault: defaultWidth },
    height: { iconDefault: defaultHeight },
  },
} = tailwindConfig

interface Props {
  color?: string
  width?: number | string
  height?: number | string
}

const Profile: FC<Props> = ({
  color = defaultColor,
  width = defaultWidth,
  height = defaultHeight,
}) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 3.25c7.042 0 12.75 5.708 12.75 12.75 0 .272-.009.543-.025.811l.007-.137c-.006.117-.013.234-.023.351l.016-.214a14.05 14.05 0 01-.028.363l.012-.149c-.008.102-.017.204-.028.306l.016-.157-.033.318.017-.16-.026.233a12.733 12.733 0 01-.095.643 12.665 12.665 0 01-.508 1.965l.052-.155c-.034.102-.07.204-.106.306l.054-.151c-.038.108-.077.215-.117.322l.063-.171c-.036.1-.073.198-.111.297l.048-.126c-.034.09-.069.18-.105.269l.057-.143c-.04.1-.08.2-.122.3v.001a12.67 12.67 0 01-.567 1.179l.111-.208c-.044.085-.089.169-.135.252l.024-.044a12.73 12.73 0 01-.148.264l.124-.22a12.751 12.751 0 01-.901 1.408l.165-.23c-.076.11-.154.217-.234.323l.07-.093a12.8 12.8 0 01-.165.218l.095-.125c-.064.085-.13.17-.195.253l.1-.128a12.81 12.81 0 01-.24.301l.14-.173c-.064.081-.13.161-.195.24a12.825 12.825 0 01-1.872 1.836l-.048.037-.18.14-.27.2c-.087.063-.175.125-.264.186l.168-.117a9.905 9.905 0 01-.27.185l.102-.068a12.77 12.77 0 01-.326.215l.224-.147a12.737 12.737 0 01-.976.591l.15-.083c-.113.064-.229.127-.345.188l.195-.104c-.098.053-.198.106-.298.157l.103-.053c-.089.047-.179.092-.269.137l-.143.07-.313.144c-.138.061-.278.12-.418.177l.135-.055c-.106.044-.213.087-.32.128l.185-.073a12.65 12.65 0 01-1.043.368l.104-.032a10.8 10.8 0 01-.362.108l.257-.075a12.65 12.65 0 01-.323.093l.066-.018c-.128.036-.256.07-.385.102l.32-.084a12.674 12.674 0 01-1.143.259l.098-.018a9.82 9.82 0 01-.35.06l.25-.042a12.775 12.775 0 01-1.117.149l.051-.005c-.119.011-.238.02-.357.028l.307-.023c-.138.012-.277.022-.416.03l.109-.007c-.113.008-.226.013-.339.018l.23-.011c-.125.007-.25.012-.376.015L16 28.75l-.349-.005a12.921 12.921 0 01-.35-.014l.22.01c-.12-.004-.237-.01-.355-.018l.135.008a12.857 12.857 0 01-.385-.026l.25.018A12.76 12.76 0 0114 28.594l.134.02a12.719 12.719 0 01-.342-.054l.208.034a12.707 12.707 0 01-.348-.06l.14.026a12.692 12.692 0 01-.362-.069l.222.044c-.11-.02-.219-.043-.328-.066a12.66 12.66 0 01-.817-.203l.165.046-.3-.085.135.039a12.65 12.65 0 01-.324-.097l.188.058a12.649 12.649 0 01-.352-.11l.164.052a12.656 12.656 0 01-1.003-.361 12.678 12.678 0 01-.638-.282l.062.03a12.72 12.72 0 01-.647-.325l.163.086c-.1-.053-.2-.106-.3-.161l.137.074c-.101-.054-.201-.11-.301-.167l.164.093c-.085-.048-.17-.096-.255-.146-.321-.188-.634-.39-.937-.605l.102.071a12.79 12.79 0 01-.305-.218l.203.147a12.794 12.794 0 01-.288-.21l.085.063a12.823 12.823 0 01-3.476-3.893l.058.1a12.733 12.733 0 01-.182-.32l.124.22c-.05-.088-.1-.176-.148-.264l.024.044a12.332 12.332 0 01-.656-1.38l.058.141c-.04-.096-.08-.193-.117-.29l.06.148c-.036-.087-.07-.175-.104-.264l.044.115a12.656 12.656 0 01-.122-.328l.078.213a12.664 12.664 0 01-.634-2.338l.007.046a12.736 12.736 0 01-.104-.716l.01.073c-.01-.078-.02-.156-.027-.234l.017.161a12.793 12.793 0 01-.033-.318l.016.157c-.01-.102-.02-.204-.028-.306l.012.149c-.01-.12-.02-.242-.028-.363l.016.214A12.957 12.957 0 013.25 16C3.249 9.062 8.79 3.418 15.69 3.254L16 3.25zm0 15.5c-3.226 0-6.05 2.323-7.402 5.722A11.206 11.206 0 0016 27.25c2.834 0 5.423-1.048 7.402-2.778-1.352-3.4-4.176-5.722-7.402-5.722zm0-14C9.787 4.75 4.75 9.787 4.75 16c0 2.797 1.02 5.356 2.71 7.324C9.114 19.71 12.303 17.25 16 17.25c3.697 0 6.886 2.46 8.54 6.073A11.206 11.206 0 0027.25 16c0-6.213-5.037-11.25-11.25-11.25zm0 2.5a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
)

export default Profile
