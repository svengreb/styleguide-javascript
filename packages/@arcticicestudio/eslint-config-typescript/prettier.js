/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
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
