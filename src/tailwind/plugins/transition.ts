const tailwindTransitionPlugin = ({ addUtilities, config }) => {
  const transitions = config("theme.transition")
  const transitionsUtilities = Object.keys(transitions).map(name => {
    return {
      [`.transition-${name}`]: {
        transition: transitions[name]
      }
    }
  })
  addUtilities(transitionsUtilities)
}

export default tailwindTransitionPlugin
