/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * React plugin rules related to JSX.
 * @since 0.8.0
 * @see https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
 */
module.exports = {
  rules: {
    /* Allow TypeScript specific file extensions for JSX synta. */
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"]
      }
    ]
  }
};
