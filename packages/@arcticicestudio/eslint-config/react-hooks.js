/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Entry point for the React Hooks plugin integration.
 *
 * @since 0.8.0
 * @see https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
 * @see https://reactjs.org/docs/hooks-rules.html
 * @see https://reactjs.org/docs/hooks-intro.html
 */
module.exports = {
  extends: ["./rules/react-hooks"].map(require.resolve),
};
