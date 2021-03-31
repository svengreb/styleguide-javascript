/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic Ice Studio ESLint Configuration
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
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
