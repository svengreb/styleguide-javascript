/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Import plugin related rules for code style guidelines.
 * @since 0.8.0
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/README.md#rules
 */
module.exports = {
  rules: {
    /**
     * Ensure consistent use of file extension within the import path including TypeScript.
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
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
