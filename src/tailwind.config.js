/* tslint:disable:object-literal-sort-keys */

/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

*/
const path = require("path")
const colors = require("./tailwind/colors")

const tailwindConfig = {
  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Class name: .font-{name}
  |
  */

  fonts: {
    sans: "Muli, Century Gothic, Lucida Grande, Sans-Serif"
  },

  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  | Class name: .text-{size}
  |
  */

  textSizes: {
    "0": "0px",
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "21px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "48px",
    "4xl": "72px",
    icon: "19px",
    favourites: "11px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  | Class name: .font-{weight}
  |
  */

  fontWeights: {
    regular: 400,
    bold: 700
  },

  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Class name: .leading-{size}
  |
  */

  leading: {
    none: 1,
    xxs: 0.9,
    xs: 1.25,
    sm: 1.5,
    md: 2,
    lg: 2.5,
    xl: 3
  },

  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

  tracking: {
    normal: "0",
    wide: "1px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Class name: .text-{color}
  |
  */

  textColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Class name: .bg-{color}
  |
  */

  backgroundColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Class name: .bg-{size}
  |
  */

  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain",
    "12": "12px",
    "18": "18px",
    "24": "24px",
    "32": "32px",
    "36": "36px",
    "42": "42px",
    "40": "40px",
    "47": "47px",
    "57": "57px",
    "60": "60px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Class name: .border{-side?}{-width?}
  |
  */

  borderWidths: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "5": "5px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Class name: .border-{color}
  |
  */

  borderColors: global.Object.assign({ default: colors["grey-light"] }, colors),

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Class name: .rounded{-side?}{-size?}
  |
  */

  borderRadius: {
    none: "0",
    default: ".25rem",
    "2": "2px",
    "4": "4px",
    "6": "6px",
    "10": "10px",
    "14": "14px",
    "20": "20px",
    full: "9999px",
    half: "50%"
  },

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Class name: .w-{size}
  |
  */

  width: {
    "0": "0",
    auto: "auto",
    "1/12": "8.33333333%",
    "2/12": "16.66667%",
    "3/12": "25%",
    "4/12": "33.33333%",
    "5/12": "41.66666667%",
    "6/12": "50%",
    "7/12": "58.33333333%",
    "8/12": "66.66667%",
    "9/12": "75%",
    "10/12": "83.33333%",
    "11/12": "91.66666667",
    "12/12": "100%",
    screen: "100vw",
    "19": "19px",
    "16": "16px",
    "20": "20px",
    "32": "32px",
    "36": "36px",
    "42": "42px",
    "96": "96px",
    "110": "110px",
    "140": "140px",
    "145": "145px",
    "167": "167px",
    "200": "200px",
    "250": "250px",
    "340": "340px",
    "370": "370px",
    "400": "400px",
    "450": "450px",
    "485": "485px",
    "560": "560px",
    brandIcon: "48px",
    brandIconMD: "64px",
    bodyColor: "48px",
    scrollbar: "14px",
    moneybackLogoM: "47px",
    axaLogo: "24px",
    goodDealInfo: "720px",
    logoBig: "170px",
    logoSmall: "25px",
    heartSmall: "24px",
    heartBig: "50px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  | Class name: .h-{size}
  |
  */

  height: {
    auto: "auto",
    px: "1px",
    full: "100%",
    screen: "100vh",
    "19": "19px",
    "20": "20px",
    "23": "23px",
    "25": "25px",
    "30": "30px",
    "32": "32px",
    "36": "36px",
    "40": "40px",
    "42": "42px",
    "45": "45px",
    "48": "48px",
    "50": "50px",
    "56": "56px",
    "60": "60px",
    "64": "64px",
    "96": "96px",
    "148": "148px",
    headerImage: "350px",
    listingSM: "214px",
    listingMD: "260px",
    carouselCard: "180px",
    carouselCardWithFooter: "220px",
    brandIcon: "48px",
    brandIconMD: "64px",
    brandContainer: "80px",
    bodyColor: "48px",
    checkIcon: "36px",
    scrollbar: "70px",
    moneybackLogoM: "47px",
    axaLogo: "24px",
    naGradient: "120px",
    favourites: "14px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Class name: .min-w-{size}
  |
  */

  minWidth: {
    "0": "0",
    full: "100%",
    "180": "180px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Class name: .min-h-{size}
  |
  */

  minHeight: {
    "0": "0",
    "40": "40px",
    auto: "auto",
    full: "100%",
    screen: "100vh",
    imagePlaceholder: "250px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Class name: .max-w-{size}
  |
  */

  maxWidth: {
    full: "100%",
    smallCard: "350px",
    container: "1200px",
    searchContainer: "1680px",
    staticPages: "780px",
    needsAssessment: "1060px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Class name: .max-h-{size}
  |
  */

  maxHeight: {
    full: "100%",
    "200": "200px",
    dropdown: "240px",
    dropdownSM: "190px",
    screen: "100vh",
    listingSM: "214px",
    listingMD: "260px",
    carouselCard: "180px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Class name: .p{side?}-{size}
  |
  */

  padding: {
    auto: "auto",
    px: "1px",
    "0": "0",
    "2": "2px",
    "3": "3px",
    "5": "5px",
    "8": "8px",
    "10": "10px",
    "12": "12px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "25": "25px",
    "30": "30px",
    "33": "33px",
    "35": "35px",
    "40": "40px",
    "50": "50px",
    "60": "60px",
    "68": "68px",
    "70": "70px",
    "80": "80px",
    "90": "90px",
    "110": "110px",
    "130": "130px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Class name: .m{side?}-{size}
  |
  */

  margin: {
    auto: "auto",
    px: "1px",
    "0": "0",
    "2": "2px",
    "3": "3px",
    "5": "5px",
    "8": "8px",
    "10": "10px",
    "12": "12px",
    "15": "15px",
    "20": "20px",
    "30": "30px",
    "40": "40px",
    "50": "50px",
    "60": "60px",
    "80": "80px",
    "90": "90px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Class name: .-m{side?}-{size}
  |
  */

  negativeMargin: {
    px: "1px",
    "0": "0",
    "3": "3px",
    "5": "5px",
    "10": "10px",
    "12": "12px",
    "15": "15px",
    "20": "20px",
    "30": "30px",
    "40": "40px",
    "45": "45px",
    "50": "50px",
    "60": "60px",
    "96": "96px",
    checkmarkIcon: "16px",
    dropdownMenu: "11px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

  shadows: {
    none: "none",
    default: "0 2px 4px 0 rgba(0,0,0,0.10)",
    small: "0 2px 6px 0 rgba(35,42,54,0.1)",
    soft: "0 4px 18px 0 rgba(35,42,54,0.1)",
    hard: "0 4px 18px 0 rgba(35,42,54,0.4)",
    harder: "0 0 18px 0 rgba(35,42,54,0.8)"
  },

  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Class name: .z-{index}
  |
  */

  zIndex: {
    auto: "auto",
    negative: -1,
    "0": 0,
    "1": 1,
    "10": 10,
    "20": 20,
    "30": 30
  },

  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Class name: .opacity-{name}
  |
  */

  opacity: {
    "0": "0",
    "10": ".1",
    "20": ".2",
    "40": ".4",
    "60": ".6",
    "80": ".8",
    "100": "1"
  },

  /*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Class name: .fill-{name}
  |
  */

  svgFill: colors,

  /*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Class name: .stroke-{name}
  |
  */

  svgStroke: {
    current: "currentColor"
  },

  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  modules: {
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColors: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: [],
    borderColors: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidths: ["responsive", "hover"],
    cursor: ["responsive"],
    display: ["responsive"],
    flexbox: ["responsive"],
    float: ["responsive"],
    fonts: ["responsive"],
    fontWeights: ["responsive", "hover", "focus"],
    height: ["responsive"],
    leading: ["responsive"],
    lists: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    negativeMargin: ["responsive"],
    opacity: ["responsive", "hover"],
    outline: ["focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    shadows: ["responsive", "hover", "focus"],
    svgFill: [],
    svgStroke: [],
    textAlign: ["responsive"],
    textColors: ["responsive", "hover", "focus"],
    textSizes: ["responsive"],
    textStyle: ["responsive", "hover", "focus"],
    tracking: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    zIndex: ["responsive"]
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  content: {
    after: {
      slash: "/"
    }
  },

  position: {
    top: {
      "-160": "-160px",
      "-65": "-65px",
      "-13": "-13px",
      "3": "3px",
      "8": "8px",
      "28": "28px",
      "30": "30px",
      "35": "35px",
      "200": "200px",
      half: "50%"
    },
    bottom: {
      "-65": "-65px",
      "-20": "-20px",
      "5": "5px",
      "10": "10px",
      "15": "15px",
      "28": "28px",
      "35": "35px",
      "40": "40px",
      "50": "50px",
      "60": "60px",
      "100": "100px"
    },
    left: {
      auto: "auto",
      "-75": "-75px",
      "8": "8px",
      "13": "13px",
      "25": "25px",
      half: "50%"
    },
    right: {
      "-75": "-75px",
      "-35": "-35px",
      "-15": "-15px",
      "-5": "-5px",
      "10": "10px",
      "20": "20px",
      "30": "30px"
    }
  },

  transition: {
    "2": "0.2s",
    "3": "all .3s"
  },

  rotate: {
    "180": "180deg",
  },

  plugins: [
    // require("./tailwind/plugins/icons").default,
    require("./tailwind/plugins/content").default,
    require("./tailwind/plugins/position").default,
    require("./tailwind/plugins/transition").default,
    require("./tailwind/plugins/transform").default,
    require("tailwindcss/plugins/container")(),
    require("tailwindcss-gradients")({
      gradients: {
        fade: ["rgba(255,255,255,0) 0%", "rgba(255,255,255,1) 100%"],
        grey: ["#F9F9FB 0%", "#FFFFFF 20%"],
        black: ["rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)"]
      }
    }),
  ],

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  options: {
    prefix: "",
    important: false,
    separator: ":"
  }
}

module.exports = tailwindConfig
