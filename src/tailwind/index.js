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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = exports.withDefaultConfig = void 0;
var deepmerge_1 = __importDefault(require("deepmerge"));
var defaultConfig_1 = __importDefault(require("./defaultConfig"));
var mergeDeep = deepmerge_1.default;
var resolveConfig = function (config) {
    var theme = {};
    var getKey = function (key) {
        return defaultConfig_1.default.theme[key];
    };
    for (var conf in config.theme) {
        if (Object.prototype.hasOwnProperty.call(config.theme, conf)) {
            theme[conf] =
                typeof config.theme[conf] === "function"
                    ? config.theme[conf](getKey)
                    : config.theme[conf];
        }
    }
    return __assign(__assign({}, config), { theme: theme });
};
var resolvedConfig = resolveConfig(defaultConfig_1.default);
exports.defaultConfig = resolvedConfig;
var withDefaultConfig = function (customConfig) {
    var customTheme = resolveConfig(customConfig);
    return mergeDeep(resolvedConfig, customTheme || {});
};
exports.withDefaultConfig = withDefaultConfig;
