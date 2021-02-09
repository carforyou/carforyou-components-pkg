export const formatNumber = (
  value: number,
  { decimalSpaces = 0 } = {}
): string => {
  if (!value && value !== 0) {
    return ""
  }

  const [number, decimals] = value.toFixed(decimalSpaces).split(".")

  return [
    number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1’"),
    ...(decimals ? [decimals] : []),
  ].join(".")
}
