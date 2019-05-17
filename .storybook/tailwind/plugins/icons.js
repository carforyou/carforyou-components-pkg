"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tailwindIconsPlugin = function (_a) {
    var addUtilities = _a.addUtilities, config = _a.config;
    var icons = config("icons");
    var iconUtilities = Object.keys(icons).map(function (name) {
        var _a;
        var className = function (position) {
            if (position === void 0) { position = null; }
            return ".icon-" + name + (position ? position : "");
        };
        return _a = {},
            _a[className()] = {
                "background-color": "transparent",
                "background-image": "url(" + icons[name] + ")",
                "background-position": "left",
                "background-repeat": "no-repeat"
            },
            _a[className("-left")] = {
                "background-color": "transparent",
                "background-image": "url(" + icons[name] + ")",
                "background-position": "left",
                "background-repeat": "no-repeat"
            },
            _a[className("-right")] = {
                "background-color": "transparent",
                "background-image": "url(" + icons[name] + ")",
                "background-position": "right",
                "background-repeat": "no-repeat"
            },
            _a[className("-center")] = {
                "background-color": "transparent",
                "background-image": "url(" + icons[name] + ")",
                "background-position": "center",
                "background-repeat": "no-repeat"
            },
            _a[className("-top-left")] = {
                "background-color": "transparent",
                "background-image": "url(" + icons[name] + ")",
                "background-position": "top left",
                "background-repeat": "no-repeat"
            },
            _a[className("-top-center")] = {
                "background-color": "transparent",
                "background-image": "url(" + icons[name] + ")",
                "background-position": "top center",
                "background-repeat": "no-repeat"
            },
            _a;
    });
    addUtilities(iconUtilities);
};
exports.default = tailwindIconsPlugin;
