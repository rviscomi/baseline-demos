import globals from "globals";
import css from "@eslint/css";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    rules: {
      "css/require-baseline": ["warn", {
        "available": "widely"
      }],
    },
  },
];
