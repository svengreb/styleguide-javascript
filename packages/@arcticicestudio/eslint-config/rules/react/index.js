/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * React plugin rules.
 * @since 0.1.0
 * @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
 */
module.exports = {
  plugins: ["react"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"]
      }
    },
    react: {
      version: "detect"
    }
  },
  rules: {
    /**
     * Exclude React specific methods from enforcement that class methods should utilize `this`.
     * @see https://eslint.org/docs/rules/class-methods-use-this
     */
    "class-methods-use-this": [
      "warn",
      {
        exceptMethods: [
          "render",
          "getInitialState",
          "getDefaultProps",
          "getChildContext",
          "componentWillMount",
          "UNSAFE_componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "UNSAFE_componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "UNSAFE_componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "componentDidCatch",
          "getSnapshotBeforeUpdate"
        ]
      }
    ],
    /**
     * Disable consistent naming for boolean props.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
     */
    "react/boolean-prop-naming": [
      "off",
      {
        propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
        rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+"
      }
    ],
    /**
     * Forbid `button` element without an explicit `type` attribute.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    "react/button-has-type": [
      "warn",
      {
        button: true,
        submit: true,
        reset: false
      }
    ],
    /**
     * Prevent extraneous defaultProps on components.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     */
    "react/default-props-match-prop-types": ["error", { allowRequiredDefaults: true }],
    /**
     * Enforce consistent usage of destructuring assignment in component.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    "react/destructuring-assignment": ["warn", "always"],
    /**
     * Prevent missing `displayName` in a React component definition.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    "react/display-name": ["off", { ignoreTranspilerName: false }],
    /**
     * Forbid certain props on components.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    "react/forbid-component-props": "off",
    /**
     * Forbid certain props on DOM nodes.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     */
    "react/forbid-dom-props": "off",
    /**
     * Forbid certain elements.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     */
    "react/forbid-elements": "off",
    /**
     * Forbid certain `propTypes`.
     * Allows `arrays` and `objects` only if it is explicitly noted what `array` and `object` contains, using `arrayOf`,
     * `objectOf`, or `shape`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    "react/forbid-prop-types": [
      "warn",
      {
        forbid: ["any", "array", "object"]
      }
    ],
    /**
     * Forbid foreign `propTypes`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     */
    "react/forbid-foreign-prop-types": "off",
    /**
     * Prevent using `this.state` inside `this.setState`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     */
    "react/no-access-state-in-setstate": "error",
    /**
     * Prevent using Array index in `key` props.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    "react/no-array-index-key": "error",
    /**
     * Prevent passing children as props.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    "react/no-children-prop": "error",
    /**
     * Prevent usage of dangerous JSX properties.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     */
    "react/no-danger": "warn",
    /**
     * Prevent problem with children and `props.dangerouslySetInnerHTML`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    "react/no-danger-with-children": "error",
    /**
     * Prevent usage of deprecated methods.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    "react/no-deprecated": "error",
    /**
     * Prevent usage of `setState` in `componentDidMount`.
     * Disabled because it is necessary for server-side rendering.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    "react/no-did-mount-set-state": "off",
    /**
     * Prevent usage of `setState` in `componentDidUpdate`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    "react/no-did-update-set-state": "error",
    /**
     * Prevent direct mutation of `this.state`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    "react/no-direct-mutation-state": "error",
    /**
     * Prevent usage of `findDOMNode`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    "react/no-find-dom-node": "error",
    /**
     * Prevent usage of `isMounted`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    "react/no-is-mounted": "error",
    /**
     * Prevent multiple component definition per file.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/naming_conventions.html#one-component-per-file
     */
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    /**
     * Prevent usage of `shouldComponentUpdate` when extending `React.PureComponent`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     */
    "react/no-redundant-should-component-update": "error",
    /**
     * Prevent usage of the return value of `React.render`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    "react/no-render-return-value": "error",
    /**
     * Prevent usage of `setState`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    "react/no-set-state": "off",
    /**
     * Prevent common casing typos.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     */
    "react/no-typos": "error",
    /**
     * Prevent using string references in `ref` attribute.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/props.html#ref-callbacks
     */
    "react/no-string-refs": "error",
    /**
     * Prevent using `this` in stateless functional components.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     */
    "react/no-this-in-sfc": "error",
    /**
     * Prevent invalid characters from appearing in markup.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    "react/no-unescaped-entities": "error",
    /**
     * Prevent usage of unknown DOM property.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     */
    "react/no-unknown-property": "error",
    /**
     * Prevent definitions of unused prop types.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    "react/no-unused-prop-types": ["error", { skipShapeProps: true }],
    /**
     * Prevent definitions of unused state properties.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     */
    "react/no-unused-state": "error",
    /**
     * Prevent usage of `setState` in `componentWillUpdate`.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     */
    "react/no-will-update-set-state": "error",
    /**
     * Enforce ES5 or ES6 class for components.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/classes_and_constructors.html#class-and-stateless
     */
    "react/prefer-es6-class": ["error", "always"],
    /**
     * Enforce stateless components to be written as a pure function.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    "react/prefer-stateless-function": ["warn", { ignorePureComponents: true }],
    /**
     * Prevent missing props validation in a component definition.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    "react/prop-types": ["error", { skipUndeclared: false }],
    /**
     * Prevent missing `React` when using JSX.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    "react/react-in-jsx-scope": "error",
    /**
     * Enforce a `defaultProps` definition for every prop that is not a required prop.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    "react/require-default-props": "error",
    /**
     * Enforce components to have a `shouldComponentUpdate` method.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     */
    "react/require-optimization": "off",
    /**
     * Enforce ES5 or ES6 class for returning value in `render` function.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/methods.html#render-return
     */
    "react/require-render-return": "error",
    /**
     * Prevent extra closing tags for components without children.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/tags.html#self-closing
     */
    "react/self-closing-comp": "error",
    /**
     * Enforce component methods order.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    "react/sort-comp": [
      "warn",
      {
        order: [
          "static-methods",
          "instance-variables",
          "lifecycle",
          "/^on.+$/",
          "getters",
          "setters",
          "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
          "instance-methods",
          "everything-else",
          "rendering"
        ],
        groups: {
          rendering: ["/^render.+$/", "render"]
        }
      }
    ],
    /**
     * Enforce propTypes declarations alphabetical sorting.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     */
    "react/sort-prop-types": [
      "warn",
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false
      }
    ],
    /**
     * Enforce `style` prop value being an object.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    "react/style-prop-object": "error",
    /**
     * Prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
     */
    "react/void-dom-elements-no-children": "error",
    /**
     * Prevent usage of unsafe lifecycle methods.
     * @since 0.5.0
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     */
    "react/no-unsafe": ["warn", { checkAliases: true }],
    /**
     * Enforce that props are read-only.
     * @since 0.5.0
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
     */
    "react/prefer-read-only-props": "off",
    /**
     * Enforce state initialization style.
     * @since 0.5.0
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
     */
    "react/state-in-constructor": "off",
    /**
     * Enforces where React component static properties should be positioned.
     * @since 0.5.0
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
     */
    "react/static-property-placement": "warn"
  }
};
