module.exports = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/src/tests/setup.js"],

  moduleFileExtensions: ["js", "jsx"],

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  testMatch: ["**/src/tests/**/*.test.jsx"],

  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/src/tests/styleMock.js",
  },

  clearMocks: true,
};
