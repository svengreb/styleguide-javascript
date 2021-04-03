/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Import plugin related rules for code style guidelines.
 *
 * @since 0.8.0
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#rules
 */
module.exports = {
  rules: {
    /**
     * Ensure consistent use of file extension within the import path including TypeScript.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        mjs: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
