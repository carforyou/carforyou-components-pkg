/* tslint:disable:object-literal-sort-keys */
module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: { warnOnly: true }
    }
  },
  moduleFileExtensions: ["js", "ts", "tsx", "node"],
  moduleNameMapper: {
    "assets/(.*).(jpe?g|png|gif|ico|svg)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js"
  },
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  transform: {
    "\\.tsx?$": "ts-jest"
  }
}
