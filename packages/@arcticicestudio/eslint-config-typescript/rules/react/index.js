/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * React plugin rules.
 *
 * @since 0.8.0
 * @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
 */
module.exports = {
  rules: {
    /* No need for React `prop-types` when using TypeScript. */
    "react/prop-types": "off",
  },
};
