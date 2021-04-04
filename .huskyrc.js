/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Styleguide JavaScript
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * The husky configuration.
 * @see https://github.com/typicode/husky
 */
module.exports = {
  hooks: {
    "pre-commit": "lint-staged"
  }
};