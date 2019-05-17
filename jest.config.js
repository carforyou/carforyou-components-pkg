module.exports = {
  moduleFileExtensions: ["ts", "js", "node"],
  testMatch: ["**/__tests__/**/*.test.ts"],
  transform: {
    "\\.ts$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  }
}
