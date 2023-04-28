/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * The opinionated, yet universally applicable JavaScript code style guide base rules as an extensible shared ESLint configuration.
 * Imports all rule definitions and sets the default parser options.
 * @version 0.12.0
 * @license MIT
 * @author Sven Greb <development@svengreb.de>
 * @copyright 2016-present Sven Greb <development@svengreb.de>
 * @see https://eslint.org/docs/latest/use/configure/parser
 * @see https://eslint.org/docs/latest/use/configure/rules
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
