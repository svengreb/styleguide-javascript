/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Entry point for the Prettier plugin integration with compatibility support for the following ESLint plugins:
 *
 * - `eslint-plugin-react`
 *
 * @since 0.9.0
 * @see https://github.com/prettier/eslint-plugin-prettier
 * @see https://github.com/prettier/eslint-config-prettier
 */
module.exports = {
  extends: ["./rules/prettier"].map(require.resolve),
};
