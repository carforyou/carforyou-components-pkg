import React, { FC, useEffect } from "react"
import useDeepCompareEffect from "use-deep-compare-effect"

import { bootIntercom } from "./helper"

interface Props {
  /**
   * Intercom app/workplace id
   */
  appId: string
  /**
   * Deployment stage
   */
  stage: string
  /**
   * Wether the script should be automatically loaded
   */
  autoload?: boolean
  /**
   * All user related information
   */
  userInfo?: object
}

const intercomLauncherId = "intercomLauncher"

const Intercom: FC<Props> = ({
  appId,
  stage,
  autoload = false,
  userInfo = {}
}) => {
  const intercomSettings = {
    cfy: true,
    app_id: appId,
    stage,
    custom_launcher_selector: `#${intercomLauncherId}`,
    hide_default_launcher: true,
    alignment: "right",
    horizontal_padding: 20,
    vertical_padding: 110,
    ...userInfo
  }

  useEffect(() => {
    if (autoload) {
      bootIntercom(intercomSettings)
    }
  })

  useDeepCompareEffect(() => {
    if (window.Intercom) {
      window.Intercom("update", userInfo)
    }
  }, [userInfo])

  return (
    <div
      className="w-intercom h-intercom z-intercom bg-salmon fixed bottom-30 right-20 rounded-full cursor-pointer"
      id={intercomLauncherId}
      onClick={() => {
        if (!window.Intercom) {
          bootIntercom(intercomSettings)
          window.Intercom("show")
        }
      }}
    />
  )
}

export default Intercom
