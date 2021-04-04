/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * React Hook plugin rules.
 *
 * @since 0.9.0
 * @see https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
 * @see https://reactjs.org/docs/hooks-rules.html
 * @see https://reactjs.org/docs/hooks-intro.html
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
     * @see https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
     */
    "react-hooks/rules-of-hooks": "error",
    /**
     * EVerify the list of the dependencies for Hooks like `useEffect` and similar.
     * @see https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
     */
    "react-hooks/exhaustive-deps": "error",
  },
};
