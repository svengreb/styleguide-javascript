/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Entry point for the React Hooks plugin integration.
 * @since 0.9.0
 * @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
 * @see https://react.dev/reference/react
 * @see https://react.dev/learn/reusing-logic-with-custom-hooks
 * @see https://react.dev/blog/2023/03/16/introducing-react-dev#going-all-in-on-modern-react-with-hooks
 * @see https://legacy.reactjs.org/docs/hooks-rules.html
 */
module.exports = {
  extends: ["./rules/react-hooks"].map(require.resolve),
};
