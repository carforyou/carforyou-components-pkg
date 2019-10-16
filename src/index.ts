import { resolve } from "path"
import { sync } from "glob"

import { withDefaultConfig, defaultConfig } from "./tailwind/index"
import Button from "./components/button"

import Dropdown from "./components/dropdown/index"
import DropdownWithAutosuggest from "./components/dropdown/withAutosuggest"

import SegmentedControl from "./components/segmentedControl/index"

export { Button, Dropdown, DropdownWithAutosuggest, SegmentedControl }

export default {
  tailwind: { withDefaultConfig, defaultConfig },
  getComponentPaths: () =>
    sync(resolve(__dirname, "../dist-src/components/**/*"), {
      nodir: true
    })
}
