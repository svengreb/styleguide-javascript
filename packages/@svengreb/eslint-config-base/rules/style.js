/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const INDENT_SIZE = 2;
const MAX_LINE_LENGTH = 160;

/**
 * Rules related to style guidelines.
 *
 * @see https://eslint.org/docs/latest/rules/#stylistic-issues
 */
module.exports = {
  rules: {
    /**
     * Enforce line breaks after opening and before closing array brackets.
     * @see https://eslint.org/docs/latest/rules/array-bracket-newline
     */
    "array-bracket-newline": ["warn", "consistent"],
    /**
     * Enforce consistent spacing inside array brackets.
     * @see https://eslint.org/docs/latest/rules/array-bracket-spacing
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#inside-brackets
     */
    "array-bracket-spacing": ["error", "never"],
    /**
     * Enforce line breaks after each array element.
     * This rule is disabled because it varies from case-to-case and should be handled by a AST formatter (e.g.
     * Prettier) or manually by the author.
     * @see https://eslint.org/docs/latest/rules/array-element-newline
     * @see https://prettier.io
     */
    "array-element-newline": [
      "off",
      {
        multiline: true,
        minItems: 4,
      },
    ],
    /**
     * Disallow or enforce spaces inside of blocks after opening block and before closing block.
     * @see https://eslint.org/docs/latest/rules/block-spacing
     */
    "block-spacing": ["error", "always"],
    /**
     * Enforce consistent brace style for blocks.
     * @see https://eslint.org/docs/latest/rules/brace-style
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/blocks.md#brace-style
     */
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    /**
     * Enforce camelCase naming convention.
     * @see https://eslint.org/docs/latest/rules/camelcase
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/naming_conventions.md#camelcase
     * @see https://en.wikipedia.org/wiki/Camel_case
     */
    camelcase: ["error", { properties: "always" }],
    /**
     * Enforce or disallow capitalization of the first letter of a comment.
     * @see https://eslint.org/docs/latest/rules/capitalized-comments
     */
    "capitalized-comments": ["warn", "always"],
    /**
     * Require trailing commas for multiline statements.
     * @see https://eslint.org/docs/latest/rules/comma-dangle
     */
    "comma-dangle": ["error", "always-multiline"],
    /**
     * Enforce consistent spacing before and after commas.
     * @see https://eslint.org/docs/latest/rules/comma-spacing
     */
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    /**
     * Enforce consistent comma style.
     * @see https://eslint.org/docs/latest/rules/comma-style
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/commas.md#leading-and-trailing
     */
    "comma-style": [
      "error",
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    /**
     * Enforce consistent spacing inside computed property brackets.
     * @see https://eslint.org/docs/latest/rules/computed-property-spacing
     */
    "computed-property-spacing": ["error", "never"],
    /**
     * Enforce consistent naming when capturing the current execution context.
     * @see https://eslint.org/docs/latest/rules/consistent-this
     */
    "consistent-this": "off",
    /**
     * Require or disallow newline at the end of files.
     * @see https://eslint.org/docs/latest/rules/eol-last
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#newline
     */
    "eol-last": ["error", "always"],
    /**
     * Require or disallow spacing between function identifiers and their invocations.
     * @see https://eslint.org/docs/latest/rules/func-call-spacing
     */
    "func-call-spacing": ["error", "never"],
    /**
     * Require function names to match the name of the variable or property to which they are assigned.
     * @see https://eslint.org/docs/latest/rules/func-name-matching
     */
    "func-name-matching": "off",
    /**
     * Require or disallow named function expressions.
     * @see https://eslint.org/docs/latest/rules/func-names
     */
    "func-names": "warn",
    /**
     * Enforce the consistent use of either `function` declarations or expressions.
     * @see https://eslint.org/docs/latest/rules/func-style
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#declaration
     */
    "func-style": ["off", "expression"],
    /**
     * Enforce line breaks between arguments of a function call.
     * @since 0.6.0
     * @see https://eslint.org/docs/latest/rules/function-call-argument-newline
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#signature-invocation-indentation
     */
    "function-call-argument-newline": ["off", "consistent"],
    /**
     * Enforce consistent line breaks inside function parentheses.
     * @see https://eslint.org/docs/latest/rules/function-paren-newline
     */
    "function-paren-newline": ["error", "consistent"],
    /**
     * Disallow specified identifiers.
     * @see https://eslint.org/docs/latest/rules/id-blacklist
     */
    "id-blacklist": "off",
    /**
     * Enforce minimum and maximum identifier lengths.
     * @see https://eslint.org/docs/latest/rules/id-length
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/naming_conventions.md#descriptive
     */
    "id-length": "off",
    /**
     * Require identifiers to match a specified regular expression.
     * @see https://eslint.org/docs/latest/rules/id-match
     */
    "id-match": "off",
    /**
     * Enforce the location of arrow function bodies.
     * @see https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
     */
    "implicit-arrow-linebreak": ["off", "beside"],
    /**
     * Enforce consistent indentation.
     * The list of ignored nodes has been derived from "benjamn/ast-types".
     * @see https://eslint.org/docs/latest/rules/indent
     * @see https://github.com/benjamn/ast-types/blob/master/src/def/jsx.ts
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#indentation-character
     */
    indent: [
      "error",
      INDENT_SIZE,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],
    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes.
     * @see https://eslint.org/docs/latest/rules/jsx-quotes
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/strings.md#quotes
     */
    "jsx-quotes": ["error", "prefer-double"],
    /**
     * Enforce consistent "spacing" between keys and values in object literal properties.
     * @see https://eslint.org/docs/latest/rules/key-spacing
     */
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    /**
     * Enforce consistent spacing before and after keywords.
     * @see https://eslint.org/docs/latest/rules/keyword-spacing
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#around-keywords
     */
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    /**
     * Enforce position of line comments.
     * @see https://eslint.org/docs/latest/rules/line-comment-position
     */
    "line-comment-position": ["warn", { position: "above" }],
    /**
     * Enforce consistent line break style.
     * @see https://eslint.org/docs/latest/rules/linebreak-style
     */
    "linebreak-style": ["error", "unix"],
    /**
     * Require empty lines around comments.
     * @see https://eslint.org/docs/latest/rules/lines-around-comment
     */
    "lines-around-comment": "off",
    /**
     * Require or disallow an empty line between class members.
     * @see https://eslint.org/docs/latest/rules/lines-between-class-members
     */
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
    /**
     * Enforce a maximum depth that blocks can be nested.
     * @see https://eslint.org/docs/latest/rules/max-depth
     */
    "max-depth": ["warn", 4],
    /**
     * Enforce a maximum line length.
     * @see https://eslint.org/docs/latest/rules/max-len
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#maximum-line-length
     */
    "max-len": [
      "error",
      MAX_LINE_LENGTH,
      INDENT_SIZE,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    /**
     * Enforce a maximum number of lines per file.
     * @see https://eslint.org/docs/latest/rules/max-lines
     */
    "max-lines": "off",
    /**
     * Enforce a maximum function length.
     * @since 0.6.0
     * @see https://eslint.org/docs/latest/rules/max-lines-per-function
     */
    "max-lines-per-function": "off",
    /**
     * Enforce a maximum depth that callbacks can be nested.
     * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
     */
    "max-nested-callbacks": "off",
    /**
     * Enforce a maximum number of parameters in function definitions.
     * @see https://eslint.org/docs/latest/rules/max-params
     */
    "max-params": "off",
    /**
     * Enforce a maximum number of statements allowed in function blocks.
     * @see https://eslint.org/docs/latest/rules/max-statements
     */
    "max-statements": "off",
    /**
     * Enforce a maximum number of statements allowed per line.
     * @see https://eslint.org/docs/latest/rules/max-statements-per-line
     */
    "max-statements-per-line": "off",
    /**
     * Enforce a particular style for multiline comments.
     * @see https://eslint.org/docs/latest/rules/multiline-comment-style
     */
    "multiline-comment-style": ["error", "starred-block"],
    /**
     * Enforce newlines between operands of ternary expressions.
     * @see https://eslint.org/docs/latest/rules/multiline-ternary
     */
    "multiline-ternary": "off",
    /**
     * Require constructor names to begin with a capital letter.
     * @see https://eslint.org/docs/latest/rules/new-cap
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/naming_conventions.md#pascalcase
     */
    "new-cap": "off",
    /**
     * Require parentheses when invoking a constructor with no arguments.
     * @see https://eslint.org/docs/latest/rules/new-parens
     */
    "new-parens": "error",
    /**
     * Require a newline after each call in a method chain.
     * @see https://eslint.org/docs/latest/rules/newline-per-chained-call
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#chains
     */
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    /**
     * Disallow "Array" constructors.
     * @see https://eslint.org/docs/latest/rules/no-array-constructor
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/arrays.md#literals
     */
    "no-array-constructor": "error",
    /**
     * Disallow bitwise operators.
     * @see https://eslint.org/docs/latest/rules/no-bitwise
     */
    "no-bitwise": "warn",
    /**
     * Disallow `continue` statements.
     * @see https://eslint.org/docs/latest/rules/no-continue
     */
    "no-continue": "error",
    /**
     * Disallow inline comments after code.
     * @see https://eslint.org/docs/latest/rules/no-inline-comments
     */
    "no-inline-comments": "error",
    /**
     * Disallow `if` statements as the only statement in `else` blocks.
     * @see https://eslint.org/docs/latest/rules/no-lonely-if
     */
    "no-lonely-if": "off",
    /**
     * Disallow mixes of different operators.
     * @see https://eslint.org/docs/latest/rules/no-mixed-operators
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/comparison_operators_and_equality.md#no-mixed-operators
     */
    "no-mixed-operators": [
      "warn",
      {
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          ["&", "|", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!=="],
          ["&&", "||"],
        ],
        allowSamePrecedence: false,
      },
    ],
    /**
     * Disallow mixed spaces and tabs for indentation.
     * @see https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
     */
    "no-mixed-spaces-and-tabs": "error",
    /**
     * Disallow use of chained assignment expressions.
     * @see https://eslint.org/docs/latest/rules/no-multi-assign
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/variables.md#no-chain-assignment
     */
    "no-multi-assign": "error",
    /**
     * Disallow multiple empty lines.
     * @see https://eslint.org/docs/latest/rules/no-multiple-empty-lines
     */
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    /**
     * Disallow negated conditions.
     * @see https://eslint.org/docs/latest/rules/no-negated-condition
     */
    "no-negated-condition": "off",
    /**
     * Disallow nested ternary expressions.
     * @see https://eslint.org/docs/latest/rules/no-nested-ternary
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/comparison_operators_and_equality.md#nested-ternaries
     */
    "no-nested-ternary": "error",
    /**
     * Disallow Object constructors.
     * @see https://eslint.org/docs/latest/rules/no-new-object
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/objects.md#no-new
     */
    "no-new-object": "error",
    /**
     * Disallow the unary operators `++` and `--`.
     * @see https://eslint.org/docs/latest/rules/no-plusplus
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/variables.md#no-unary-increment-and-decrement
     */
    "no-plusplus": "error",
    /**
     * Disallow specified syntax.
     * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/iterators_and_generators.md#no-iterators
     */
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "'for..in' loops iterate over the entire prototype chain, which is virtually not what's intended in most cases. Use 'Object.{keys,values,entries}', and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message:
          "iterators/generators require 'regenerator-runtime', which are too heavyweight. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO. Using them makes code confusing, hard to maintain, and decreases the readability.",
      },
      {
        selector: "WithStatement",
        message: "'with' is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    /**
     * Disallow all tabs.
     * @see https://eslint.org/docs/latest/rules/no-tabs
     */
    "no-tabs": "error",
    /**
     * Disallow ternary operators.
     * @see https://eslint.org/docs/latest/rules/no-ternary
     */
    "no-ternary": "off",
    /**
     * Disallow trailing whitespace at the end of lines.
     * @see https://eslint.org/docs/latest/rules/no-trailing-spaces
     */
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    /**
     * Disallow dangling underscores in identifiers.
     * @see https://eslint.org/docs/latest/rules/no-underscore-dangle
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/naming_conventions.md#underscores
     */
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    /**
     * Disallow ternary operators when simpler alternatives exist.
     * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/comparison_operators_and_equality.md#avoid-unneeded-ternary
     */
    "no-unneeded-ternary": ["warn", { defaultAssignment: false }],
    /**
     * Disallow whitespace before properties.
     * @see https://eslint.org/docs/latest/rules/no-whitespace-before-property
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#chains
     */
    "no-whitespace-before-property": "error",
    /**
     * Enforce the location of single-line statements.
     * @see https://eslint.org/docs/latest/rules/nonblock-statement-body-position
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/blocks.md#braces
     */
    "nonblock-statement-body-position": ["error", "beside"],
    /**
     * Enforce consistent spacing inside braces.
     * @see https://eslint.org/docs/latest/rules/object-curly-spacing
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#inside-braces
     */
    "object-curly-spacing": ["error", "always"],
    /**
     * Enforce consistent line breaks inside braces.
     * @see https://eslint.org/docs/latest/rules/object-curly-newline
     */
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
        ImportDeclaration: { multiline: true, consistent: true },
        ExportDeclaration: { multiline: true, consistent: true },
      },
    ],
    /**
     * Enforce placing object properties on separate lines.
     * @see https://eslint.org/docs/latest/rules/object-property-newline
     */
    "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
    /**
     * Enforce variables to be declared either together or separately in functions.
     * @see https://eslint.org/docs/latest/rules/one-var
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/variables.md#declaration-separation
     */
    "one-var": ["error", "never"],
    /**
     * Require or disallow newlines around variable declarations.
     * @see https://eslint.org/docs/latest/rules/one-var-declaration-per-line
     */
    "one-var-declaration-per-line": ["error", "always"],
    /**
     * Require or disallow assignment operator shorthand where possible.
     * @see https://eslint.org/docs/latest/rules/operator-assignment
     */
    "operator-assignment": ["warn", "always"],
    /**
     * Enforce consistent line break style for operators.
     * @see https://eslint.org/docs/latest/rules/operator-linebreak
     */
    "operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before" } }],
    /**
     * Require or disallow padding within blocks.
     * @see https://eslint.org/docs/latest/rules/padded-blocks
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#padded-blocks
     */
    "padded-blocks": ["error", "never"],
    /**
     * Require or disallow padding lines between statements.
     * @see https://eslint.org/docs/latest/rules/padding-line-between-statements
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/objects.md#quoted-properties
     */
    "padding-line-between-statements": "off",
    /**
     * Prefer use of an object spread over `Object.assign`.
     * @since 0.6.0
     * @see https://eslint.org/docs/latest/rules/prefer-object-spread
     */
    "prefer-object-spread": "warn",
    /**
     * Require quotes around object literal property names.
     * @see https://eslint.org/docs/latest/rules/quote-props
     */
    "quote-props": [
      "warn",
      "as-needed",
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    /**
     * Enforce the consistent use of either backticks, double, or single quotes.
     * @see https://eslint.org/docs/latest/rules/quotes
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/strings.md#quotes
     */
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    /**
     * Enforce or disallow semicolons instead of ASI.
     * @see https://eslint.org/docs/latest/rules/semi
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/semicolons.md
     */
    semi: ["error", "always"],
    /**
     * Enforce consistent spacing before and after semicolons.
     * @see https://eslint.org/docs/latest/rules/semi-spacing
     */
    "semi-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    /**
     * Enforce location of semicolons.
     * @see https://eslint.org/docs/latest/rules/semi-style
     */
    "semi-style": ["error", "last"],
    /**
     * Require object keys to be sorted.
     * @see https://eslint.org/docs/latest/rules/sort-keys
     */
    "sort-keys": [
      "off",
      "asc",
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    /**
     * Require variables within the same declaration block to be sorted.
     * @see https://eslint.org/docs/latest/rules/sort-vars
     */
    "sort-vars": "off",
    /**
     * Enforce consistent spacing before blocks.
     * @see https://eslint.org/docs/latest/rules/space-before-blocks
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#signature-spacing
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#before-blocks
     */
    "space-before-blocks": ["error", "always"],
    /**
     * Enforce consistent spacing before function definition opening parenthesis.
     * @see https://eslint.org/docs/latest/rules/space-before-function-paren
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/functions.md#signature-spacing
     */
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    /**
     * Enforce consistent spacing inside parentheses.
     * @see https://eslint.org/docs/latest/rules/space-in-parens
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#inside-parentheses
     */
    "space-in-parens": ["error", "never"],
    /**
     * Require spacing around infix operators.
     * @see https://eslint.org/docs/latest/rules/space-infix-ops
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#infix-operator-spacing
     */
    "space-infix-ops": "error",
    /**
     * Enforce consistent spacing before or after unary operators.
     * @see https://eslint.org/docs/latest/rules/space-unary-ops
     */
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
      },
    ],
    /**
     * Enforce consistent spacing after the `//` or `/*` in a comment.
     * @see https://eslint.org/docs/latest/rules/spaced-comment
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/comments.md#spacing
     */
    "spaced-comment": [
      "warn",
      "always",
      {
        line: {
          exceptions: ["+-"],
          markers: [
            "!",
            /*
             * Support for TypeScript triple-slash directives.
             * See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.md for more details.
             */
            "/",
          ],
        },
        block: {
          exceptions: ["+-"],
          markers: ["!"],
          balanced: true,
        },
      },
    ],
    /**
     * Enforce spacing around colons of switch statements.
     * @see https://eslint.org/docs/latest/rules/switch-colon-spacing
     */
    "switch-colon-spacing": [
      "error",
      {
        after: true,
        before: false,
      },
    ],
    /**
     * Require or disallow spacing between template tags and their literals.
     * @see https://eslint.org/docs/latest/rules/template-tag-spacing
     */
    "template-tag-spacing": ["error", "never"],
    /**
     * Require or disallow Unicode byte order mark (BOM).
     * @see https://eslint.org/docs/latest/rules/unicode-bom
     */
    "unicode-bom": ["error", "never"],
    /**
     * Require parenthesis around regex literals.
     * @see https://eslint.org/docs/latest/rules/wrap-regex
     */
    "wrap-regex": "off",
  },
};
