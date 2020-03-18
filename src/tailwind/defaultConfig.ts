/* tslint:disable:object-literal-sort-keys */
import TransformPlugin from "./plugins/transform"
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
export default {
  theme: {
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
      lg: "1024px",
      xl: "1280px"
    },

    colors: {
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
      salmon: "#F73B47",
      "salmon-dark": "#ED202D",
      teal: "#3696B9",
      "teal-light": "#D7EAF1",
      "teal-bright": "#AFD5E3",
      "teal-dark": "#227D9E",
      "grey-dark": "#232A36",
      "grey-dark-opaque": "#A7AAAF",
      "grey-4": "#54575C",
      "grey-3": "#A0A7AB",
      "grey-2": "#D7DBDF",
      "grey-1": "#EBEFF1",
      "grey-bright": "#F9F9FB",
      "green-light": "#74CC74",
      facebook: "#4267B2",
      twitter: "#1EA0F2",
      whatsapp: "#0DC143",
      "high-deal": "#E34A15",
      "fair-deal": "#EAA403",
      "good-deal": "#81B040",
      "great-deal": "#149246",
      "not-defined": "#A0A7AB"
    },

    /*
   |-----------------------------------------------------------------------------
   | Background colors             https://tailwindcss.com/docs/background-color
   |-----------------------------------------------------------------------------
   |
   | Class name: .bg-{color}
   |
   */
    backgroundColor: theme => theme("colors"),

    /*
   |-----------------------------------------------------------------------------
   | Background position        https://tailwindcss.com/docs/background-position
   |-----------------------------------------------------------------------------
   |
   | Class name: .bg-{position}
   |
   */
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },

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
      contain: "contain"
    },

    /*
    |-----------------------------------------------------------------------------
    | Border colors                     https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    |
    | Class name: .border-{color}
    |
    */
    borderColor: theme => ({
      ...theme("colors"),
      default: theme("colors.grey-light", "currentColor")
    }),

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
      default: "4px",
      full: "9999px",
      half: "50%",
      "2": "2px",
      "10": "10px",
      "20": "20px"
    },

    /*
    |-----------------------------------------------------------------------------
    | Border widths                     https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    |
    | Class name: .border{-side?}{-width?}
    |
    */
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "5": "5px"
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
    boxShadow: {
      none: "none",
      default: "0 2px 4px 0 rgba(0,0,0,0.10)",
      small: "0 2px 6px 0 rgba(35,42,54,0.1)",
      soft: "0 4px 18px 0 rgba(35,42,54,0.1)",
      hard: "0 4px 18px 0 rgba(35,42,54,0.4)",
      harder: "0 0 18px 0 rgba(35,42,54,0.8)",
      focus: "0px 0px 1px 2px rgba(54, 150, 185, 0.6)"
    },

    /*
    |-----------------------------------------------------------------------------
    | Fonts                                    https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    |
    | Class name: .font-{name}
    |
    */
    fontFamily: {
      sans: ["Muli, Century Gothic, Lucida Grande, Sans-Serif"]
    },

    /*
    |-----------------------------------------------------------------------------
    | Text sizes                         https://tailwindcss.com/docs/text-sizing
    |-----------------------------------------------------------------------------
    | Class name: .text-{size}
    |
    */
    fontSize: {
      "0": "0px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "21px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "48px",
      "4xl": "72px"
    },

    /*
    |-----------------------------------------------------------------------------
    | Font weights                       https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    | Class name: .font-{weight}
    |
    */
    fontWeight: {
      regular: 400,
      bold: 700
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
      full: "100%",
      screen: "100vh",
      scrollbar: "70px",
      clearButton: "32px",
      "40": "40px"
    },

    /*
    |-----------------------------------------------------------------------------
    | Position      https://tailwindcss.com/docs/top-right-bottom-left
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your values for positioning
    |
    |
    | Class name: .{top|right|bottom|left|inset}-{size}
    |
    */

    inset: {
      "0": 0,
      auto: "auto",
      half: "50%",
      requiredIndicator: "5px"
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
    letterSpacing: {
      normal: "0",
      wide: "1px"
    },

    /*
    |-----------------------------------------------------------------------------
    | Leading (line height)              https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    |
    | Class name: .leading-{size}
    |
    */
    lineHeight: {
      none: 1,
      xxs: 0.9,
      xs: 1.25,
      sm: 1.5,
      md: 2,
      lg: 2.5,
      xl: 3,
      label: "24px"
    },

    /*
    |-----------------------------------------------------------------------------
    | Margin/Negative margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | Class name: .m{side?}-{size}
    | Class name: .-m{side?}-{size}
    |
    */

    margin: {
      auto: "auto",
      px: "1px",
      "0": "0",
      "5": "5px",
      "10": "10px",
      "15": "15px",
      "20": "20px",
      "25": "25px",
      "30": "30px",
      "40": "40px"
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Class name: .max-h-{size}
    |*/

    maxHeight: {
      full: "100%",
      dropdown: "240px",
      dropdownSM: "190px"
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
      full: "100%"
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
      auto: "auto",
      full: "100%",
      screen: "100vh",
      "36": "36px",
      "52": "52px"
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
      auto: "auto",
      full: "100%",
      screen: "100vw"
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
    | Padding                                  https://tailwindcss.com/docs/margin
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
      "5": "5px",
      "8": "8px",
      "10": "10px",
      "13": "13px",
      "14": "14px",
      "15": "15px",
      "16": "16px",
      "20": "20px",
      "25": "25px",
      "30": "30px",
      "40": "40px"
    },

    customRotate: {
      "90": "90deg",
      "180": "180deg",
      "270": "270deg",
      "360": "360deg"
    },
    /*
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | Class name: .text-{color}
    |
    */
    textColor: theme => theme("colors"),

    /*
    |-----------------------------------------------------------------------------
    | Width                                    https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    |
    | Class name: .w-{size}
    |
    */

    width: {
      auto: "auto",
      "0": "0",
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
      "11/12": "91.66666667%",
      "12/12": "100%",
      screen: "100vw",
      scrollbar: "14px",
      clearButton: "32px"
    },

    transitionDuration: {
      "200": "200ms"
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
      clearButton: 10,
      dropdownMenu: 20
    },

    /*
    |-----------------------------------------------------------------------------
    | Gradients                  https://github.com/benface/tailwindcss-gradients
    |-----------------------------------------------------------------------------
    |
    | Class name: .bg-gradient-{direction}-{color}
    |
    */
    linearGradients: theme => ({
      directions: {
        "to-top": "to top",
        "to-right": "to right",
        "to-bottom": "to bottom",
        "to-left": "to left"
      },
      colors: {
        fade: ["rgba(255,255,255,0) 90%", "rgba(255,255,255,1) 100%"],
        grey: [theme("colors")["grey-bright"], `${theme("colors").white} 20%`],
        black: ["rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)"]
      }
    })
  },

  variants: {
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive", "hover"],
    boxShadow: ["responsive", "hover", "focus"],
    cursor: ["responsive"],
    display: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "hover"],
    order: ["responsive"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    stroke: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus", "focus-within"],
    textDecoration: ["responsive", "hover", "focus"],
    textTransform: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive"],
    gap: ["responsive"],
    scale: ["responsive", "hover", "focus"],
    translate: ["responsive", "hover", "focus"],
    skew: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "hover"],
    transitionTimingFunction: ["responsive", "hover"],
    transitionDuration: ["responsive", "hover"]
  },
  corePlugins: {},
  plugins: [TransformPlugin, require("tailwindcss-gradients")()]
}
