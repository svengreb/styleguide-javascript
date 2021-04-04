/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Rule related to strict mode directives.
 *
 * @see https://eslint.org/docs/rules/#strict-mode
 */
module.exports = {
  rules: {
    /**
     * Require or disallow strict mode directives.
     * Disabled because it is automatically handled through Babel.
     * @see https://eslint.org/docs/rules/strict
     */
    strict: ["error", "never"],
  },
};
