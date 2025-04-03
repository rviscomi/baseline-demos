import globals from "globals";
import css from "@eslint/css";
import html from "@html-eslint/eslint-plugin";


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
      "css/use-baseline": ["warn", {
        "available": "widely"
      }],
    },
  },
  {
    files: ["**/*.html"],
    ...html.configs["flat/recommended"],
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/attrs-newline": "off",
      "@html-eslint/element-newline": "off",
    },
  },
];
