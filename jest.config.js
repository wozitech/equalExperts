// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '.*/support/', '.*/mocks/'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '.*/support/', '.*/mocks/'],
  setupFiles: ['<rootDir>/setupTests.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTestsAfterEnv.js'],
};
