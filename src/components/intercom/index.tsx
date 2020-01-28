import React, { FC } from "react"

import { loadIntercom } from "./helper"

interface Props {
  /**
   * Intercom app/workplace id
   */
  appId: string
  /**
   * Deployment stage
   */
  stage: string
}

declare global {
  interface Window {
    Intercom: (event: string, options?: object) => void
    intercomSettings: object
  }
}

const intercomLauncherId = "intercomLauncher"

const Intercom: FC<Props> = ({ appId, stage }) => {
  const intercomSettings = {
    cfy: true,
    app_id: appId,
    stage,
    custom_launcher_selector: `#${intercomLauncherId}`,
    hide_default_launcher: true,
    alignment: "right",
    horizontal_padding: 20,
    vertical_padding: 110
  }
  return (
    <div
      className="w-intercom h-intercom z-intercom bg-salmon fixed bottom-30 right-20 rounded-full cursor-pointer"
      id={intercomLauncherId}
      onClick={() => {
        loadIntercom(intercomSettings)
        window.Intercom("boot", intercomSettings)
      }}
    />
  )
}

export default Intercom
