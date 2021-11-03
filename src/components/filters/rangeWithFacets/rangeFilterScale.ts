import { NumericMinMaxValue } from "./index"

export type RangeElement = {
  key: string
  from: number | null
  to: number | null
}

class RangeFilterScale {
  private readonly scale: number[]

  constructor(range: RangeElement[]) {
    this.scale = RangeFilterScale.transformRangesToScale(range)
  }

  /**
   * Creates a scale array for the filter definition
   * @param filter object where the key defines the threshold and the value the interval up until this threshold
   */
  public static toRange(filter: Record<number, number>): RangeElement[] {
    let currentValue = Object.values(filter)[0]
    const scale: RangeElement[] = [
      { from: null, to: currentValue, key: `*-${currentValue}` },
    ]
    Object.keys(filter).forEach((maxValue) => {
      while (currentValue < Number(maxValue)) {
        const nextValue = currentValue + filter[maxValue]
        scale.push({
          from: currentValue,
          to: nextValue,
          key: `${currentValue}-${nextValue}`,
        })
        currentValue = nextValue
      }
    })
    scale.push({
      from: currentValue,
      to: null,
      key: `${currentValue}-*`,
    })
    return scale
  }

  private static transformRangesToScale(ranges: RangeElement[]): number[] {
    return ranges.map((range, index) => {
      if (index === 0 && range.from === null) return 0
      return range.from
    })
  }

  private toIndex(value: number): number {
    const closestValue = this.scale.reduce(function (prev, curr) {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    })
    return this.scale.indexOf(closestValue)
  }

  private toValue(index: number): number {
    if (index === this.scale.length) {
      return null
    }
    return this.scale[index]
  }

  toMinMax(
    minIndex: number,
    maxIndex: number,
    previousSelection: NumericMinMaxValue
  ): NumericMinMaxValue {
    return {
      min: minIndex ? this.toValue(minIndex) : null,
      max: maxIndex ? this.toValue(maxIndex) : previousSelection.max,
    }
  }

  toRange(selection: NumericMinMaxValue): [number, number] {
    const maxValue = selection.max
      ? this.toIndex(selection.max)
      : this.getMaxIndex()
    const minValue = selection.min ? this.toIndex(selection.min) : 0

    const range: [number, number] = [minValue, maxValue]
    const sortedRange = [...range].sort((a, b) => a - b)

    return JSON.stringify(range) === JSON.stringify(sortedRange)
      ? range
      : [minValue, minValue]
  }

  getMaxIndex(): number {
    return this.scale.length
  }
}

export default RangeFilterScale
