import useDeepCompareEffect from "use-deep-compare-effect"
import React, { FC, useMemo, useState } from "react"
import classNames from "classnames"

import styles from "./index.module.css"
import { bootIntercom } from "./helper"
import Spinner from "../spinner"
import CloseIcon from "../icons/close"
import ChatIcon from "../icons/chat"

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
  const intercomSettings = useMemo(() => {
    return {
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
  }, [appId, language, stage, userInfo])

  const intercomEventHandlers = useMemo(() => {
    return {
      onOpen: () => setState(State.Open),
      onClose: () => setState(State.Ready),
    }
  }, [])

  const [state, setState] = useState<State>(State.NotLoaded)

  useDeepCompareEffect(() => {
    if (autoload) {
      bootIntercom(intercomSettings, intercomEventHandlers)
    }
  }, [intercomSettings, intercomEventHandlers, autoload])

  useDeepCompareEffect(() => {
    if (window.Intercom) {
      window.Intercom("update", userInfo)
    }
  }, [userInfo])

  const isLoggedIn = !!userInfo.user_id

  useDeepCompareEffect(() => {
    if (!isLoggedIn && window.Intercom) {
      window.Intercom("shutdown")
      bootIntercom(intercomSettings, intercomEventHandlers)
    }
  }, [intercomEventHandlers, intercomSettings, isLoggedIn])

  return (
    <>
      <div
        className={classNames(
          styles.launcher,
          "sticky fixed text-white py-2 cursor-pointer transition-3 hover:opacity-60 border border-grey-4",
          state === State.Open ? "bg-teal" : "bg-grey-dark"
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
export { Props as IntercomProps }
