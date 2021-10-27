import { NumericMinMaxValue } from "./index"

type SingleRangeElement = {
  key: string
  from: number | null
  to: number | null
}

type FacetsRange = SingleRangeElement[]

class RangeFilterScale {
  private readonly scale
  readonly facets

  constructor(range: string[]) {
    this.facets = this.rangeToFacets(range)
    this.scale = this.transformRangesToScale(range)
  }

  private transformRangesToScale(ranges: string[]): number[] {
    return ranges.map((range, index) => {
      if (index === 0 && range.startsWith("*")) return 0

      return Number(range.split("-")[0])
    })
  }

  private rangeToFacets = (ranges: string[]): FacetsRange => {
    return ranges.map((range) => {
      const [from, to] = range.split("-")
      return {
        key: range,
        from: from === "*" ? null : Number(from),
        to: to === "*" ? null : Number(to),
      }
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
