import { tailwind } from "../index"

const { withDefaultTheme, defaultTheme } = tailwind

describe("tailwind", () => {
  describe("defaultTheme", () => {
    it("is accessible", () => {
      expect(defaultTheme).toMatchSnapshot()
    })

    it("returns colors", () => {
      expect(defaultTheme.colors.salmon).toEqual("#F73B47")
    })
  })

  describe("withDefaultTheme", () => {
    it("returns defaultTheme if nothing is passed", () => {
      const mergedTheme = withDefaultTheme({})
      expect(mergedTheme).toEqual(defaultTheme)
    })

    it("can extend objects", () => {
      const colorCount = Object.keys(defaultTheme.colors).length
      const mergedTheme = withDefaultTheme({
        colors: { tuna: "#4E5154" },
      })

      expect(Object.keys(mergedTheme.colors)).toHaveLength(colorCount + 1)
      expect(mergedTheme.colors.tuna).toEqual("#4E5154")
      expect(mergedTheme.colors.salmon).toEqual("#F73B47")
    })

    it("can extend objects for properties that extends colors", () => {
      expect(defaultTheme.borderColor.salmon).toEqual("#F73B47")

      const borderColorCount = Object.keys(defaultTheme.borderColor).length
      const mergedTheme = withDefaultTheme({
        borderColor: { tuna: "#4E5154" },
      })

      expect(Object.keys(mergedTheme.borderColor)).toHaveLength(
        borderColorCount + 1
      )

      expect(mergedTheme.borderColor.tuna).toEqual("#4E5154")
      expect(mergedTheme.borderColor.salmon).toEqual("#F73B47")
    })
  })
})
