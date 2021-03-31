/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * React JSX A11Y plugin rules.
 * @since 0.1.0
 * @see https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
 */
module.exports = {
  plugins: ["jsx-a11y", "react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /**
     * Enforce emojis are wrapped in and provide screen-reader access.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
     */
    "jsx-a11y/accessible-emoji": "warn",
    /**
     * Enforce all elements that require alternative text have meaningful information to relay back to end user.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/accessibility_a11y.html#img-alternate-text
     */
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img", "object", "area", 'input[type="image"]'],
      },
    ],
    /**
     * Enforce all anchors to contain accessible content.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
     */
    "jsx-a11y/anchor-has-content": "warn",
    /**
     * Enforce all anchors are valid, navigable elements.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
     * @see https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md
     */
    "jsx-a11y/anchor-is-valid": [
      "off",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    /**
     * Enforce elements with `aria-activedescendant` are tabbable.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
     */
    "jsx-a11y/aria-activedescendant-has-tabindex": "off",
    /**
     * Enforce all `aria-*` props are valid.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
     */
    "jsx-a11y/aria-props": "warn",
    /**
     * Enforce ARIA state and property values are valid.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
     */
    "jsx-a11y/aria-proptypes": "warn",
    /**
     * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/accessibility_a11y.html#valid-aria-roles
     */
    "jsx-a11y/aria-role": ["error", { ignoreNonDom: false }],
    /**
     * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
     */
    "jsx-a11y/aria-unsupported-elements": "warn",
    /**
     * Enforce a clickable non-interactive element has at least one keyboard event listener.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
     */
    "jsx-a11y/click-events-have-key-events": "off",
    /**
     * Enforce heading elements contain accessible content.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
     */
    "jsx-a11y/heading-has-content": "warn",
    /**
     * Enforce `<html>` element has lang prop.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
     */
    "jsx-a11y/html-has-lang": "off",
    /**
     * Enforce `<iframe>` elements have a title attribute.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
     */
    "jsx-a11y/iframe-has-title": "off",
    /**
     * Enforce `<img>` `alt` prop does not contain the word `image`, `picture`, or `photo`.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/accessibility_a11y.html#no-redundant-img-alternate-text
     */
    "jsx-a11y/img-redundant-alt": "warn",
    /**
     * Enforce that elements with interactive handlers like `onClick` must be focusable.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
     */
    "jsx-a11y/interactive-supports-focus": [
      "warn",
      {
        tabbable: ["button", "checkbox", "link", "searchbox", "spinbutton", "switch", "textbox"],
      },
    ],
    /**
     * Enforce `lang` attribute has a valid value.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
     */
    "jsx-a11y/lang": "warn",
    /**
     * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
     */
    "jsx-a11y/media-has-caption": "off",
    /**
     * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
     */
    "jsx-a11y/mouse-events-have-key-events": "warn",
    /**
     * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used
     * by a screen-reader.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
     * @see https://arcticicestudio.github.io/styleguide-javascript/rules/react/accessibility_a11y.html#no-accesskey
     */
    "jsx-a11y/no-access-key": "error",
    /**
     * Enforce `autoFocus` prop is not used.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
     */
    "jsx-a11y/no-autofocus": ["off", { ignoreNonDOM: true }],
    /**
     * Enforce distracting elements are not used.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
     */
    "jsx-a11y/no-distracting-elements": [
      "error",
      {
        elements: ["marquee", "blink"],
      },
    ],
    /**
     * Interactive elements should not be assigned non-interactive roles.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
     */
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      "warn",
      {
        tr: ["none", "presentation"],
      },
    ],
    /**
     * Non-interactive elements should not be assigned mouse or keyboard event listeners.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
     */
    "jsx-a11y/no-noninteractive-element-interactions": [
      "warn",
      {
        handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"],
      },
    ],
    /**
     * Non-interactive elements should not be assigned interactive roles.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
     */
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "warn",
      {
        ul: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
        ol: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
        li: ["menuitem", "option", "row", "tab", "treeitem"],
        table: ["grid"],
        td: ["gridcell"],
      },
    ],
    /**
     * `tabIndex` should only be declared on interactive elements.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
     */
    "jsx-a11y/no-noninteractive-tabindex": ["warn", { roles: ["tabpanel"] }],
    /**
     * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
     */
    "jsx-a11y/no-onchange": "off",
    /**
     * Enforce explicit role property is not the same as implicit/default role property on element.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
     */
    "jsx-a11y/no-redundant-roles": "warn",
    /**
     * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
     */
    "jsx-a11y/no-static-element-interactions": [
      "warn",
      {
        handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"],
      },
    ],
    /**
     * Enforce that elements with ARIA roles must have all required attributes for that role.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
     */
    "jsx-a11y/role-has-required-aria-props": "warn",
    /**
     * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by
     * that `role`.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
     */
    "jsx-a11y/role-supports-aria-props": "warn",
    /**
     * Enforce `scope` prop is only used on `<th>` elements.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
     */
    "jsx-a11y/scope": "off",
    /**
     * Enforce `tabIndex` value is not greater than zero.
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
     */
    "jsx-a11y/tabindex-no-positive": "warn",
    /**
     * Enforce that a control (an interactive element) has a text label.
     * @since 0.5.0
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
     */
    "jsx-a11y/control-has-associated-label": "warn",
    /**
     * Enforce that a label tag has a text label and an associated control.
     * @since 0.5.0
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
     */
    "jsx-a11y/label-has-associated-control": "warn",
  },
};
