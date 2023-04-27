/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * React plugin rules related to JSX.
 * @since 0.8.0
 * @see https://github.com/jsx-eslint/eslint-plugin-react#jsx-specific-rules
 */
module.exports = {
  rules: {
    /* Allow TypeScript specific file extensions for JSX syntax. */
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
  },
};
