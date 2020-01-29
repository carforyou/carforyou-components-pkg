import React, { FC, useEffect, useState } from "react"
import useDeepCompareEffect from "use-deep-compare-effect"

import { bootIntercom } from "./helper"
import ChatTinyFilled from "../icons/ChatTinyFilled"

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
   * Label to be shown on the button
   */
  label: string
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

enum State {
  NotLoaded = "NotLoaded",
  Loading = "Loading",
  Ready = "Ready",
  Open = "Open"
}

const Intercom: FC<Props> = ({
  appId,
  stage,
  label,
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
    vertical_padding: 76,
    ...userInfo
  }

  const intercomEventHandlers = {
    onLoad: () => setState(State.Ready),
    onOpen: () => setState(State.Open),
    onClose: () => setState(State.Ready)
  }

  const [state, setState] = useState<State>(State.NotLoaded)

  useEffect(() => {
    if (autoload) {
      bootIntercom(intercomSettings, intercomEventHandlers)
    }
  })

  useDeepCompareEffect(() => {
    if (window.Intercom) {
      window.Intercom("update", userInfo)
    }
  }, [userInfo])

  return (
    <div
      className="z-intercom bg-grey-4 text-white pl-intercomLeft pr-intercomRight py-2 fixed bottom-intercomSmall md:bottom-intercomBig right-intercomSmall md:right-intercomBig rounded-intercom cursor-pointer"
      id={intercomLauncherId}
      onClick={() => {
        if (!window.Intercom) {
          bootIntercom(intercomSettings, intercomEventHandlers)
          window.Intercom("show")
        }
      }}
    >
      <div className="flex items-center">
        <ChatTinyFilled />
        {label}
      </div>
    </div>
  )
}

export default Intercom
