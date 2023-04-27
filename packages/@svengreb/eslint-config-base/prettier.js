/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Entry point for the Prettier plugin integration with compatibility support for the following ESLint plugins:
 * - `eslint-plugin-react`
 * @since 0.9.0
 * @see https://github.com/prettier/eslint-plugin-prettier
 * @see https://github.com/prettier/eslint-config-prettier
 */
module.exports = {
  extends: ["./rules/prettier"].map(require.resolve),
};
