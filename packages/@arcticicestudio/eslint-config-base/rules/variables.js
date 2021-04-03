/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

const confusingBrowserGlobals = require("confusing-browser-globals");

/**
 * Rules related to variable declarations.
 *
 * @see https://eslint.org/docs/rules/#variables
 */
module.exports = {
  rules: {
    /**
     * Require or disallow initialization in variable declarations.
     * @see https://eslint.org/docs/rules/init-declarations
     */
    "init-declarations": "off",
    /**
     * Disallow deleting variables.
     * @see https://eslint.org/docs/rules/no-delete-var
     */
    "no-delete-var": "error",
    /**
     * Disallow labels that share a name with a variable.
     * @see https://eslint.org/docs/rules/no-label-var
     */
    "no-label-var": "error",
    /**
     * Disallow specified global variables.
     * @see https://eslint.org/docs/rules/no-restricted-globals
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/standard_library.html#number-isnan
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/standard_library.html#number-numberisfinite
     */
    "no-restricted-globals": ["error", "isFinite", "isNaN"].concat(confusingBrowserGlobals),
    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope.
     * @see https://eslint.org/docs/rules/no-shadow
     */
    "no-shadow": "error",
    /**
     * Disallow identifiers from shadowing restricted names.
     * @see https://eslint.org/docs/rules/no-shadow
     */
    "no-shadow-restricted-names": "error",
    /**
     * Disallow the use of undeclared variables unless mentioned in global comments.
     * @see https://eslint.org/docs/rules/no-undef
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/variables.html#declaration
     */
    "no-undef": "error",
    /**
     * Disallow initializing variables to `undefined`.
     * @see https://eslint.org/docs/rules/no-undef-init
     */
    "no-undef-init": "error",
    /**
     * Disallow the use of `undefined` as an identifier.
     * @see https://eslint.org/docs/rules/no-undefined
     */
    "no-undefined": "off",
    /**
     * Disallow unused variables.
     * @see https://eslint.org/docs/rules/no-unused-vars
     */
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
      },
    ],
    /**
     * Disallow the use of variables before they are defined.
     * @see https://eslint.org/docs/rules/no-use-before-define
     */
    "no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
  },
};
