import RangeFilterScale from "../rangeFilterScale"

describe("RangeFilterScale", () => {
  const mockRange = RangeFilterScale.toRange({
    3000: 1000,
    8000: 2500,
    10000: 2000,
    30000: 10000,
  })

  it("creates a correct scale", () => {
    const range = RangeFilterScale.toRange({
      3000: 1000,
      8000: 2500,
      10000: 2000,
      30000: 10000,
    })
    expect(range).toEqual([
      { from: null, key: "*-1000", to: 1000 },
      { from: 1000, key: "1000-2000", to: 2000 },
      { from: 2000, key: "2000-3000", to: 3000 },
      { from: 3000, key: "3000-5500", to: 5500 },
      { from: 5500, key: "5500-8000", to: 8000 },
      { from: 8000, key: "8000-10000", to: 10000 },
      { from: 10000, key: "10000-20000", to: 20000 },
      { from: 20000, key: "20000-30000", to: 30000 },
      { from: 30000, key: "30000-*", to: null },
    ])
  })

  it("returns the correct values for the min value", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: 0, max: null })).toEqual([0, 9])
  })

  it("returns the correct values for the max value", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: null, max: 25000 })).toEqual([0, 7])
  })

  it("returns the correct values for value larger than max", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: null, max: 30001 })).toEqual([0, 8])
  })

  it("returns the correct values for values within the range", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: 1500, max: 5800 })).toEqual([1, 4])
  })

  it("returns the minValue twice when the max < min or min > max", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toRange({ min: 1500, max: 50 })).toEqual([1, 1])
  })

  it("gets the value for an index", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toMinMax(2, 4, { min: 1000, max: 5500 })).toEqual({
      min: 2000,
      max: 5500,
    })
  })

  it("sets the value to null if the range is at the start", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toMinMax(0, 4, { min: 2000, max: 5500 })).toEqual({
      min: null,
      max: 5500,
    })
  })

  it("sets the value to null if the range is at the end", () => {
    const myRange = new RangeFilterScale(mockRange)
    expect(myRange.toMinMax(2, 9, { min: 2000, max: 22500 })).toEqual({
      min: 2000,
      max: null,
    })
  })
})
