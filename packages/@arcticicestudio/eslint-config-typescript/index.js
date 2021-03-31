/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
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
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["@arcticicestudio/eslint-config-typescript", "@arcticicestudio/eslint-config-typescript/prettier"],
    },
  ],
};
