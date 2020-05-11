const tailwindTransformPlugin = ({ addUtilities, config }) => {
  const transform = config("theme.customRotate")

  const transformUtilities = Object.keys(transform).map((name) => {
    return {
      [`.customRotate-${name}`]: {
        transform: `rotate(${transform[name]})`,
      },
    }
  })
  addUtilities(transformUtilities)
}

export default tailwindTransformPlugin
