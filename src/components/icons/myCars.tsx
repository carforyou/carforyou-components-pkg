import React, { FC } from "react"

interface Props {
  color?: string
  width?: number | string
  height?: number | string
}

const MyCars: FC<Props> = ({ color = "#a0a7ab", width = 32, height = 32 }) => (
  <svg height={width} width={height} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.237 12.403l.673.086c1.453.237 2.462.77 3.214 1.795.29.39.685 1.112 1.127 2.045l.181.39.12-.035.202-.047.208-.033.212-.019.06-.001h.353a2.119 2.119 0 011.489.542c.385.348.623.825.667 1.336l.007.171v.72c0 .698-.348 1.309-.88 1.685l-.136.089-.091.049.048.12c.158.437.255.89.29 1.34l.013.271-.003.27v5.015c0 1.098-.87 1.978-1.953 2.053l-.149.005h-1.441c-.996 0-1.842-.681-2.052-1.608l-.03-.157-.007-.072H13.64l-.02.15c-.057.304-.183.59-.368.84l-.117.144-.132.134a2.123 2.123 0 01-1.272.562l-.179.007h-1.455c-.54 0-1.06-.203-1.451-.569a2.041 2.041 0 01-.643-1.302l-.008-.187v-4.97a5.14 5.14 0 01.215-1.659l.087-.266.05-.13-.08-.044a2.074 2.074 0 01-.992-1.454l-.02-.17-.005-.15v-.716c0-1.087.856-1.96 1.933-2.043l.155-.006h.414l.054.002c.139.007.276.024.411.05l.201.046.121.037.062-.134c.411-.886.785-1.601 1.083-2.063l.088-.13.082-.116c.764-1.015 1.782-1.551 3.241-1.792a23.886 23.886 0 013.858-.227c1.096-.026 2.19.023 3.284.146zm-2.653 1.347l-.631.006-.604-.006c-1.008.004-2.03.077-3.028.217-1.086.18-1.759.533-2.267 1.209-.289.387-.79 1.35-1.346 2.6l-.482 1.095-.75-.532a1.417 1.417 0 00-.576-.238l-.168-.017h-.389c-.3.002-.54.203-.585.461l-.008.088v.715c0 .285.223.527.53.572l.106.008 1.382.02-.705 1.128a3.716 3.716 0 00-.568 1.867v5.249c0 .146.062.288.175.393a.62.62 0 00.331.158l.096.007h1.455c.161 0 .315-.06.427-.165a.545.545 0 00.168-.306l.007-.087v-1.278h13.692v1.278c0 .274.215.507.503.55l.099.008h1.441c.304 0 .549-.205.595-.469l.007-.09.001-5.042a3.646 3.646 0 00-.441-1.856l-.124-.214-.715-1.147h1.413c.315 0 .57-.213.617-.486l.008-.094v-.719a.531.531 0 00-.18-.394.61.61 0 00-.35-.15l-.109-.005h-.374a1.427 1.427 0 00-.607.172l-.133.083-.75.532-.37-.843c-.598-1.363-1.149-2.435-1.46-2.854-.463-.63-1.063-.975-2.021-1.164l-.211-.038a22.887 22.887 0 00-3.1-.222zM13.2 20.853l.226.029.11.021 2.392.52c1.124.237 1.903 1.191 1.738 2.257-.147.95-.995 1.64-2.022 1.744l-.173.012-2.485.001c-1.144 0-2.136-.746-2.281-1.798l-.015-.153-.003-.086v-.52c0-.665.36-1.274.948-1.65a2.526 2.526 0 011.565-.377zm13.165.377c.5.32.837.811.926 1.382l.019.173.003.095v.523c-.003 1.069-.905 1.903-2.04 2.02l-.163.013-.094.001h-2.39c-1.131.008-2.13-.716-2.292-1.755-.152-.978.492-1.867 1.487-2.192l.16-.047 2.48-.54a2.548 2.548 0 011.904.327zm-13.92 1.263c-.144.092-.227.207-.25.32l-.008.067.001.54c.014.233.287.47.678.511l.12.006h2.446c.412-.015.715-.246.752-.486.03-.197-.132-.422-.446-.528l-.124-.034-2.378-.516-.074-.015a1.043 1.043 0 00-.718.135zm12.612-.148l-.138.003-.138.021-2.442.531c-.366.094-.556.339-.523.552.036.225.305.44.677.48l.128.005h2.44c.406-.018.694-.238.744-.467l.008-.068-.001-.544c-.008-.126-.094-.261-.256-.365a1 1 0 00-.499-.148zm-5.562-8.032c1.032.001 2.066.1 3.106.297.35.078.623.182.838.322.24.155.366.31.514.587.388.89.737 1.806 1.043 2.744l.222.709.29.965H12.492l.29-.966a30.62 30.62 0 011.291-3.501c.24-.45.698-.712 1.343-.855a16.659 16.659 0 013.07-.301l.502.005zm.002 1.499l-.516.007c-1.098-.03-2.196.06-3.261.264l-.251.065c-.037.008-.054.009-.054-.006l.005-.018-.268.637c-.175.429-.34.863-.496 1.304l-.127.372h8.943l-.05-.15a28.85 28.85 0 00-.601-1.602l-.212-.503-.022-.012a1.173 1.173 0 00-.196-.068l-.092-.023a15.183 15.183 0 00-2.337-.259zM13.556 2.364l.665.083c1.221.2 2.079.653 2.717 1.522.235.316.546.881.896 1.611l.141.301.112-.029.102-.02.103-.015.21-.02h.338a1.87 1.87 0 011.313.477 1.8 1.8 0 01.589 1.166l.008.17v.587c0 .578-.269 1.087-.687 1.423l-.13.095-.057.034.03.082c.103.304.172.615.204.927-.398-.01-.795-.01-1.192-.001l-.323-.004a2.91 2.91 0 00-.298-.882l-.109-.189-.715-1.147h1.402c.186 0 .334-.119.368-.27l.007-.068V7.61a.298.298 0 00-.102-.221.36.36 0 00-.198-.088l-.087-.004h-.298a1.031 1.031 0 00-.438.124l-.096.06-.75.532-.37-.843c-.486-1.106-.933-1.977-1.18-2.31-.352-.48-.807-.744-1.544-.893l-.193-.036-.599-.074a18.55 18.55 0 00-1.208-.09l-.61-.015-.62.004a18.31 18.31 0 00-2.945.17c-.856.142-1.375.415-1.767.937-.21.28-.567.958-.972 1.846l-.206.461-.37.843-.75-.532a1.025 1.025 0 00-.413-.172l-.117-.012H3.1c-.175 0-.312.111-.343.251l-.007.062v.585c0 .16.125.298.305.33l.08.008 1.373.02-.704 1.128a2.905 2.905 0 00-.444 1.439v4.31a.3.3 0 00.1.223.37.37 0 00.184.091l.072.007h1.19c.098 0 .19-.036.257-.098a.31.31 0 00.093-.162l.006-.06v-1.182l4.84-.002c-.095.17-.194.354-.296.55l-.147.288h-.32l-.219.008a3.735 3.735 0 00-1.854.655h-.533v.011c-.051.27-.163.523-.326.743l-.104.128-.116.119a1.873 1.873 0 01-1.103.494l-.178.008h-1.19c-.476 0-.935-.179-1.28-.502a1.807 1.807 0 01-.569-1.153l-.008-.165.001-4.063a4.339 4.339 0 01.149-1.286l.075-.249.032-.09-.05-.03a1.83 1.83 0 01-.789-1.203l-.021-.17-.006-.145V7.61c0-.958.75-1.726 1.694-1.806l.151-.007.39.002c.091.004.182.014.272.028l.133.025.112.028.026-.053c.321-.69.615-1.251.855-1.628l.087-.132.074-.104c.648-.861 1.513-1.316 2.742-1.52a19.711 19.711 0 013.172-.187 19.97 19.97 0 012.598.11zM6.158 9.46l.204.028.095.02 1.955.452c.986.223 1.66 1.102 1.52 2.07-.126.865-.863 1.507-1.768 1.608l-.16.012-.077.001h-1.96c-1.004 0-1.868-.688-2-1.644l-.015-.153-.002-.53c0-.602.309-1.16.82-1.509.402-.275.897-.4 1.388-.355zm-.542 1.594a.366.366 0 00-.16.212l-.006.057v.469c.01.16.178.32.422.353l.095.006h1.995c.266-.01.461-.17.485-.337.02-.137-.08-.29-.278-.364l-.091-.028-1.94-.45-.057-.01a.641.641 0 00-.465.092zm11.615-1.239c.34.234.593.56.722.94-.99.018-2.035.1-3.066.245-.99.163-1.833.444-2.554.868l-.265.163-.015-.155c-.048-.82.487-1.558 1.301-1.848l.156-.049 2.032-.471a2.144 2.144 0 011.689.307zM11.405 4.05l.428.008c.572.02 1.144.078 1.72.176l.434.08c.304.073.545.17.738.304.217.15.329.297.46.559.318.777.603 1.579.855 2.4l.182.62.269.953H5.509l.27-.954a27.786 27.786 0 011.06-3.068c.213-.425.622-.676 1.193-.81a12.977 12.977 0 012.542-.267l.414.005zm.066 1.5l-.492.006a11.476 11.476 0 00-2.194.147l-.43.079-.106.026c-.04.01-.06.01-.063-.005l.003-.02-.205.52a26.27 26.27 0 00-.405 1.135l-.068.212h6.978l-.066-.21c-.126-.38-.257-.751-.393-1.11l-.196-.498-.094-.033-.076-.02a11.491 11.491 0 00-1.757-.217z"
      fill={color}
      fill-rule="evenodd"
    />
  </svg>
)

export default MyCars
