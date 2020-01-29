import React, { FC, useEffect, useState } from "react"
import useDeepCompareEffect from "use-deep-compare-effect"
import classNames from "classnames"

import { bootIntercom } from "./helper"
import ChatTinyFilled from "../icons/ChatTinyFilled"
import Close from "../icons/Close"
import Spinner from "../spinner"

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

const widgetBody = (state: State, label) => {
  switch (state) {
    case "NotLoaded":
    case "Ready":
      return (
        <div className="flex items-center">
          <ChatTinyFilled />
          {label}
        </div>
      )
    case "Loading":
      return (
        <Spinner className="w-12/12 h-full flex items-center justify-center" />
      )
    case "Open": {
      return (
        <div className="w-12/12 h-full flex items-center justify-center">
          <Close />
        </div>
      )
    }
  }
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
      className={classNames(
        "z-intercom text-white pl-intercomLeft pr-intercomRight py-2 fixed bottom-intercomSmall md:bottom-intercomBig right-intercomSmall md:right-intercomBig rounded-intercom cursor-pointer h-intercom min-w-intercom transition-3",
        state === State.Open ? "bg-intercom" : "bg-grey-4"
      )}
      id={intercomLauncherId}
      onClick={() => {
        if (state === State.NotLoaded) {
          setState(State.Loading)
          bootIntercom(intercomSettings, intercomEventHandlers)
          window.Intercom("show")
        }
      }}
    >
      {widgetBody(state, label)}
    </div>
  )
}

export default Intercom
