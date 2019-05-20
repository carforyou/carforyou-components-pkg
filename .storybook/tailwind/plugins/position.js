"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tailwindPositionPlugin = function (_a) {
    var addUtilities = _a.addUtilities, config = _a.config;
    var positions = config("position");
    Object.keys(positions).map(function (position) {
        var positionsUtilities = Object.keys(positions[position]).map(function (name) {
            var _a, _b;
            return _a = {},
                _a[".position-" + position + "-" + name] = (_b = {},
                    _b[position] = positions[position][name],
                    _b),
                _a;
        });
        addUtilities(positionsUtilities, ["responsive"]);
    });
};
exports.default = tailwindPositionPlugin;
