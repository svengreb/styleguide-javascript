/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * Import plugin settings and resolvers.
 * @since 0.8.0
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#settings
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#resolvers
 */
module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".json", ".mjs", ".ts", ".tsx"],
      },
    },
    "import/extensions": [".js", ".mjs", ".ts", ".tsx"],
  },
};
