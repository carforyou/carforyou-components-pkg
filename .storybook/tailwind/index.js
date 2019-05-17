"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_ = require("merge-deep");
var defaultConfig_1 = require("./defaultConfig");
exports.defaultConfig = defaultConfig_1.default;
var mergeDeep = merge_;
var withDefaultConfig = function (customConfig) {
    return mergeDeep(defaultConfig_1.default, customConfig || {});
};
exports.withDefaultConfig = withDefaultConfig;
