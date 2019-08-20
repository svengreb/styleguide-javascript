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
 * @since 0.8.0
 * @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
 */
module.exports = {
  rules: {
    /* No need for React `prop-types` when using TypeScript. */
    "react/prop-types": "off"
  }
};
