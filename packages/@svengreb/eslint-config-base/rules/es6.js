/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Environment specific settings, parser options and rules related to ECMAScript 6, also known as ES2015.
 * @see https://eslint.org/docs/latest/rules/#ecmascript-6
 * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/ecmascript_6+_styles.md
 */
module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    /**
     * Require braces around arrow function bodies.
     * @see https://eslint.org/docs/latest/rules/arrow-body-style
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/arrow_functions.md#implicit-return
     */
    "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: false }],
    /**
     * Require parentheses around arrow function arguments.
     * @see https://eslint.org/docs/latest/rules/arrow-parens
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/arrow_functions.md#implicit-return
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/arrow_functions.md#single-argument-parentheses
     */
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
    /**
     * Enforce consistent spacing before and after the arrow in arrow functions.
     * @see https://eslint.org/docs/latest/rules/arrow-spacing
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/arrow_functions.md#anonymous-functions
     */
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    /**
     * Enforce require `super()` calls in constructors.
     * @see https://eslint.org/docs/latest/rules/constructor-super
     */
    "constructor-super": "error",
    /**
     * Enforce consistent spacing around `*` operators in generator functions.
     * @see https://eslint.org/docs/latest/rules/generator-star-spacing
     */
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    /**
     * Disallow reassigning class members.
     * @see https://eslint.org/docs/latest/rules/no-class-assign
     */
    "no-class-assign": "error",
    /**
     * Disallow arrow functions where they could be confused with comparisons.
     * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/arrow_functions.md#comparison-operators-confusion
     */
    "no-confusing-arrow": ["error", { allowParens: true }],
    /**
     * Disallow reassigning `const` variables.
     * @see https://eslint.org/docs/latest/rules/no-const-assign
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/references.md#prefer-const
     */
    "no-const-assign": "error",
    /**
     * Disallow duplicate class members.
     * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/classes_and_constructors.md#no-duplicate-members
     */
    "no-dupe-class-members": "error",
    /**
     * Disallow duplicate module imports.
     * This rule has been replaced by the `import/no-duplicates` rule!
     * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/modules.md#no-duplicate-imports
     */
    "no-duplicate-imports": ["off", { includeExports: true }],
    /**
     * Disallow `new` operators with the `Symbol` object.
     * @see https://eslint.org/docs/latest/rules/no-new-symbol
     */
    "no-new-symbol": "error",
    /**
     * Disallow specified modules when loaded by `import`.
     * @see https://eslint.org/docs/latest/rules/no-restricted-imports
     */
    "no-restricted-imports": "off",
    /**
     * Disallow `this` / `super` before calling `super()` in constructors since it is a violation of the ES6
     * specification and raises a reference error.
     * @see https://eslint.org/docs/latest/rules/no-this-before-super
     */
    "no-this-before-super": "error",
    /**
     * Disallow unnecessary computed property keys in object literals.
     * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
     */
    "no-useless-computed-key": "error",
    /**
     * Disallow unnecessary constructors.
     * @see https://eslint.org/docs/latest/rules/no-useless-constructor
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/classes_and_constructors.md#unnecessary-default-constructor
     */
    "no-useless-constructor": "error",
    /**
     * Disallow renaming import, export, and destructured assignments to the same name.
     * @see https://eslint.org/docs/latest/rules/no-useless-constructor
     */
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    /**
     * Require `let` or `const` instead of `var`.
     * @see https://eslint.org/docs/latest/rules/no-var
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/references.md#disallow-var
     */
    "no-var": "error",
    /**
     * Require or disallow method and property shorthand syntax for object literals.
     * @see https://eslint.org/docs/latest/rules/object-shorthand
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/objects.md#es6-object-shorthand
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/objects.md#es6-object-concise
     */
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    /**
     * Require using arrow functions for callbacks.
     * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/arrow_functions.md#anonymous-functions
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/methods.md#prefer-arrow-functions-over-bind
     */
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    /**
     * Require `const` declarations for variables that are never reassigned after declared.
     * @see https://eslint.org/docs/latest/rules/prefer-const
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/references.md#prefer-const
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/variables.md#declaration
     */
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: true,
      },
    ],
    /**
     * Require destructuring from arrays and/or objects.
     * @see https://eslint.org/docs/latest/rules/prefer-destructuring
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/destructuring.md#objects
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/destructuring.md#arrays
     */
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      { enforceForRenamedProperties: false },
    ],
    /**
     * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
     * @see https://eslint.org/docs/latest/rules/prefer-numeric-literals
     */
    "prefer-numeric-literals": "error",
    /**
     * Require rest parameters instead of `arguments`.
     * @see https://eslint.org/docs/latest/rules/prefer-rest-params
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#es6-rest
     */
    "prefer-rest-params": "error",
    /**
     * Require spread operators instead of `.apply()`.
     * @see https://eslint.org/docs/latest/rules/prefer-spread
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#es6-spread
     */
    "prefer-spread": "error",
    /**
     * Require template literals instead of string concatenation.
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/strings.md#es6-template-literals
     */
    "prefer-template": "error",
    /**
     * Require generator functions to contain `yield`.
     * @see https://eslint.org/docs/latest/rules/require-yield
     */
    "require-yield": "warn",
    /**
     * Enforce spacing between rest and spread operators and their expressions.
     * @see https://eslint.org/docs/latest/rules/rest-spread-spacing
     */
    "rest-spread-spacing": ["error", "never"],
    /**
     * Enforce sorted import declarations within modules.
     * @see https://eslint.org/docs/latest/rules/sort-imports
     */
    "sort-imports": [
      "off",
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    /**
     * Require symbol descriptions.
     * @see https://eslint.org/docs/latest/rules/symbol-description
     */
    "symbol-description": "error",
    /**
     * Require or disallow spacing around embedded expressions of template strings.
     * @see https://eslint.org/docs/latest/rules/template-curly-spacing
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/strings.md#es6-template-literals
     */
    "template-curly-spacing": ["error", "never"],
    /**
     * Require or disallow spacing around the `*` in `yield*` expressions.
     * @see https://eslint.org/docs/latest/rules/yield-star-spacing
     */
    "yield-star-spacing": ["error", "after"],
  },
};
