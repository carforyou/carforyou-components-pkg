module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: { warnOnly: true },
    },
  },
  moduleFileExtensions: ["js", "ts", "tsx", "node"],
  moduleNameMapper: {
    "assets/(.*).(jpe?g|png|gif|ico|svg)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "\\.css$": "<rootDir>/src/__mocks__/styleMock.js",
  },
  setupFiles: ["<rootDir>/src/__tests__/setup/setupGlobalMocks.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup/jestDomExpect.ts"],
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  transform: {
    "\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
}
