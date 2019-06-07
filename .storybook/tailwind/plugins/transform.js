"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tailwindTransformPlugin = function (_a) {
    var addUtilities = _a.addUtilities, config = _a.config;
    var transform = config("theme.rotate");
    var transformUtilities = Object.keys(transform).map(function (name) {
        var _a;
        return _a = {},
            _a[".rotate-" + name] = {
                transform: "rotate(" + transform[name] + ")"
            },
            _a;
    });
    addUtilities(transformUtilities);
};
exports.default = tailwindTransformPlugin;
