import { FC, useEffect } from "react"

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

const Intercom: FC<Props> = ({ appId, stage }) => {
  const intercomSettings = {
    cfy: true,
    app_id: appId,
    stage
  }

  useEffect(() => {
    loadIntercom(intercomSettings)
    window.Intercom("boot", intercomSettings)
  })

  return null
}

export default Intercom
