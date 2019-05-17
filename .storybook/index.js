"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_deep_1 = require("merge-deep");
var defaultConfig_1 = require("./defaultConfig");
exports.defaultConfig = defaultConfig_1.default;
var withDefaultConfig = function (customConfig) {
    return merge_deep_1.default(defaultConfig_1.default, customConfig);
};
exports.withDefaultConfig = withDefaultConfig;
