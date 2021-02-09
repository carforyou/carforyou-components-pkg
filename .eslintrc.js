module.exports = {
  extends: ["@carforyou/eslint-config/react"],
  overrides: [
    {
      files: ["*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-internal-modules": "off",
      },
    },
  ],
}
