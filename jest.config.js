module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: "coverage",
  modulePathIgnorePatterns: ["dist", "node_modules", "coverage"]
};