"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tailwindTransitionPlugin = function (_a) {
    var addUtilities = _a.addUtilities, config = _a.config;
    var transitions = config("theme.transition");
    var transitionsUtilities = Object.keys(transitions).map(function (name) {
        var _a;
        return _a = {},
            _a[".transition-" + name] = {
                transition: transitions[name]
            },
            _a;
    });
    addUtilities(transitionsUtilities);
};
exports.default = tailwindTransitionPlugin;
