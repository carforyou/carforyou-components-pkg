import { withDefaultConfig, defaultConfig } from "../tailwind"

describe("tailwind", () => {
  describe("defaultConfig", () => {
    it("is accessible", () => {
      expect(defaultConfig).toMatchSnapshot()
    })
    it("returns colors", () => {
      expect(Object.keys(defaultConfig.theme.colors)).toHaveLength(18)
      expect(defaultConfig.theme.colors.salmon).toEqual("#F73B47")
    })
  })

  describe("withDefaultConfig", () => {
    it("returns withDefaultConfig by default", () => {
      const mergedConfig = withDefaultConfig({})
      expect(mergedConfig).toEqual(defaultConfig)
    })

    it("can override full objects", () => {
      const mergedConfig = withDefaultConfig({})
      mergedConfig.theme.colors = { tuna: "#4E5154" }
      expect(mergedConfig.theme.colors).toEqual({ tuna: "#4E5154" })
    })

    it("can extend objects", () => {
      const colorCount = Object.keys(defaultConfig.theme.colors).length
      const mergedConfig = withDefaultConfig({
        theme: { colors: { tuna: "#4E5154" } }
      })

      expect(Object.keys(mergedConfig.theme.colors)).toHaveLength(
        colorCount + 1
      )
      expect(mergedConfig.theme.colors.tuna).toEqual("#4E5154")
      expect(mergedConfig.theme.colors.salmon).toEqual("#F73B47")
    })

    it("can extend arrays", () => {
      const pluginCount = Object.keys(defaultConfig.plugins).length
      const mergedConfig = withDefaultConfig({ plugins: [jest.fn()] })

      expect(Object.keys(mergedConfig.plugins)).toHaveLength(pluginCount + 1)
    })
  })
})
