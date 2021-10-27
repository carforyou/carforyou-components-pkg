import RangeFilterScale from "../rangeFilterScale"

describe("RangeFilterScale", () => {
  const mockRange = [
    "*-1000",
    "1000-2000",
    "2000-22500",
    "22500-25000",
    "1000000-*",
  ]

  it("transforms the range to the correct backend request for facets", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.facets).toEqual([
      { from: null, key: "*-1000", to: 1000 },
      { from: 1000, key: "1000-2000", to: 2000 },
      { from: 2000, key: "2000-22500", to: 22500 },
      { from: 22500, key: "22500-25000", to: 25000 },
      { from: 1000000, key: "1000000-*", to: null },
    ])
  })

  it("returns the correct values for the min value", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: 0, max: null })).toEqual([0, 5])
  })

  it("returns the correct values for the max value", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: null, max: 25000 })).toEqual([0, 3])
  })

  it("returns the correct values for value larger than max", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: null, max: 1000001 })).toEqual([0, 4])
  })

  it("returns the correct values for values within the range", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: 1500, max: 22000 })).toEqual([1, 3])
  })

  it("returns the minValue twice when the max < min or min > max", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: 1500, max: 50 })).toEqual([1, 1])
  })

  it("gets the value for an index", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toMinMax(2, 3, { min: 1000, max: 22500 })).toEqual({
      min: 2000,
      max: 22500,
    })
  })

  it("sets the value to null if the range is at the start", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toMinMax(0, 3, { min: 2000, max: 22500 })).toEqual({
      min: null,
      max: 22500,
    })
  })

  it("sets the value to null if the range is at the end", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toMinMax(0, 5, { min: 2000, max: 22500 })).toEqual({
      min: null,
      max: null,
    })
  })
})
