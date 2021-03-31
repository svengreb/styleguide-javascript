/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Base Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * Rules related to code running in Node.js, or in browsers with CommonJS.
 * @since 0.1.0
 * @see https://eslint.org/docs/rules/#nodejs-and-commonjs
 * @see https://nodejs.org
 * @see http://www.commonjs.org
 */
module.exports = {
  env: {
    node: true
  },
  rules: {
    /**
     * Disallow use of the `Buffer()` constructor.
     * @see https://eslint.org/docs/rules/no-buffer-constructor
     */
    "no-buffer-constructor": "error"
  }
};
