/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Arctic Ice Studio JavaScript style guide rules as an extensible remark-lint rule preset.
 * Imports all rule definitions and sets the default parser options.
 *
 * @version 0.11.0
 * @license MIT
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @copyright 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * @copyright 2018-present Sven Greb <development@svengreb.de>
 * @see https://eslint.org/docs/user-guide/configuring.html#specifying-parser-options
 * @see https://eslint.org/docs/user-guide/configuring.html#configuring-rules
 */
module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/es6",
    "./rules/node-and-common",
    "./rules/possible-errors",
    "./rules/strict",
    "./rules/style",
    "./rules/variables",
    "./rules/import/helpful-warnings",
    "./rules/import/module-systems",
    "./rules/import/settings",
    "./rules/import/static-analysis",
    "./rules/import/style",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
};
