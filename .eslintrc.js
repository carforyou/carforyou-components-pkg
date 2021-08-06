module.exports = {
  extends: ["@carforyou/eslint-config/react", "plugin:react-hooks/recommended"],
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
        "react-hooks/exhaustive-deps": [
          "error",
          {
            additionalHooks: "useDeepCompareEffect",
          },
        ],
      },
    },
  ],
}
