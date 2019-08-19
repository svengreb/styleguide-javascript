/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Styleguide JavaScript
 * Repository: https://github.com/arcticicestudio/styleguide-javascript
 * License:    MIT
 */

/**
 * The lint-staged configuration.
 * @see https://github.com/okonet/lint-staged#configuration
 */
module.exports = {
  "*.{js,json,md,yml}": "prettier --list-different",
  "*.{js}": "eslint",
  "*.md": "remark --no-stdout"
};
