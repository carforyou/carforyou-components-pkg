// import Pagination from "./components/pagination"
import Button from "./components/button"
import { withDefaultConfig, defaultConfig } from "./tailwind/index"

import { sync } from "glob"

// export { Pagination, ImageAsset }
export { Button }

export default {
  tailwind: { withDefaultConfig, defaultConfig },
  getComponentPaths: () =>
    sync("node_modules/@carforyou/components/dist-src/components/**/*", {
      ignore: "**/__*__/**",
      nodir: true
    })
}
