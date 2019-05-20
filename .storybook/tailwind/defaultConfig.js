"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:object-literal-sort-keys */
var transform_1 = require("./plugins/transform");
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
var colors = {
    black: "#000000",
    white: "#FFFFFF",
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
    facebook: "#4267B2",
    twitter: "#1EA0F2",
    whatsapp: "#0DC143"
};
exports.default = {
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
        "4xl": "72px"
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
    borderColors: __assign({ default: colors["grey-light"] }, colors),
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
        screen: "100vw"
    },
    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    | Class name: .h-{size}
    |
    */
    height: {
        "0": "0",
        "40": "40px",
        auto: "auto",
        full: "100%",
        screen: "100vh"
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
        screen: "100vh"
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
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Class name: .max-h-{size}
    |
    */
    maxHeight: {
        full: "100%"
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
        "5": "5px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "25": "25px",
        "30": "30px"
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
        "5": "5px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "25": "25px",
        "30": "30px"
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
        "0": "0"
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
        negative: -1
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
    rotate: {
        "180": "180deg"
    },
    plugins: [
        transform_1.default,
        require("tailwindcss-gradients")({
            gradients: {
                fade: ["rgba(255,255,255,0) 0%", "rgba(255,255,255,1) 100%"],
                grey: ["#F9F9FB 0%", "#FFFFFF 20%"],
                black: ["rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)"]
            }
        })
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
};
