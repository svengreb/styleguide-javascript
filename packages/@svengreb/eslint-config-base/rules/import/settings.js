/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Import plugin settings and resolvers.
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/README.md#settings
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/README.md#resolvers
 */
module.exports = {
  plugins: ["import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".json"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx"],
    "import/ignore": ["node_modules", "\\.coffee$", "\\.hbs$", "\\.svg$", "\\.(scss|css|less)$"],
  },
};
