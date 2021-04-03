/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Rules related to possible syntax or logic errors.
 *
 * @see https://eslint.org/docs/rules/#possible-errors
 */
module.exports = {
  rules: {
    /**
     * Enforce "for" loop update clause moving the counter in the right direction.
     * @see https://eslint.org/docs/rules/for-direction
     */
    "for-direction": "error",
    /**
     * Enforces that a return statement is present in property getters.
     * @see https://eslint.org/docs/rules/getter-return
     */
    "getter-return": ["error", { allowImplicit: true }],
    /**
     * Disallow using an async function as a Promise executor.
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/no-async-promise-executor
     */
    "no-async-promise-executor": "error",
    /**
     * Disallow await inside of loops.
     * @see https://eslint.org/docs/rules/no-await-in-loop
     */
    "no-await-in-loop": "error",
    /**
     * Disallow comparing against negative zero (-0).
     * @see https://eslint.org/docs/rules/no-compare-neg-zero
     */
    "no-compare-neg-zero": "error",
    /**
     * Disallow assignment operators in conditional statements.
     * @see https://eslint.org/docs/rules/no-cond-assign
     */
    "no-cond-assign": ["error", "always"],
    /**
     * Disallow the use of console.
     * @see https://eslint.org/docs/rules/no-console
     */
    "no-console": [
      "warn",
      {
        allow: ["warn", "error", "time", "timeEnd", "timeStamp"],
      },
    ],
    /**
     * Disallow constant expressions in conditions.
     * @see https://eslint.org/docs/rules/no-constant-condition
     */
    "no-constant-condition": "warn",
    /**
     * Disallow control characters in regular expressions.
     * @see https://eslint.org/docs/rules/no-control-regex
     */
    "no-control-regex": "error",
    /**
     * Disallow the use of "debugger".
     * @see https://eslint.org/docs/rules/no-debugger
     */
    "no-debugger": "error",
    /**
     * Disallow duplicate arguments in "function" definitions.
     * @see https://eslint.org/docs/rules/no-dupe-args
     */
    "no-dupe-args": "error",
    /**
     * Disallow chained `if-else-if` statements.
     * @since 0.9.0
     * @see https://eslint.org/docs/rules/no-dupe-else-if
     */
    "no-dupe-else-if": "error",
    /**
     * Disallow duplicate keys in object literals.
     * @see https://eslint.org/docs/rules/no-dupe-keys
     */
    "no-dupe-keys": "error",
    /**
     * Disallow a duplicate case label.
     * @see https://eslint.org/docs/rules/no-duplicate-case
     */
    "no-duplicate-case": "error",
    /**
     * Disallow empty block statements.
     * @see https://eslint.org/docs/rules/no-empty
     */
    "no-empty": "warn",
    /**
     * Disallow empty character classes in regular expressions.
     * @see https://eslint.org/docs/rules/no-empty-character-class
     */
    "no-empty-character-class": "error",
    /**
     * Disallow reassigning exceptions in "catch" clauses.
     * @see https://eslint.org/docs/rules/no-ex-assign
     */
    "no-ex-assign": "error",
    /**
     * Disallow unnecessary boolean casts.
     * @see https://eslint.org/docs/rules/no-extra-boolean-cast
     */
    "no-extra-boolean-cast": "error",
    /**
     * Disallow unnecessary parentheses.
     * @see https://eslint.org/docs/rules/no-extra-parens
     */
    "no-extra-parens": [
      "off",
      "all",
      {
        conditionalAssign: true,
        returnAssign: false,
        nestedBinaryExpressions: false,
        // Delegate to "eslint-plugin-react" via "@arcticicestudio/eslint-config".
        ignoreJSX: "all",
        enforceForArrowConditionals: false,
      },
    ],
    /**
     * Disallow unnecessary semicolons.
     * @see https://eslint.org/docs/rules/no-extra-semi
     */
    "no-extra-semi": "error",
    /**
     * Disallow reassigning "function" declarations.
     * @see https://eslint.org/docs/rules/no-func-assign
     */
    "no-func-assign": "error",
    /**
     * Disallow assigning to imported bindings.
     * @since 0.9.0
     * @see https://eslint.org/docs/rules/no-import-assign
     */
    "no-import-assign": "error",
    /**
     * Disallow variable or "function" declarations in nested blocks.
     * @see https://eslint.org/docs/rules/no-inner-declarations
     */
    "no-inner-declarations": "error",
    /**
     * Disallow invalid regular expression strings in "RegExp" constructors.
     * @see https://eslint.org/docs/rules/no-invalid-regexp
     */
    "no-invalid-regexp": "error",
    /**
     * Disallow irregular whitespace.
     * @see https://eslint.org/docs/rules/no-irregular-whitespace
     */
    "no-irregular-whitespace": "error",
    /**
     * Disallow characters which are made with multiple code points in character class syntax.
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/no-misleading-character-class
     */
    "no-misleading-character-class": "error",
    /**
     * Disallow calling global object properties as functions.
     * @see https://eslint.org/docs/rules/no-obj-calls
     */
    "no-obj-calls": "error",
    /**
     * Disallow use of Object.prototypes builtins directly.
     * @see https://eslint.org/docs/rules/no-prototype-builtins
     */
    "no-prototype-builtins": "error",
    /**
     * Disallow multiple spaces in regular expression literals.
     * @see https://eslint.org/docs/rules/no-regex-spaces
     */
    "no-regex-spaces": "error",
    /**
     * Disallow sparse arrays.
     * @see https://eslint.org/docs/rules/no-sparse-arrays
     */
    "no-sparse-arrays": "error",
    /**
     * Disallow returning values from setters.
     * @since 0.9.0
     * @see https://eslint.org/docs/rules/no-setter-return
     */
    "no-setter-return": "error",
    /**
     * Disallow template literal placeholder syntax in regular strings.
     * @see https://eslint.org/docs/rules/no-template-curly-in-string
     */
    "no-template-curly-in-string": "error",
    /**
     * Disallow confusing multiline expressions.
     * @see https://eslint.org/docs/rules/no-unexpected-multiline
     */
    "no-unexpected-multiline": "error",
    /**
     * Disallow unreachable code after "return", "throw", "continue", and "break" statements.
     * @see https://eslint.org/docs/rules/no-unreachable
     */
    "no-unreachable": "error",
    /**
     * Disallow control flow statements in "finally" blocks.
     * @see https://eslint.org/docs/rules/no-unsafe-finally
     */
    "no-unsafe-finally": "error",
    /**
     * Disallow negating the left operand of relational operators.
     * @see https://eslint.org/docs/rules/no-unsafe-negation
     */
    "no-unsafe-negation": "error",
    /**
     * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/require-atomic-updates
     */
    "require-atomic-updates": "error",
    /**
     * Require calls to "isNaN()" when checking for "NaN".
     * @see https://eslint.org/docs/rules/use-isnan
     */
    "use-isnan": "error",
    /**
     * Enforce comparing "typeof" expressions against valid strings.
     * @see https://eslint.org/docs/rules/valid-typeof
     */
    "valid-typeof": ["error", { requireStringLiterals: true }],
  },
};
