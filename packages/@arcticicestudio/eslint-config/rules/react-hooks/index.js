/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * React Hook plugin rules.
 * @since 0.8.0
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
