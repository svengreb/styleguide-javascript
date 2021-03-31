/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Base Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * Rule related to strict mode directives.
 * @since 0.1.0
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
