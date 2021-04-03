/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Import plugin related rules for code style guidelines.
 *
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#rules
 */
module.exports = {
  plugins: ["import"],
  rules: {
    /**
     * Ensure all imports appear before other statements.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/modules.html#imports-first
     */
    "import/first": "error",
    /**
     * Ensure all exports appear after other statements.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
     */
    "import/exports-last": "error",
    /**
     * Report repeated import of the same module in multiple places.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    "import/no-duplicates": "error",
    /**
     * Report namespace imports.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
     */
    "import/no-namespace": "off",
    /**
     * Ensure consistent use of file extension within the import path.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
      },
    ],
    /**
     * Ensure a convention in module import order.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always",
      },
    ],
    /**
     * Ensure a newline after import statements.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
     */
    "import/newline-after-import": "error",
    /**
     * Prefer a default export if module exports a single name.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/modules.html#prefer-default-export
     */
    "import/prefer-default-export": "error",
    /**
     * Limit the maximum number of dependencies a module can have.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
     */
    "import/max-dependencies": "off",
    /**
     * Forbid unassigned imports.
     * Enabled because importing for side effects is perfectly acceptable in many use cases like stylesheets.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
     */
    "import/no-unassigned-import": "off",
    /**
     * Forbid named default exports.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
     */
    "import/no-named-default": "error",
    /**
     * Forbid anonymous values as default exports.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
     */
    "import/no-anonymous-default-export": "off",
    /**
     * Prefer named exports to be grouped together in a single export declaration.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
     */
    "import/group-exports": "off",
    /**
     * Forbid default exports.
     * @since 0.2.0
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
     */
    "import/no-default-export": "off",
    /**
     * Prohibit named exports.
     * @since 0.6.0
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
     */
    "import/no-named-export": "off",
    /**
     * Prohibit named exports.
     * @since 0.6.0
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
     */
    "import/dynamic-import-chunkname": "off",
  },
};
