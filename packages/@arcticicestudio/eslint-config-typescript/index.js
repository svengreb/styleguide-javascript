/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Arctic Ice Studio JavaScript style guide rules as an extensible remark-lint rule preset.
 * Imports all rule definitions and sets the default parser options.
 *
 * @version 0.9.0
 * @license MIT
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @copyright 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * @copyright 2018-present Sven Greb <development@svengreb.de>
 * @since 0.8.0
 * @see https://eslint.org/docs/user-guide/configuring.html#specifying-parser-options
 * @see https://eslint.org/docs/user-guide/configuring.html#configuring-rules
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
