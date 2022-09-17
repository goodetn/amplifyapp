module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  plugins: ["@typescript-eslint", "react", "jest"],
  rules: {
    // I usually turn off these rules out of personal, feel free to delete the rules section in your project
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off"
  }
};