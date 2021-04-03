/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Entry point for the Prettier plugin integration with compatibility support for the following ESLint plugins:
 *
 * - `@typescript-eslint/eslint-plugin`
 *
 * @since 0.8.0
 * @see https://github.com/prettier/eslint-plugin-prettier
 * @see https://github.com/prettier/eslint-config-prettier
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 */
module.exports = {
  extends: ["./rules/prettier"].map(require.resolve),
};
