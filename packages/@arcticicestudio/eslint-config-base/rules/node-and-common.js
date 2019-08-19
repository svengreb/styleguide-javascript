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
     * Require `return` statements after callbacks.
     * @see https://eslint.org/docs/rules/callback-return
     */
    "callback-return": "off",
    /**
     * Enforce `require()` on the top-level module scope.
     * @see https://eslint.org/docs/rules/global-require
     */
    "global-require": "error",
    /**
     * Enforce callback error handling.
     * @see https://eslint.org/docs/rules/handle-callback-err
     */
    "handle-callback-err": "off",
    /**
     * Disallow use of the `Buffer()` constructor.
     * @see https://eslint.org/docs/rules/no-buffer-constructor
     */
    "no-buffer-constructor": "error",
    /**
     * Disallow `require` calls to be mixed with regular variable declarations.
     * @see https://eslint.org/docs/rules/no-mixed-requires
     */
    "no-mixed-requires": ["off", false],
    /**
     * Disallow `new` operators with calls to `require`.
     * @see https://eslint.org/docs/rules/no-new-require
     */
    "no-new-require": "error",
    /**
     * Disallow string concatenation with `__dirname` and `__filename`.
     * @see https://eslint.org/docs/rules/no-path-concat
     */
    "no-path-concat": "error",
    /**
     * Disallow the use of `process.env`.
     * @see https://eslint.org/docs/rules/no-process-env
     */
    "no-process-env": "off",
    /**
     * Disallow the use of `process.exit()`.
     * @see https://eslint.org/docs/rules/no-process-exit
     */
    "no-process-exit": "off",
    /**
     * Disallow specified modules when loaded by `require`.
     * @see https://eslint.org/docs/rules/no-restricted-modules
     */
    "no-restricted-modules": "off",
    /**
     * Disallow synchronous methods.
     * @see https://eslint.org/docs/rules/no-sync
     */
    "no-sync": "off"
  }
};
