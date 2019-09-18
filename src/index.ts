import { resolve } from "path"
import { sync } from "glob"

import { withDefaultConfig, defaultConfig } from "./tailwind/index"
import Button from "./components/button"

export { Button }

export default {
  tailwind: { withDefaultConfig, defaultConfig },
  getComponentPaths: () =>
    sync(resolve(__dirname, "../dist-src/components/**/*"), {
      nodir: true
    })
}
