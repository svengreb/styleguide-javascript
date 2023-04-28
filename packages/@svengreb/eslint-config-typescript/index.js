/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * The opinionated, yet universally applicable JavaScript code style guide rules with TypeScript support as an extensible shared ESLint configuration.
 * Imports all rule definitions and sets the default parser options.
 * @version 0.12.0
 * @license MIT
 * @author Sven Greb <development@svengreb.de>
 * @copyright 2016-present Sven Greb <development@svengreb.de>
 * @since 0.8.0
 * @see https://eslint.org/docs/latest/use/configure/parser
 * @see https://eslint.org/docs/latest/use/configure/rules
 */
module.exports = {
  extends: [
    "./rules/typescript",
    /* Adjustments for unnecessary or incompatible React plugin rules. */
    "./rules/react/index.js",
    "./rules/react/jsx.js",
    /* Updated import plugin rules, settings and resolvers to include `.ts` and `.tsx` file extensions. */
    "./rules/import/settings.js",
    "./rules/import/style.js",
  ].map(require.resolve),
};
