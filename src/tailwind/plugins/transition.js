const tailwindTransitionPlugin = ({ addUtilities, config }) => {
  const transitions = config("transition")
  const transitionsUtilities = Object.keys(transitions).map(name => {
    return {
      [`.transition-${name}`]: {
        transition: transitions[name]
      }
    }
  })
  addUtilities(transitionsUtilities)
}

module.exports = { default: tailwindTransitionPlugin }
