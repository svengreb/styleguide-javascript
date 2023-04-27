/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Rules for methods and styles that have been proven to avoid problems.
 * @see https://eslint.org/docs/latest/rules/#best-practices
 */
module.exports = {
  rules: {
    /**
     * Enforce getter/setter pairs in objects.
     * @see https://eslint.org/docs/latest/rules/accessor-pairs
     */
    "accessor-pairs": ["warn", { setWithoutGet: true }],
    /**
     * Enforce return statements in callbacks of array's methods.
     * @see https://eslint.org/docs/latest/rules/array-callback-return
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/arrays.md#callback-return
     */
    "array-callback-return": ["error", { allowImplicit: true }],
    /**
     * Treat `var` as block-scoped.
     * @see https://eslint.org/docs/latest/rules/block-scoped-var
     */
    "block-scoped-var": "error",
    /**
     * Enforce that class methods utilize `this`.
     * @see https://eslint.org/docs/latest/rules/class-methods-use-this
     */
    "class-methods-use-this": "warn",
    /**
     * Limit Cyclomatic Complexity.
     * @see https://eslint.org/docs/latest/rules/complexity
     */
    complexity: "off",
    /**
     * Require `return` statements to either always or never specify values.
     * @see https://eslint.org/docs/latest/rules/consistent-return
     */
    "consistent-return": "warn",
    /**
     * Enforce consistent brace style for all control statements.
     * @see https://eslint.org/docs/latest/rules/curly
     */
    curly: ["error", "multi-line"],
    /**
     * Require default `case` in `switch` statements.
     * @see https://eslint.org/docs/latest/rules/default-case
     */
    "default-case": "off",
    /**
     * Enforce consistent newlines before and after dots.
     * @see https://eslint.org/docs/latest/rules/dot-location
     */
    "dot-location": ["error", "property"],
    /**
     * Enforce dot notation whenever possible.
     * @see https://eslint.org/docs/latest/rules/dot-notation
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/properties.html#dot-notation
     */
    "dot-notation": ["warn", { allowKeywords: true }],
    /**
     * Require the use of `===` and `!==`.
     * @see https://eslint.org/docs/latest/rules/eqeqeq
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/comparison_operators_and_equality.md#equality-syntax
     */
    eqeqeq: ["error", "always", { null: "ignore" }],
    /**
     * Require `for-in` loops to include an `if` statement.
     * @see https://eslint.org/docs/latest/rules/guard-for-in
     */
    "guard-for-in": "warn",
    /**
     * Enforce a maximum number of classes per file.
     * @since 0.6.0
     * @see https://eslint.org/docs/latest/rules/max-classes-per-file
     */
    "max-classes-per-file": "off",
    /**
     * Disallow the use of `alert`, `confirm`, and `prompt`.
     * @see https://eslint.org/docs/latest/rules/no-alert
     */
    "no-alert": "warn",
    /**
     * Disallow the use of `arguments.caller` or `arguments.callee`.
     * @see https://eslint.org/docs/latest/rules/no-caller
     */
    "no-caller": "error",
    /**
     * Disallow lexical declarations in case/default clauses.
     * @see https://eslint.org/docs/latest/rules/no-case-declarations
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/comparison_operators_and_equality.md#switch-blocks
     */
    "no-case-declarations": "error",
    /**
     * Disallow division operators explicitly at the beginning of regular expressions.
     * @see https://eslint.org/docs/latest/rules/no-div-regex
     */
    "no-div-regex": "off",
    /**
     * Disallow `else` blocks after return statements in `if` statements.
     * @see https://eslint.org/docs/latest/rules/no-else-return
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/blocks.md#no-else-return
     */
    "no-else-return": ["error", { allowElseIf: false }],
    /**
     * Disallow empty functions except for standalone functions and arrow functions.
     * @see https://eslint.org/docs/latest/rules/no-empty-function
     */
    "no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],
    /**
     * Disallow empty destructuring patterns.
     * @see https://eslint.org/docs/latest/rules/no-empty-pattern
     */
    "no-empty-pattern": "error",
    /**
     * Disallow null comparisons without type-checking operators.
     * @see https://eslint.org/docs/latest/rules/no-eq-null
     */
    "no-eq-null": "off",
    /**
     * Disallow the use of `eval()` since it is potentially dangerous and often misused.
     * @see https://eslint.org/docs/latest/rules/no-eval
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/strings.md#no-eval
     */
    "no-eval": "error",
    /**
     * Disallow extending native types/objects.
     * Should only be triggered on polyfills, which we can fix case-by-case.
     * @see https://eslint.org/docs/latest/rules/no-extend-native
     */
    "no-extend-native": "warn",
    /**
     * Disallow unnecessary function binding via `bind()`.
     * @see https://eslint.org/docs/latest/rules/no-extra-bind
     */
    "no-extra-bind": "error",
    /**
     * Disallow unnecessary labels.
     * @see https://eslint.org/docs/latest/rules/no-extra-label
     */
    "no-extra-label": "error",
    /**
     * Disallow `case` statement fallthrough.
     * @see https://eslint.org/docs/latest/rules/no-fallthrough
     */
    "no-fallthrough": "error",
    /**
     * Disallow leading or trailing decimal points in numeric literals.
     * @see https://eslint.org/docs/latest/rules/no-floating-decimal
     */
    "no-floating-decimal": "error",
    /**
     * Disallow assignments to native objects or read-only global variables.
     * @see https://eslint.org/docs/latest/rules/no-global-assign
     */
    "no-global-assign": "error",
    /**
     * Disallow type conversion with shorter notations.
     * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
     */
    "no-implicit-coercion": "off",
    /**
     * Disallow variable and function declarations in the global scope.
     * @see https://eslint.org/docs/latest/rules/no-implicit-globals
     */
    "no-implicit-globals": "warn",
    /**
     * Disallow the use of `eval()` like methods.
     * @see https://eslint.org/docs/latest/rules/no-implied-eval
     */
    "no-implied-eval": "error",
    /**
     * Disallow `this` keywords outside of classes or class-like objects.
     * @see https://eslint.org/docs/latest/rules/no-invalid-this
     */
    "no-invalid-this": "off",
    /**
     * Disallow the use of the `__iterator__` property and let Babel handle it.
     * @see https://eslint.org/docs/latest/rules/no-iterator
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/iterators_and_generators.md#no-iterators
     */
    "no-iterator": "error",
    /**
     * Disallow labeled statements.
     * @see https://eslint.org/docs/latest/rules/no-labels
     */
    "no-labels": [
      "error",
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    /**
     * Disallow unnecessary nested blocks.
     * @see https://eslint.org/docs/latest/rules/no-lone-blocks
     */
    "no-lone-blocks": "warn",
    /**
     * Disallow function declarations and expressions inside loop statements.
     * @see https://eslint.org/docs/latest/rules/no-loop-func
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#block-declaration
     */
    "no-loop-func": "error",
    /**
     * Disallow magic numbers.
     * @see https://eslint.org/docs/latest/rules/no-magic-numbers
     */
    "no-magic-numbers": [
      "off",
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    /**
     * Disallow multiple spaces.
     * @see https://eslint.org/docs/latest/rules/no-multi-spaces
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/whitespace.md#self-closing-tags
     */
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    /**
     * Disallow multiline strings in favor of template literals.
     * @see https://eslint.org/docs/latest/rules/no-multi-str
     */
    "no-multi-str": "error",
    /**
     * Disallow new operators outside of assignments or comparisons for side effects.
     * @see https://eslint.org/docs/latest/rules/no-new
     */
    "no-new": "error",
    /**
     * Disallow `new` operators with the `Function` object.
     * @see https://eslint.org/docs/latest/rules/no-new-func
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#constructor
     */
    "no-new-func": "error",
    /**
     * Disallow primitive wrapper instances via the `new` operator for `String`, `Number`, and `Boolean` objects.
     * @see https://eslint.org/docs/latest/rules/no-new-wrappers
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/type_casting_and_coercion.md#Bitshift
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/type_casting_and_coercion.md#numbers
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/type_casting_and_coercion.md#booleans
     */
    "no-new-wrappers": "error",
    /**
     * Disallow octal literals.
     * @see https://eslint.org/docs/latest/rules/no-octal
     */
    "no-octal": "error",
    /**
     * Disallow octal escape sequences in string literals.
     * @see https://eslint.org/docs/latest/rules/no-octal-escape
     */
    "no-octal-escape": "error",
    /**
     * Disallow reassigning function parameters except for specific exclusions.
     * @see https://eslint.org/docs/latest/rules/no-param-reassign
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#parameter-mutation
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#parameter-reassign
     */
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          // Reduce accumulators
          "acc",
          // `e.returnvalue`
          "e",
          // Koa routing
          "ctx",
          // Requests and responses
          "req",
          "request",
          "res",
          "response",
          "staticContext",
        ],
      },
    ],
    /**
     * Disallow the use of the `__proto__` property.
     * @see https://eslint.org/docs/latest/rules/no-proto
     */
    "no-proto": "error",
    /**
     * Disallow variable re-declaration.
     * @see https://eslint.org/docs/latest/rules/no-redeclare
     */
    "no-redeclare": "error",
    /**
     * Disallow certain properties on certain objects.
     * @see https://eslint.org/docs/latest/rules/no-restricted-properties
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/properties.md#exponentiation-operator
     */
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Please use the exponentiation operator (**) instead.",
      },
    ],
    /**
     * Disallow assignment operators in return statements.
     * @see https://eslint.org/docs/latest/rules/no-return-assign
     */
    "no-return-assign": ["error", "always"],
    /**
     * Disallow unnecessary `return await`.
     * @see https://eslint.org/docs/latest/rules/no-return-await
     */
    "no-return-await": "error",
    /**
     * Disallow script (`javascript:`) URLs.
     * @see https://eslint.org/docs/latest/rules/no-script-url
     */
    "no-script-url": "error",
    /**
     * Disallow self assignments.
     * @see https://eslint.org/docs/latest/rules/no-self-assign
     */
    "no-self-assign": "error",
    /**
     * Disallow self comparisons.
     * @see https://eslint.org/docs/latest/rules/no-self-compare
     */
    "no-self-compare": "error",
    /**
     * Disallow comma operators.
     * @see https://eslint.org/docs/latest/rules/no-sequences
     */
    "no-sequences": "error",
    /**
     * Disallow throwing literals as exceptions.
     * @see https://eslint.org/docs/latest/rules/no-throw-literal
     */
    "no-throw-literal": "error",
    /**
     * Disallow unmodified loop conditions.
     * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
     */
    "no-unmodified-loop-condition": "off",
    /**
     * Disallow unused expressions.
     * @see https://eslint.org/docs/latest/rules/no-unused-expressions
     */
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    /**
     * Disallow unused labels.
     * @see https://eslint.org/docs/latest/rules/no-unused-labels
     */
    "no-unused-labels": "error",
    /**
     * Disallow unnecessary calls to `call()` and `apply()`.
     * @see https://eslint.org/docs/latest/rules/no-useless-call
     */
    "no-useless-call": "off",
    /**
     * Disallow unnecessary catch clauses.
     * @since 0.6.0
     * @see https://eslint.org/docs/latest/rules/no-useless-catch
     */
    "no-useless-catch": "error",
    /**
     * Disallow unnecessary concatenation of literals or template literals.
     * @see https://eslint.org/docs/latest/rules/no-useless-concat
     */
    "no-useless-concat": "error",
    /**
     * Disallow unnecessary escape characters.
     * @see https://eslint.org/docs/latest/rules/no-useless-escape
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/strings.md#escaping
     */
    "no-useless-escape": "error",
    /**
     * Disallow redundant return statements.
     * @see https://eslint.org/docs/latest/rules/no-useless-return
     */
    "no-useless-return": "error",
    /**
     * Disallow `void` operators.
     * @see https://eslint.org/docs/latest/rules/no-void
     */
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    /**
     * Disallow specified warning terms in comments.
     * @see https://eslint.org/docs/latest/rules/no-warning-comments
     */
    "no-warning-comments": [
      "off",
      {
        terms: ["todo", "fixme"],
        location: "start",
      },
    ],
    /**
     * Disallow `with` statements.
     * @see https://eslint.org/docs/latest/rules/no-with
     */
    "no-with": "error",
    /**
     * Suggest using named capture group in regular expression.
     * @since 0.6.0
     * @see https://eslint.org/docs/latest/rules/prefer-named-capture-group
     */
    "prefer-named-capture-group": "off",
    /**
     * Require using Error objects as Promise rejection reasons.
     * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
     */
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    /**
     * Enforce the consistent use of the radix argument when using `parseInt()`.
     * @see https://eslint.org/docs/latest/rules/radix
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/type_casting_and_coercion.md#numbers
     */
    radix: "error",
    /**
     * Disallow async functions which have no await expression.
     * @see https://eslint.org/docs/latest/rules/require-await
     */
    "require-await": "off",
    /**
     * Enforce the use of `u` flag on RegExp.
     * @since 0.6.0
     * @see https://eslint.org/docs/latest/rules/require-unicode-regexp
     */
    "require-unicode-regexp": "off",
    /**
     * Require `var` declarations be placed at the top of their containing scope.
     * @see https://eslint.org/docs/latest/rules/vars-on-top
     */
    "vars-on-top": "error",
    /**
     * Require parentheses around immediate function invocations.
     * @see https://eslint.org/docs/latest/rules/wrap-iife
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#iife
     */
    "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
    /**
     * Require or disallow `Yoda` conditions.
     * @see https://eslint.org/docs/latest/rules/yoda
     */
    yoda: "off",
  },
};
