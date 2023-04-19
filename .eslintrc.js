module.exports = {
  extends: ["@carforyou/eslint-config/react", "plugin:react-hooks/recommended"],
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ["*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-internal-modules": "off",
      },
    },
    {
      files: ["*"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
        "react-hooks/exhaustive-deps": [
          "error",
          {
            additionalHooks: "useDeepCompareEffect",
          },
        ],
        "no-restricted-imports": [
          "error",
          {
            patterns: ["~/src/assets/src"],
          },
        ],
        "no-restricted-modules": [
          "error",
          {
            patterns: ["~/src/assets/src"],
          },
        ],
      },
    },
  ],
  ignorePatterns: ["pkg", "src/assets/dist", "storybook-static"],
}
