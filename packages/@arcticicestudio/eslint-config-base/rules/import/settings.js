/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Import plugin settings and resolvers.
 *
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#settings
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#resolvers
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
