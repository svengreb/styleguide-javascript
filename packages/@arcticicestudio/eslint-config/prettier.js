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
 * - `eslint-plugin-react`
 *
 * @since 0.5.0
 * @see https://github.com/prettier/eslint-plugin-prettier
 * @see https://github.com/prettier/eslint-config-prettier
 */
module.exports = {
  extends: ["./rules/prettier"].map(require.resolve)
};
