/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Import plugin rules related to static analysis.
 *
 * @see https://github.com/benmosher/eslint-plugin-import/blob/master/README.md#rules
 */
module.exports = {
  plugins: ["import"],
  rules: {
    /**
     * Ensure imports point to a file/module that can be resolved.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     */
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
        caseSensitive: true,
      },
    ],
    /**
     * Ensure named imports correspond to a named export in the remote file.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     */
    "import/named": "error",
    /**
     * Ensure a default export is present, given a default import.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     */
    "import/default": "warn",
    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     */
    "import/namespace": "off",
    /**
     * Restrict which files can be imported in a given folder.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
     */
    "import/no-restricted-paths": "off",
    /**
     * Forbid import of modules using absolute paths.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
     */
    "import/no-absolute-path": "error",
    /**
     * Forbid `require()` calls with expressions.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    "import/no-dynamic-require": "error",
    /**
     * Prevent importing the submodules of other module.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
     */
    "import/no-internal-modules": "off",
    /**
     * Forbid Webpack loader syntax in imports.
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/modules.html#avoid-webpack-loader-syntax
     */
    "import/no-webpack-loader-syntax": "error",
    /**
     * Prevent a module from importing itself.
     * @since 0.2.0
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
     */
    "import/no-self-import": "error",
    /**
     * Prevent unnecessary path segments in import and require statements.
     * @since 0.2.0
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
     */
    "import/no-useless-path-segments": "error",
    /**
     * Prevent a module from importing a module with a dependency path back to itself.
     * @since 0.2.0
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
     */
    "import/no-cycle": ["error", { maxDepth: Infinity }],
    /**
     * Prevent imports to folders in relative parent paths.
     * @since 0.6.0
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
     */
    "import/no-relative-parent-imports": "off",
    /**
     * Report modules without any exports or individual exports not being statically imported or required from other
     * modules in the same project.
     * @since 0.6.0
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
     */
    "import/no-unused-modules": "off",
  },
};
