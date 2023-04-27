/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

const INDENT_SIZE = 2;

/**
 * React plugin rules related to JSX.
 * @see https://github.com/jsx-eslint/eslint-plugin-react#jsx-specific-rules
 */
module.exports = {
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /**
     * Enforce boolean attributes notation in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/props.md#boolean-attributes-notation
     */
    "react/jsx-boolean-value": ["warn", "never"],
    /**
     * Validate closing bracket location in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/props.md#indentation
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/tags.md#closing-bracket-indentation
     */
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    /**
     * Validate closing tag location in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/props.md#indentation
     */
    "react/jsx-closing-tag-location": "error",
    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/whitespace.md#curly-braces-padding
     */
    "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],
    /**
     * Enforce or disallow spaces around equal signs in JSX attributes.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     */
    "react/jsx-equals-spacing": ["error", "never"],
    /**
     * Restrict file extensions that may contain JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx"],
      },
    ],
    /**
     * Enforce position of the first prop in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     */
    "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
    /**
     * Enforce event handler naming conventions in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    "react/jsx-handler-names": [
      "warn",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    /**
     * Validate JSX indentation.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     */
    "react/jsx-indent": ["error", INDENT_SIZE],
    /**
     * Validate props indentation in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     */
    "react/jsx-indent-props": ["error", INDENT_SIZE],
    /**
     * Validate JSX has `key` prop when in array or iterator.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     */
    "react/jsx-key": "warn",
    /**
     * Validate JSX maximum depth.
     * @since 0.2.0
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     */
    "react/jsx-max-depth": "off",
    /**
     * Limit maximum of props on a single line in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     */
    "react/jsx-max-props-per-line": [
      "warn",
      {
        maximum: 4,
        when: "multiline",
      },
    ],
    /**
     * Do not require a new line after jsx elements and expressions.
     * @since 0.9.0
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
     */
    "react/jsx-newline": "off",
    /**
     * Prevent usage of .`bind()` and arrow functions in JSX props.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/methods.md#no-binding-or-arrow-functions-in-render
     */
    "react/jsx-no-bind": [
      "error",
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    /**
     * Prevent comments from being inserted as text nodes.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     */
    "react/jsx-no-comment-textnodes": "error",
    /**
     * Prevent react contexts from taking non-stable values.
     * @since 0.9.0
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
     */
    "react/jsx-no-constructed-context-values": "error",

    /**
     * Prevent duplicate props in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
    /**
     * Prevent usage of unwrapped JSX strings.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     */
    "react/jsx-no-literals": ["off", { noStrings: true }],
    /**
     * Prevent usage of unsafe `_blank` target.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }],
    /**
     * Disallow undeclared variables in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     */
    "react/jsx-no-undef": "error",
    /**
     * Disallow unnecessary fragments in JSX.
     * @since 0.9.0
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    "react/jsx-no-useless-fragment": "error",
    /**
     * Limit to one expression per line in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     */
    "react/jsx-one-expression-per-line": "off",
    /**
     * Enforce curly braces or disallow unnecessary curly braces in JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
      },
    ],
    /**
     * Enforce PascalCase for user-defined JSX components.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/naming_conventions.md#file-and-component-folder
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/naming_conventions.md#references
     */
    "react/jsx-pascal-case": ["error", { allowAllCaps: true }],
    /**
     * Enforce default props alphabetical sorting.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
     */
    "react/jsx-sort-default-props": ["warn", { ignoreCase: true }],
    /**
     * Enforce props alphabetical sorting.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    "react/jsx-sort-props": [
      "warn",
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    /**
     * Validate whitespace in and around the JSX opening and closing brackets.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/whitespace.md#self-closing-tags
     */
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never",
      },
    ],
    /**
     * Prevent React to be incorrectly marked as unused.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     */
    "react/jsx-uses-react": "error",
    /**
     * Prevent variables used in JSX to be incorrectly marked as unused.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     */
    "react/jsx-uses-vars": "error",
    /**
     * Prevent missing parentheses around multi line JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     * @see https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/blocks.md#wrap-multiline-jsx
     */
    "react/jsx-wrap-multilines": [
      "warn",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "ignore",
        logical: "ignore",
        prop: "ignore",
      },
    ],
    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     */
    "react/jsx-child-element-spacing": "off",
    /**
     * Enforce line breaks in curly braces in JSX attributes and expressions.
     * @since 0.5.0
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
     */
    "react/jsx-curly-newline": "off",
    /**
     * Enforce shorthand or standard form for React fragments.
     * @since 0.5.0
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    "react/jsx-fragments": "off",
    /**
     * Disallow multiple spaces between inline JSX props.
     * @since 0.5.0
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     */
    "react/jsx-props-no-multi-spaces": "warn",
    /**
     * Disallow JSX props spreading.
     * @since 0.5.0
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
     */
    "react/jsx-props-no-spreading": [
      "warn",
      {
        html: "enforce",
        custom: "ignore",
        explicitSpread: "ignore",
      },
    ],
  },
};
