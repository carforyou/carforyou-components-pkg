const tailwindContentPlugin = ({ addUtilities, config }) => {
  const positions = config("content")
  Object.keys(positions).map(position => {
    const contentsUtilities = Object.keys(positions[position]).map(name => {
      return {
        [`.${position}-${name}::${position}`]: {
          content: `"${positions[position][name]}"`
        }
      }
    })
    addUtilities(contentsUtilities)
  })
}

module.exports = { default: tailwindContentPlugin }
