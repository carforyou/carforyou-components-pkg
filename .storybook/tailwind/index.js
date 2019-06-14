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
var merge_ = require("merge-deep");
var defaultConfig_1 = require("./defaultConfig");
var mergeDeep = merge_;
var getKey = function (key) {
    return defaultConfig_1.default.theme[key];
};
var getConfigWithValues = function (config) {
    var configWithValues = {};
    for (var conf in config.theme) {
        configWithValues[conf] =
            typeof config.theme[conf] === "function"
                ? config.theme[conf](getKey)
                : config.theme[conf];
    }
    return __assign({}, config, { theme: configWithValues });
};
var defaultConfigWithValues = getConfigWithValues(defaultConfig_1.default);
exports.defaultConfig = defaultConfigWithValues;
var withDefaultConfig = function (customConfig) {
    var customConfigWithValues = getConfigWithValues(customConfig);
    return mergeDeep(defaultConfigWithValues, customConfigWithValues || {});
};
exports.withDefaultConfig = withDefaultConfig;
