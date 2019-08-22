/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Base Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * Imports all rule definitions and sets the default parser options.
 * This is the main entry point of the package.
 * @version 0.8.0
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @copyright 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * @copyright 2018-present Sven Greb <development@svengreb.de>
 * @license MIT
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
    "./rules/import/style"
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
};
