/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * The opinionated, yet universally applicable JavaScript code style guide rules with React support as an extensible shared ESLint configuration.
 * Imports all rule definitions and sets the default parser options.
 * @version 0.12.0
 * @license MIT
 * @author Sven Greb <development@svengreb.de>
 * @copyright 2016-present Sven Greb <development@svengreb.de>
 * @see https://eslint.org/docs/latest/use/configure/parser
 * @see https://eslint.org/docs/latest/use/configure/rules
 */
module.exports = {
  extends: ["@svengreb/eslint-config-base", require.resolve("./rules/react"), require.resolve("./rules/react/jsx"), require.resolve("./rules/jsx-a11y")],
};
