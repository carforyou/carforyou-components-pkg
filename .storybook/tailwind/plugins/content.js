"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tailwindContentPlugin = function (_a) {
    var addUtilities = _a.addUtilities, config = _a.config;
    var positions = config("content");
    Object.keys(positions).map(function (position) {
        var contentsUtilities = Object.keys(positions[position]).map(function (name) {
            var _a;
            return _a = {},
                _a["." + position + "-" + name + "::" + position] = {
                    content: "\"" + positions[position][name] + "\""
                },
                _a;
        });
        addUtilities(contentsUtilities);
    });
};
exports.default = tailwindContentPlugin;
