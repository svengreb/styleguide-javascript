/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Styleguide JavaScript
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * The ESLint configuration.
 * @see https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  extends: [
    "./packages/@arcticicestudio/eslint-config-base/index.js",
    "./packages/@arcticicestudio/eslint-config/prettier.js",
  ],
};
