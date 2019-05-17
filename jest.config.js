/* tslint:disable:object-literal-sort-keys */
module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx", "node"],
  moduleNameMapper: {
    "assets/(.*).(jpe?g|png|gif|ico|svg)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "^~/(.*)": "<rootDir>/$1"
  },
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  transform: {
    "\\.tsx?$": "ts-jest"
  }
}
