/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Environment specific settings, parser options and rules related to ECMAScript 6, also known as ES2015.
 *
 * @see https://eslint.org/docs/rules/#ecmascript-6
 * @see https://arcticicestudio.github.io/styleguide-javascript/rules/ecmascript_6+_styles.html
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
     * @see https://eslint.org/docs/rules/arrow-body-style
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/arrow_functions.html#implicit-return
     */
    "arrow-body-style": ["error", "as-needed", { requireReturnForObjectLiteral: false }],
    /**
     * Require parentheses around arrow function arguments.
     * @see https://eslint.org/docs/rules/arrow-parens
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/arrow_functions.html#implicit-return
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/arrow_functions.html#single-argument-parentheses
     */
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
    /**
     * Enforce consistent spacing before and after the arrow in arrow functions.
     * @see https://eslint.org/docs/rules/arrow-spacing
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/arrow_functions.html#anonymous-functions
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
     * @see https://eslint.org/docs/rules/constructor-super
     */
    "constructor-super": "error",
    /**
     * Enforce consistent spacing around `*` operators in generator functions.
     * @see https://eslint.org/docs/rules/generator-star-spacing
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
     * @see https://eslint.org/docs/rules/no-class-assign
     */
    "no-class-assign": "error",
    /**
     * Disallow arrow functions where they could be confused with comparisons.
     * @see https://eslint.org/docs/rules/no-confusing-arrow
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/arrow_functions.html#comparison-operators-confusion
     */
    "no-confusing-arrow": ["error", { allowParens: true }],
    /**
     * Disallow reassigning `const` variables.
     * @see https://eslint.org/docs/rules/no-const-assign
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/references.html#prefer-const
     */
    "no-const-assign": "error",
    /**
     * Disallow duplicate class members.
     * @see https://eslint.org/docs/rules/no-dupe-class-members
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/classes_and_constructors.html#no-duplicate-members
     */
    "no-dupe-class-members": "error",
    /**
     * Disallow duplicate module imports.
     * This rule has been replaced by the `import/no-duplicates` rule!
     * @see https://eslint.org/docs/rules/no-dupe-class-members
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/modules.html#no-duplicate-imports
     */
    "no-duplicate-imports": ["off", { includeExports: true }],
    /**
     * Disallow `new` operators with the `Symbol` object.
     * @see https://eslint.org/docs/rules/no-new-symbol
     */
    "no-new-symbol": "error",
    /**
     * Disallow specified modules when loaded by `import`.
     * @see https://eslint.org/docs/rules/no-restricted-imports
     */
    "no-restricted-imports": "off",
    /**
     * Disallow `this` / `super` before calling `super()` in constructors since it is a violation of the ES6
     * specification and raises a reference error.
     * @see https://eslint.org/docs/rules/no-this-before-super
     */
    "no-this-before-super": "error",
    /**
     * Disallow unnecessary computed property keys in object literals.
     * @see https://eslint.org/docs/rules/no-useless-computed-key
     */
    "no-useless-computed-key": "error",
    /**
     * Disallow unnecessary constructors.
     * @see https://eslint.org/docs/rules/no-useless-constructor
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/classes_and_constructors.html#unnecessary-default-constructor
     */
    "no-useless-constructor": "error",
    /**
     * Disallow renaming import, export, and destructured assignments to the same name.
     * @see https://eslint.org/docs/rules/no-useless-constructor
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
     * @see https://eslint.org/docs/rules/no-var
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/references.html#disallow-var
     */
    "no-var": "error",
    /**
     * Require or disallow method and property shorthand syntax for object literals.
     * @see https://eslint.org/docs/rules/object-shorthand
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/objects.html#es6-object-shorthand
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/objects.html#es6-object-concise
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
     * @see https://eslint.org/docs/rules/prefer-arrow-callback
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/arrow_functions.html#anonymous-functions
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/methods.html#prefer-arrow-functions-over-bind
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
     * @see https://eslint.org/docs/rules/prefer-const
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/references.html#prefer-const
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/variables.html#declaration
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
     * @see https://eslint.org/docs/rules/prefer-destructuring
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/destructuring.html#objects
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/destructuring.html#arrays
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
     * @see https://eslint.org/docs/rules/prefer-numeric-literals
     */
    "prefer-numeric-literals": "error",
    /**
     * Require rest parameters instead of `arguments`.
     * @see https://eslint.org/docs/rules/prefer-rest-params
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/functions.html#es6-rest
     */
    "prefer-rest-params": "error",
    /**
     * Require spread operators instead of `.apply()`.
     * @see https://eslint.org/docs/rules/prefer-spread
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/functions.html#es6-spread
     */
    "prefer-spread": "error",
    /**
     * Require template literals instead of string concatenation.
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/strings.html#es6-template-literals
     */
    "prefer-template": "error",
    /**
     * Require generator functions to contain `yield`.
     * @see https://eslint.org/docs/rules/require-yield
     */
    "require-yield": "warn",
    /**
     * Enforce spacing between rest and spread operators and their expressions.
     * @see https://eslint.org/docs/rules/rest-spread-spacing
     */
    "rest-spread-spacing": ["error", "never"],
    /**
     * Enforce sorted import declarations within modules.
     * @see https://eslint.org/docs/rules/sort-imports
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
     * @see https://eslint.org/docs/rules/symbol-description
     */
    "symbol-description": "error",
    /**
     * Require or disallow spacing around embedded expressions of template strings.
     * @see https://eslint.org/docs/rules/template-curly-spacing
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/strings.html#es6-template-literals
     */
    "template-curly-spacing": ["error", "never"],
    /**
     * Require or disallow spacing around the `*` in `yield*` expressions.
     * @see https://eslint.org/docs/rules/yield-star-spacing
     */
    "yield-star-spacing": ["error", "after"],
  },
};
