/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Import plugin rules related to helpful warnings.
 *
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#rules
 */
module.exports = {
  plugins: ["import"],
  rules: {
    /**
     * Report any invalid exports like repeated exports of names or defaults.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
     */
    "import/export": "error",
    /**
     * Report use of exported name as identifier of default export.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
     */
    "import/no-named-as-default": "error",
    /**
     * Report use of exported name as property of default export.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
     */
    "import/no-named-as-default-member": "error",
    /**
     * Report imported names marked with `@deprecated` documentation tag.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     */
    "import/no-deprecated": "warn",
    /**
     * Forbid the use of extraneous packages.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**",
          "tests/**",
          "spec/**",
          "**/__tests__/**",
          "**/__mocks__/**",
          "test.{js,jsx}",
          "test-*.{js,jsx}",
          "**/*{.,_}{test,spec}.{js,jsx}",
          "**/jest.config.js",
          "**/jest.setup.js",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
          "**/rollup.config.js",
          "**/rollup.config.*.js",
          "**/gulpfile.js",
          "**/gulpfile.*.js",
          "**/Gruntfile{,.js}",
          "**/gatsby-*{,.js}",
        ],
      },
    ],
    /**
     * Forbid the use of mutable exports with `var` or `let`.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/modules.html#no-mutable-exports
     */
    "import/no-mutable-exports": "error",
  },
};
