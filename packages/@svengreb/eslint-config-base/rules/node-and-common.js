/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Rules related to code running in Node.js, or in browsers with CommonJS.
 *
 * @see https://eslint.org/docs/latest/rules/#nodejs-and-commonjs
 * @see https://nodejs.org
 * @see http://www.commonjs.org
 */
module.exports = {
  env: {
    node: true,
  },
  rules: {
    /**
     * Disallow use of the `Buffer()` constructor.
     * @see https://eslint.org/docs/latest/rules/no-buffer-constructor
     */
    "no-buffer-constructor": "error",
  },
};
