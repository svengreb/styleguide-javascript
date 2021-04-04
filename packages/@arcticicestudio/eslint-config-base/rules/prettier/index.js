/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Prettier plugin rules.
 *
 * @since 0.9.0
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
