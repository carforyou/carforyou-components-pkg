import { resolve } from "path"
import { sync } from "glob"

import { withDefaultConfig, defaultConfig } from "./tailwind/index"
import Button from "./components/button"
import Pagination from "./components/pagination"

export { Button, Pagination }

export default {
  tailwind: { withDefaultConfig, defaultConfig },
  getComponentPaths: () =>
    sync(resolve(__dirname, "../dist-src/components/**/*"), {
      nodir: true
    })
}
