/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Base Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * Import plugin settings and resolvers.
 * @since 0.1.0
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#settings
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#resolvers
 */
module.exports = {
  plugins: ["import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"]
      }
    },
    "import/extensions": [".js", ".mjs", ".jsx"],
    "import/ignore": ["node_modules", "\\.coffee$", "\\.hbs$", "\\.svg$", "\\.(scss|css|less)$"]
  }
};
