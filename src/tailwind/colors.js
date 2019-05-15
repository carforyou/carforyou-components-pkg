const whitelistedColors = require("./whitelistedColors")

// tslint:disable:object-literal-sort-keys
const colors = {
  transparent: "transparent",

  salmon: "#F73B47",
  "salmon-dark": "#ED202D",
  teal: "#3696B9",
  "teal-dark": "#227D9E",

  "grey-dark": "#232A36",
  "grey-dark-opaque": "#A7AAAF",
  "grey-4": "#54575C",
  "grey-3": "#A0A7AB",
  "grey-2": "#D7DBDF",
  "grey-1": "#EBEFF1",
  "grey-bright": "#F9F9FB",

  "green-light": "#74CC74",

  "consumptionCategory-A": "#009324",
  "consumptionCategory-A+": "#009324",
  "consumptionCategory-B": "#2CAF00",
  "consumptionCategory-C": "#AACB00",
  "consumptionCategory-D": "#FFF300",
  "consumptionCategory-E": "#FFCB00",
  "consumptionCategory-F": "#FF8F00",
  "consumptionCategory-G": "#F70000",

  facebook: "#4267B2",
  twitter: "#1EA0F2",
  whatsapp: "#0DC143",

  maroon: "#800000",
  yellow: "#FFFF00",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  beige: "#F5F5DC",
  orange: "#FFA500",
  gold: "#FFD700",
  anthracite: "#293133",
  pink: "#FFC0CB",
  "light-blue": "#87CEFA",
  bronze: "#CD7F32",
  "medium-blue": "#009EE4",

  ...whitelistedColors
}
// tslint:enable:object-literal-sort-keys

module.exports = colors
