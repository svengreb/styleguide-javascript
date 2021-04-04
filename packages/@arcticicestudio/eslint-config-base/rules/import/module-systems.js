/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Import plugin rules related to module systems.
 *
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#rules
 */
module.exports = {
  plugins: ["import"],
  rules: {
    /**
     * Report potentially ambiguous parse goal (`script` vs. `module`).
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
     */
    "import/unambiguous": "off",
    /**
     * Report CommonJS require calls and `module.exports` or `exports.*`.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
     */
    "import/no-commonjs": "off",
    /**
     * Report AMD `require` and define `calls`.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
     */
    "import/no-amd": "error",
    /**
     * No Node.js builtin modules.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
     */
    "import/no-nodejs-modules": "off",
  },
};
