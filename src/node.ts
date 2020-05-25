import { resolve } from "path"
import { sync } from "glob"
import { withDefaultConfig, defaultConfig } from "./tailwind/index"

// Export node-only API
export default {
  tailwind: { withDefaultConfig, defaultConfig },
  getComponentPaths: () =>
    sync(resolve(__dirname, "../dist-src/components/**/*"), {
      nodir: true,
    }),
  getWhitelistPatterns: () => [
    /^w-.*\/12$/,
    /select_closed/,
    /select_open/,
    /select_withSearchIcon/,
    /select_withQuotes/,
  ],
}

// Export all components
export * from "./index"
