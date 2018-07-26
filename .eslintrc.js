"use strict";

const hasDev = process.env.NODE_ENV === "development" || false;

module.exports = {
  env: {
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
    "prettier",
    "prettier/react"
  ],
  parser: "babel-eslint",
  rules: {
    "react/prop-types": 0,
    "react/display-name": 0,
    "no-console": hasDev ? 1 : 2,
    "no-unused-vars": [hasDev ? 1 : 2, "all"],
    semi: [hasDev ? 1 : 2, "always"],
    "import/no-cycle": 0
  },
  plugins: ["react", "prettier"],
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "16.3.2"
    },
    propWrapperFunctions: ["forbidExtraProps"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"]
      }
    }
  },
  globals: {
    window: true,
    document: true,
    Image: true,
    Event: true,
    Promise: true,
    sessionStorage: true,
    setTimeout: true,
    process: true,
    console: true,
    require: true
  }
};
