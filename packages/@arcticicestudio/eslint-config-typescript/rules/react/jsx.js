/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * React plugin rules related to JSX.
 *
 * @since 0.8.0
 * @see https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
 */
module.exports = {
  rules: {
    /* Allow TypeScript specific file extensions for JSX synta. */
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
  },
};
