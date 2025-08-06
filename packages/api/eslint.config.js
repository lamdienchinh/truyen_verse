import baseConfig from "@workspace/eslint-config/base.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
];
