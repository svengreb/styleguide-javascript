/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Configurations for ESLint.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  extends: [
    "./packages/@arcticicestudio/eslint-config-base/index.js",
    "./packages/@arcticicestudio/eslint-config/prettier.js",
  ],
};
