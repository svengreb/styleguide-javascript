/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * TypeScript plugin rules and parser configurations.
 * @since 0.8.0
 * @see https://typescript-eslint.io
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#supported-rules
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    /* Disable ESLint core rules that are already handled by TypeScript. */
    "plugin:@typescript-eslint/eslint-recommended",
    /* Use the slim and recommended set of rules for TypeScript that does not require type information. */
    "plugin:@typescript-eslint/recommended",
    /*
     * Additionally enable the slightly expanded set of rules that require type information.
     * It also disables some ESLint core rules for compatibility since they are already handled by TypeScript.
     */
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
};
