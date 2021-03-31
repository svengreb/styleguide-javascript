/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * Prettier plugin rules.
 * @since 0.5.0
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
    "prettier/prettier": "error"
  }
};
