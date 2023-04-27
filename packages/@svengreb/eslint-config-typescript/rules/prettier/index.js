/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Prettier plugin rules.
 * @since 0.8.0
 * @see https://github.com/prettier/eslint-plugin-prettier
 * @see https://github.com/prettier/eslint-config-prettier
 * @see https://prettier.io
 */
module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    /**
     * Run Prettier as an ESLint rule and report differences as individual ESLint issues.
     */
    "prettier/prettier": "error",
  },
};
