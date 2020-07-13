import { calculateTooltipPosition, TooltipPosition } from "../index"

describe("#calculateTooltipPosition", () => {
  const container = {
    // window size is 1024x768
    // mock rect with 100px vertical and 200px horizontal space around
    getBoundingClientRect: () => ({
      top: 100,
      bottom: 668,
      left: 200,
      right: 824,
    }),
  }

  it("returns original position without a threshold", () => {
    expect(
      calculateTooltipPosition(container, TooltipPosition.top, null)
    ).toEqual(TooltipPosition.top)
  })

  describe("with enough space", () => {
    Object.entries(TooltipPosition).forEach(([name, value]) => {
      it(`returns original position for ${name}`, () => {
        expect(calculateTooltipPosition(container, value, 10)).toEqual(value)
      })
    })
  })

  describe("with not enough space", () => {
    const testCases = {
      top: { oppositePosition: TooltipPosition.bottom, threshold: 150 },
      topLeft: { oppositePosition: TooltipPosition.bottomLeft, threshold: 150 },
      topRight: {
        oppositePosition: TooltipPosition.bottomRight,
        threshold: 150,
      },
      bottom: { oppositePosition: TooltipPosition.top, threshold: 150 },
      bottomLeft: { oppositePosition: TooltipPosition.topLeft, threshold: 150 },
      bottomRight: {
        oppositePosition: TooltipPosition.topRight,
        threshold: 150,
      },
      left: { oppositePosition: TooltipPosition.right, threshold: 250 },
      right: { oppositePosition: TooltipPosition.left, threshold: 250 },
    }

    Object.entries(testCases).forEach(
      ([position, { oppositePosition, threshold }]) => {
        it(`switches ${position} to ${oppositePosition}`, () => {
          expect(
            calculateTooltipPosition(container, position, threshold)
          ).toEqual(oppositePosition)
        })
      }
    )
  })
})
