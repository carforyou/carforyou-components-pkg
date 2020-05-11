import React, { FC, useEffect, useState } from "react"
import useDeepCompareEffect from "use-deep-compare-effect"
import classNames from "classnames"

import { bootIntercom } from "./helper"
import ChatIcon from "../icons/chat"
import CloseIcon from "../icons/close"
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
   * Language to override the browser language with
   */
  language?: string
  /**
   * Wether the script should be automatically loaded
   */
  autoload?: boolean
  /**
   * All user related information
   */
  userInfo?: { [key: string]: number | string | boolean | undefined }
}

const intercomLauncherId = "intercomLauncher"

enum State {
  NotLoaded = "NotLoaded",
  Loading = "Loading",
  Ready = "Ready",
  Open = "Open",
}

const renderLauncher = (state: State, label) => {
  switch (state) {
    case "NotLoaded":
    case "Ready":
      return (
        <div className="flex items-center">
          <ChatIcon />
          {label}
        </div>
      )
    case "Loading":
      return (
        <div
          className="w-12/12 h-full flex items-center justify-center"
          data-testid="intercom-spinner"
        >
          <Spinner />
        </div>
      )
    case "Open": {
      return (
        <div
          className="w-12/12 h-full flex items-center justify-center"
          data-testid="intercom-close"
        >
          <CloseIcon />
        </div>
      )
    }
  }
}

export const Intercom: FC<Props> = ({
  appId,
  stage,
  label,
  language,
  autoload = false,
  userInfo = {},
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
    language_override: language,
    ...userInfo,
  }

  const intercomEventHandlers = {
    onOpen: () => setState(State.Open),
    onClose: () => setState(State.Ready),
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

  const isLoggedIn = userInfo.user_id && userInfo.email

  useEffect(() => {
    if (!isLoggedIn && window.Intercom) {
      window.Intercom("shutdown")
      bootIntercom(intercomSettings, intercomEventHandlers)
    }
  }, [isLoggedIn])

  return (
    <>
      <div
        className={classNames(
          "intercom-launcher sticky fixed text-white py-2 cursor-pointer transition-3 hover:opacity-60",
          state === State.Open ? "bg-teal" : "bg-grey-4"
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
        {renderLauncher(state, label)}
      </div>
    </>
  )
}

export default Intercom
