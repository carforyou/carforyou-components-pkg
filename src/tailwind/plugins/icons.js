const tailwindIconsPlugin = ({ addUtilities, config }) => {
  const icons = config("icons")
  const iconUtilities = Object.keys(icons).map(name => {
    const className = (position = null) =>
      `.icon-${name}${position ? position : ""}`
    return {
      [className()]: {
        "background-color": "transparent",
        "background-image": `url(${icons[name]})`,
        "background-position": "left",
        "background-repeat": "no-repeat"
      },
      [className("-left")]: {
        "background-color": "transparent",
        "background-image": `url(${icons[name]})`,
        "background-position": "left",
        "background-repeat": "no-repeat"
      },
      [className("-right")]: {
        "background-color": "transparent",
        "background-image": `url(${icons[name]})`,
        "background-position": "right",
        "background-repeat": "no-repeat"
      },
      [className("-center")]: {
        "background-color": "transparent",
        "background-image": `url(${icons[name]})`,
        "background-position": "center",
        "background-repeat": "no-repeat"
      },
      [className("-top-left")]: {
        "background-color": "transparent",
        "background-image": `url(${icons[name]})`,
        "background-position": "top left",
        "background-repeat": "no-repeat"
      },
      [className("-top-center")]: {
        "background-color": "transparent",
        "background-image": `url(${icons[name]})`,
        "background-position": "top center",
        "background-repeat": "no-repeat"
      }
    }
  })
  addUtilities(iconUtilities)
}

module.exports = { default: tailwindIconsPlugin }
