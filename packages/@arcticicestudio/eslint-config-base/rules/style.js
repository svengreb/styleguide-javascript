/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

const INDENT_SIZE = 2;
const MAX_LINE_LENGTH = 120;

/**
 * Rules related to style guidelines.
 *
 * @see https://eslint.org/docs/rules/#stylistic-issues
 */
module.exports = {
  rules: {
    /**
     * Enforce line breaks after opening and before closing array brackets.
     * @see https://eslint.org/docs/rules/array-bracket-newline
     */
    "array-bracket-newline": ["warn", "consistent"],
    /**
     * Enforce consistent spacing inside array brackets.
     * @see https://eslint.org/docs/rules/array-bracket-spacing
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#inside-brackets
     */
    "array-bracket-spacing": ["error", "never"],
    /**
     * Enforce line breaks after each array element.
     * This rule is disabled because it varies from case-to-case and should be handled by a AST formatter (e.g.
     * Prettier) or manually by the author.
     * @see https://eslint.org/docs/rules/array-element-newline
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
     * @see https://eslint.org/docs/rules/block-spacing
     */
    "block-spacing": ["error", "always"],
    /**
     * Enforce consistent brace style for blocks.
     * @see https://eslint.org/docs/rules/brace-style
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/blocks.html#brace-style
     */
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    /**
     * Enforce camelCase naming convention.
     * @see https://eslint.org/docs/rules/camelcase
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/naming_conventions.html#camelcase
     * @see https://en.wikipedia.org/wiki/Camel_case
     */
    camelcase: ["error", { properties: "always" }],
    /**
     * Enforce or disallow capitalization of the first letter of a comment.
     * @see https://eslint.org/docs/rules/capitalized-comments
     */
    "capitalized-comments": ["warn", "always"],
    /**
     * Require trailing commas for multiline statements.
     * @see https://eslint.org/docs/rules/comma-dangle
     */
    "comma-dangle": ["error", "always-multiline"],
    /**
     * Enforce consistent spacing before and after commas.
     * @see https://eslint.org/docs/rules/comma-spacing
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
     * @see https://eslint.org/docs/rules/comma-style
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/commas.html#leading-and-trailing
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
     * @see https://eslint.org/docs/rules/computed-property-spacing
     */
    "computed-property-spacing": ["error", "never"],
    /**
     * Enforce consistent naming when capturing the current execution context.
     * @see https://eslint.org/docs/rules/consistent-this
     */
    "consistent-this": "off",
    /**
     * Require or disallow newline at the end of files.
     * @see https://eslint.org/docs/rules/eol-last
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#newline
     */
    "eol-last": ["error", "always"],
    /**
     * Require or disallow spacing between function identifiers and their invocations.
     * @see https://eslint.org/docs/rules/func-call-spacing
     */
    "func-call-spacing": ["error", "never"],
    /**
     * Require function names to match the name of the variable or property to which they are assigned.
     * @see https://eslint.org/docs/rules/func-name-matching
     */
    "func-name-matching": "off",
    /**
     * Require or disallow named function expressions.
     * @see https://eslint.org/docs/rules/func-names
     */
    "func-names": "warn",
    /**
     * Enforce the consistent use of either `function` declarations or expressions.
     * @see https://eslint.org/docs/rules/func-style
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/functions.html#declaration
     */
    "func-style": ["off", "expression"],
    /**
     * Enforce line breaks between arguments of a function call.
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/function-call-argument-newline
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/functions.html#signature-invocation-indentation
     */
    "function-call-argument-newline": ["off", "consistent"],
    /**
     * Enforce consistent line breaks inside function parentheses.
     * @see https://eslint.org/docs/rules/function-paren-newline
     */
    "function-paren-newline": ["error", "consistent"],
    /**
     * Disallow specified identifiers.
     * @see https://eslint.org/docs/rules/id-blacklist
     */
    "id-blacklist": "off",
    /**
     * Enforce minimum and maximum identifier lengths.
     * @see https://eslint.org/docs/rules/id-length
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/naming_conventions.html#descriptive
     */
    "id-length": "off",
    /**
     * Require identifiers to match a specified regular expression.
     * @see https://eslint.org/docs/rules/id-match
     */
    "id-match": "off",
    /**
     * Enforce the location of arrow function bodies.
     * @see https://eslint.org/docs/rules/implicit-arrow-linebreak
     */
    "implicit-arrow-linebreak": ["off", "beside"],
    /**
     * Enforce consistent indentation.
     * The list of ignored nodes has been derived from "benjamn/ast-types".
     * @see https://eslint.org/docs/rules/indent
     * @see https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#indentation-character
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
     * @see https://eslint.org/docs/rules/jsx-quotes
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/strings.html#quotes
     */
    "jsx-quotes": ["error", "prefer-double"],
    /**
     * Enforce consistent "spacing" between keys and values in object literal properties.
     * @see https://eslint.org/docs/rules/key-spacing
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
     * @see https://eslint.org/docs/rules/keyword-spacing
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#around-keywords
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
     * @see https://eslint.org/docs/rules/line-comment-position
     */
    "line-comment-position": ["warn", { position: "above" }],
    /**
     * Enforce consistent line break style.
     * @see https://eslint.org/docs/rules/linebreak-style
     */
    "linebreak-style": ["error", "unix"],
    /**
     * Require empty lines around comments.
     * @see https://eslint.org/docs/rules/lines-around-comment
     */
    "lines-around-comment": "off",
    /**
     * Require or disallow an empty line between class members.
     * @see https://eslint.org/docs/rules/lines-between-class-members
     */
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
    /**
     * Enforce a maximum depth that blocks can be nested.
     * @see https://eslint.org/docs/rules/max-depth
     */
    "max-depth": ["warn", 4],
    /**
     * Enforce a maximum line length.
     * @see https://eslint.org/docs/rules/max-len
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#maximum-line-length
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
     * @see https://eslint.org/docs/rules/max-lines
     */
    "max-lines": "off",
    /**
     * Enforce a maximum function length.
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/max-lines-per-function
     */
    "max-lines-per-function": "off",
    /**
     * Enforce a maximum depth that callbacks can be nested.
     * @see https://eslint.org/docs/rules/max-nested-callbacks
     */
    "max-nested-callbacks": "off",
    /**
     * Enforce a maximum number of parameters in function definitions.
     * @see https://eslint.org/docs/rules/max-params
     */
    "max-params": "off",
    /**
     * Enforce a maximum number of statements allowed in function blocks.
     * @see https://eslint.org/docs/rules/max-statements
     */
    "max-statements": "off",
    /**
     * Enforce a maximum number of statements allowed per line.
     * @see https://eslint.org/docs/rules/max-statements-per-line
     */
    "max-statements-per-line": "off",
    /**
     * Enforce a particular style for multiline comments.
     * @see https://eslint.org/docs/rules/multiline-comment-style
     */
    "multiline-comment-style": ["error", "starred-block"],
    /**
     * Enforce newlines between operands of ternary expressions.
     * @see https://eslint.org/docs/rules/multiline-ternary
     */
    "multiline-ternary": "off",
    /**
     * Require constructor names to begin with a capital letter.
     * @see https://eslint.org/docs/rules/new-cap
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/naming_conventions.html#pascalcase
     */
    "new-cap": "off",
    /**
     * Require parentheses when invoking a constructor with no arguments.
     * @see https://eslint.org/docs/rules/new-parens
     */
    "new-parens": "error",
    /**
     * Require a newline after each call in a method chain.
     * @see https://eslint.org/docs/rules/newline-per-chained-call
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#chains
     */
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    /**
     * Disallow "Array" constructors.
     * @see https://eslint.org/docs/rules/no-array-constructor
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/arrays.html#literals
     */
    "no-array-constructor": "error",
    /**
     * Disallow bitwise operators.
     * @see https://eslint.org/docs/rules/no-bitwise
     */
    "no-bitwise": "warn",
    /**
     * Disallow `continue` statements.
     * @see https://eslint.org/docs/rules/no-continue
     */
    "no-continue": "error",
    /**
     * Disallow inline comments after code.
     * @see https://eslint.org/docs/rules/no-inline-comments
     */
    "no-inline-comments": "error",
    /**
     * Disallow `if` statements as the only statement in `else` blocks.
     * @see https://eslint.org/docs/rules/no-lonely-if
     */
    "no-lonely-if": "off",
    /**
     * Disallow mixes of different operators.
     * @see https://eslint.org/docs/rules/no-mixed-operators
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/comparison_operators_and_equality.html#no-mixed-operators
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
     * @see https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    "no-mixed-spaces-and-tabs": "error",
    /**
     * Disallow use of chained assignment expressions.
     * @see https://eslint.org/docs/rules/no-multi-assign
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/variables.html#no-chain-assignment
     */
    "no-multi-assign": "error",
    /**
     * Disallow multiple empty lines.
     * @see https://eslint.org/docs/rules/no-multiple-empty-lines
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
     * @see https://eslint.org/docs/rules/no-negated-condition
     */
    "no-negated-condition": "off",
    /**
     * Disallow nested ternary expressions.
     * @see https://eslint.org/docs/rules/no-nested-ternary
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/comparison_operators_and_equality.html#nested-ternaries
     */
    "no-nested-ternary": "error",
    /**
     * Disallow Object constructors.
     * @see https://eslint.org/docs/rules/no-new-object
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/objects.html#no-new
     */
    "no-new-object": "error",
    /**
     * Disallow the unary operators `++` and `--`.
     * @see https://eslint.org/docs/rules/no-plusplus
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/variables.html#no-unary-increment-and-decrement
     */
    "no-plusplus": "error",
    /**
     * Disallow specified syntax.
     * @see https://eslint.org/docs/rules/no-restricted-syntax
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/iterators_and_generators.html#no-iterators
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
        message:
          "Labels are a form of GOTO. Using them makes code confusing, hard to maintain, and decreases the readability.",
      },
      {
        selector: "WithStatement",
        message: "'with' is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    /**
     * Disallow all tabs.
     * @see https://eslint.org/docs/rules/no-tabs
     */
    "no-tabs": "error",
    /**
     * Disallow ternary operators.
     * @see https://eslint.org/docs/rules/no-ternary
     */
    "no-ternary": "off",
    /**
     * Disallow trailing whitespace at the end of lines.
     * @see https://eslint.org/docs/rules/no-trailing-spaces
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
     * @see https://eslint.org/docs/rules/no-underscore-dangle
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/naming_conventions.html#underscores
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
     * @see https://eslint.org/docs/rules/no-unneeded-ternary
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/comparison_operators_and_equality.html#avoid-unneeded-ternary
     */
    "no-unneeded-ternary": ["warn", { defaultAssignment: false }],
    /**
     * Disallow whitespace before properties.
     * @see https://eslint.org/docs/rules/no-whitespace-before-property
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#chains
     */
    "no-whitespace-before-property": "error",
    /**
     * Enforce the location of single-line statements.
     * @see https://eslint.org/docs/rules/nonblock-statement-body-position
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/blocks.html#braces
     */
    "nonblock-statement-body-position": ["error", "beside"],
    /**
     * Enforce consistent spacing inside braces.
     * @see https://eslint.org/docs/rules/object-curly-spacing
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#inside-braces
     */
    "object-curly-spacing": ["error", "always"],
    /**
     * Enforce consistent line breaks inside braces.
     * @see https://eslint.org/docs/rules/object-curly-newline
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
     * @see https://eslint.org/docs/rules/object-property-newline
     */
    "object-property-newline": ["warn", { allowAllPropertiesOnSameLine: true }],
    /**
     * Enforce variables to be declared either together or separately in functions.
     * @see https://eslint.org/docs/rules/one-var
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/variables.html#declaration-separation
     */
    "one-var": ["error", "never"],
    /**
     * Require or disallow newlines around variable declarations.
     * @see https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    "one-var-declaration-per-line": ["error", "always"],
    /**
     * Require or disallow assignment operator shorthand where possible.
     * @see https://eslint.org/docs/rules/operator-assignment
     */
    "operator-assignment": ["warn", "always"],
    /**
     * Enforce consistent line break style for operators.
     * @see https://eslint.org/docs/rules/operator-linebreak
     */
    "operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before" } }],
    /**
     * Require or disallow padding within blocks.
     * @see https://eslint.org/docs/rules/padded-blocks
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#padded-blocks
     */
    "padded-blocks": ["error", "never"],
    /**
     * Require or disallow padding lines between statements.
     * @see https://eslint.org/docs/rules/padding-line-between-statements
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/objects.html#quoted-properties
     */
    "padding-line-between-statements": "off",
    /**
     * Prefer use of an object spread over `Object.assign`.
     * @since 0.6.0
     * @see https://eslint.org/docs/rules/prefer-object-spread
     */
    "prefer-object-spread": "warn",
    /**
     * Require quotes around object literal property names.
     * @see https://eslint.org/docs/rules/quote-props
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
     * @see https://eslint.org/docs/rules/quotes
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/strings.html#quotes
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
     * @see https://eslint.org/docs/rules/semi
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/semicolons.html
     */
    semi: ["error", "always"],
    /**
     * Enforce consistent spacing before and after semicolons.
     * @see https://eslint.org/docs/rules/semi-spacing
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
     * @see https://eslint.org/docs/rules/semi-style
     */
    "semi-style": ["error", "last"],
    /**
     * Require object keys to be sorted.
     * @see https://eslint.org/docs/rules/sort-keys
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
     * @see https://eslint.org/docs/rules/sort-vars
     */
    "sort-vars": "off",
    /**
     * Enforce consistent spacing before blocks.
     * @see https://eslint.org/docs/rules/space-before-blocks
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/functions.html#signature-spacing
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#before-blocks
     */
    "space-before-blocks": ["error", "always"],
    /**
     * Enforce consistent spacing before function definition opening parenthesis.
     * @see https://eslint.org/docs/rules/space-before-function-paren
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/functions.html#signature-spacing
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
     * @see https://eslint.org/docs/rules/space-in-parens
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#inside-parentheses
     */
    "space-in-parens": ["error", "never"],
    /**
     * Require spacing around infix operators.
     * @see https://eslint.org/docs/rules/space-infix-ops
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/whitespace.html#infix-operator-spacing
     */
    "space-infix-ops": "error",
    /**
     * Enforce consistent spacing before or after unary operators.
     * @see https://eslint.org/docs/rules/space-unary-ops
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
     * @see https://eslint.org/docs/rules/spaced-comment
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/comments.html#spacing
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
             * See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html for more details.
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
     * @see https://eslint.org/docs/rules/switch-colon-spacing
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
     * @see https://eslint.org/docs/rules/template-tag-spacing
     */
    "template-tag-spacing": ["error", "never"],
    /**
     * Require or disallow Unicode byte order mark (BOM).
     * @see https://eslint.org/docs/rules/unicode-bom
     */
    "unicode-bom": ["error", "never"],
    /**
     * Require parenthesis around regex literals.
     * @see https://eslint.org/docs/rules/wrap-regex
     */
    "wrap-regex": "off",
  },
};
