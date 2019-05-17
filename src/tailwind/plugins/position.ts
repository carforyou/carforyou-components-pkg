const tailwindPositionPlugin = ({ addUtilities, config }) => {
  const positions = config("position")
  Object.keys(positions).map(position => {
    const positionsUtilities = Object.keys(positions[position]).map(name => {
      return {
        [`.position-${position}-${name}`]: {
          [position]: positions[position][name]
        }
      }
    })
    addUtilities(positionsUtilities, ["responsive"])
  })
}

export default tailwindPositionPlugin
