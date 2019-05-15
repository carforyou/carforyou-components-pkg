const tailwindTransformPlugin = ({ addUtilities, config }) => {
  const transform = config("rotate")
  const transformUtilities = Object.keys(transform).map(name => {
    return {
      [`.rotate-${name}`]: {
        transform: `rotate(${transform[name]})`
      }
    }
  })
  addUtilities(transformUtilities)
}

module.exports = { default: tailwindTransformPlugin }
