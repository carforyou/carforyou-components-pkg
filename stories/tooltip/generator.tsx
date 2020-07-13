import React from "react"

import { wInfo } from "../utils"

import Tooltip from "../../src/components/tooltip"

const generateDescription = ({ position, positionSwitchThreshold }) => {
  return `
  Description
  ~~~
  <Tooltip
    renderContent={() => <div>Tooltip content.</div>}
    position="${position}"
${
  positionSwitchThreshold
    ? `    positionSwitchThreshold={${positionSwitchThreshold}}`
    : ""
}
  >
    <div>I have a tooltip</div>
  </Tooltip>
  ~~~
  `.replace(/^\s*[\r\n]/gm, "")
}

const generateStoryFunction = ({ position, positionSwitchThreshold }) => () => {
  return (
    <div className="mx-30 mb-40">
      <div className="text-2xl mb-20">Example</div>
      <div className="w-12/12 flex justify-center">
        <Tooltip
          renderContent={() => (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum urna augue, consectetur at sapien eu, facilisis
              gravida.
            </p>
          )}
          position={position}
          positionSwitchThreshold={positionSwitchThreshold}
        >
          <span>I have a tooltip</span>
        </Tooltip>
      </div>
    </div>
  )
}

const generateStory = ({
  position = "top",
  positionSwitchThreshold = null,
}) => {
  return wInfo(generateDescription({ position, positionSwitchThreshold }))(
    generateStoryFunction({ position, positionSwitchThreshold })
  )
}

export default generateStory
