/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Entry point for the Prettier plugin integration with compatibility support for the following ESLint plugins:
 *   - `@typescript-eslint/eslint-plugin`
 * @since 0.8.0
 * @see https://github.com/prettier/eslint-plugin-prettier
 * @see https://github.com/prettier/eslint-config-prettier
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin
 */
module.exports = {
  extends: ["./rules/prettier"].map(require.resolve),
};
