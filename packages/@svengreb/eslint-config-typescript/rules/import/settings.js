/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Import plugin settings and resolvers.
 * @since 0.8.0
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/README.md#settings
 * @see https://github.com/import-js/eslint-plugin-import/blob/main/README.md#resolvers
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
