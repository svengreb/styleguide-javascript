/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * React Hook plugin rules.
 * @since 0.9.0
 * @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
 * @see https://react.dev/reference/react
 * @see https://react.dev/learn/reusing-logic-with-custom-hooks
 * @see https://react.dev/blog/2023/03/16/introducing-react-dev#going-all-in-on-modern-react-with-hooks
 * @see https://legacy.reactjs.org/docs/hooks-rules.html
 */
module.exports = {
  plugins: ["react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /**
     * Enforce Rules of Hooks.
     * @see https://reactjs.org/docs/hooks-rules.html
     * @see https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
     */
    "react-hooks/rules-of-hooks": "error",
    /**
     * Verify the list of the dependencies for Hooks like `useEffect` and similar.
     * @see https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
     */
    "react-hooks/exhaustive-deps": "error",
  },
};
