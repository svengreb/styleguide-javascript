/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Rules related to code running in Node.js, or in browsers with CommonJS.
 *
 * @see https://eslint.org/docs/rules/#nodejs-and-commonjs
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
     * @see https://eslint.org/docs/rules/no-buffer-constructor
     */
    "no-buffer-constructor": "error",
  },
};
