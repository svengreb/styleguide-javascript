<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/styleguide-javascript/develop/assets/images/packages/@arcticicestudio/eslint-config-base/repository-hero.svg?sanitize=true"/></p>

<p align="center">The <a href="https://github.com/arcticicestudio/styleguide-javascript" target="_blank">Arctic Ice Studio JavaScript Style Guide</a> base rules as an extensible shared <a href="https://eslint.org" target="_blank">ESLint</a> configuration.</p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/releases/latest" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://arcticicestudio.github.io/styleguide-javascript" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Docs&logo=read-the-docs&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://github.com/arcticicestudio/styleguide-javascript/blob/develop/CHANGELOG.md" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Changelog&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://www.npmjs.com/package/@arcticicestudio/eslint-config-base" target="_blank"><img src="https://img.shields.io/npm/v/@arcticicestudio/eslint-config-base.svg?style=flat-square&label=npm&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a> <a href="https://www.npmjs.com/package/@arcticicestudio/eslint-config-base" target="_blank"><img src="https://img.shields.io/npm/dt/@arcticicestudio/eslint-config-base.svg?style=flat-square&label=Downloads&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/actions"><img src="https://github.com/arcticicestudio/styleguide-javascript/workflows/Continuous%20Integration/badge.svg" alt="Continuous Integration Status"/></a></p>

This project implements the base rules of the [“Arctic Ice Studio JavaScript Style Guide”][gh-stg-repo] as an extensible shared [ESLint][] configuration.

## Getting Started

To enable support for [React][gh-esl-p-react] and [JSX A11Y][gh-esl-p-jsx-a11y] plugin rules as well as compatibility integrations for other projects like [Prettier][], use the shareable rule configuration package [@arcticicestudio/eslint-config][gh-t-pkg-esl].

Note that this project mainly uses [Yarn][] as main package manager, but the documentations also include instructions to work with [npm][].

### Installation

Add the package as development dependency to your project:

```sh
# With yarn...
yarn add --dev @arcticicestudio/eslint-config-base

# or npm.
npm install --save-dev @arcticicestudio/eslint-config-base
```

**This will not install the required [peer dependencies][node-b-peerdeps]** like the [eslint][gh-eslint] package itself. They must be installed separately as described below.

#### Peer Dependencies

Next to all base ESLint rules, the default export also contains rules related to ECMAScript 6+ including the [import][mdn-js-import] and [export][mdn-js-export] features.
Therefore this package depends on the [`eslint-plugin-import`][gh-esl-p-import] and [`eslint`][gh-eslint] package, defined as [peer dependencies][node-b-peerdeps], that must be installed separately either manually or using the [install-peerdeps][npm-install-peerdeps] helper package:

```sh
# Either add all packages manually by listing all required names and their versions and install them manually...
yarn info @arcticicestudio/eslint-config-base peerDependencies
yarn add --dev eslint eslint-plugin-import

# ...or use the `install-peerdeps` helper package.
yarn add --dev install-peerdeps
yarn run install-peerdeps --dev @arcticicestudio/eslint-config-base
```

##### Using npm instead of Yarn

If you’re not using _Yarn_ but **npm version 5.0.0 or higher** (pre-bundled with [Node.js 8+][node-dl]), all peer dependencies can also be easily auto-installed using the pre-bundled [`npx`][npm-npx] package:

```sh
npx install-peerdeps --dev @arcticicestudio/eslint-config-base
```

If you’re using **npm version less than 5.0.0**, the `npx` package is not pre-bundled, but users can either simply install the [`npx`][npm-npx] package globally to run the above command or install the [install-peerdeps][npm-install-peerdeps] package locally/globally to let it handle the installation of all peer dependencies:

```sh
# Install the `install-peerdeps` helper package locally...
npm install install-peerdeps
./node_modules/.bin/install-peerdeps --dev @arcticicestudio/eslint-config-base

# ...or globally.
npm install --global install-peerdeps
install-peerdeps --dev @arcticicestudio/eslint-config-base
```

To manually install all peer dependencies without `npx` or any helper package, the npm `info` command can be used to list all package names and their versions:

```sh
# List the names and versions of all peer dependencies...
npm info "@arcticicestudio/eslint-config-base" peerDependencies

# ...and install each listed package manually.
npm install <package@version>
```

### Usage

This [ESLint shareable config][esl-d-conf_share] can be used by [extending the ESLint configuration file][esl-d-config#ext_conf] of your project.

Add `@arcticicestudio/eslint-config-base` to your `extends` array in your `.eslintrc` configuration file:

```js
module.exports = {
  extends: ["@arcticicestudio/eslint-config-base"]
};
```

## Contributing

Please read the [contribution guidelines][gh-stg-b-readme#contrib] of the [“Arctic Ice Studio JavaScript Style Guide”][gh-stg-repo] project for detailed information.

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/develop/assets/images/nord/repository-footer-separator.svg?sanitize=true" /></p>

<p align="center">Copyright &copy; 2018-present <a href="https://www.arcticicestudio.com" target="_blank">Arctic Ice Studio</a> and <a href="https://www.svengreb.de" target="_blank">Sven Greb</a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/blob/develop/LICENSE.md" target="_blank"><img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=MIT&logoColor=eceff4&logo=github&colorA=4c566a&colorB=88c0d0"/></a></p>

[esl-d-conf_share]: https://eslint.org/docs/developer-guide/shareable-configs
[esl-d-config#ext_conf]: https://eslint.org/docs/user-guide/configuring#extending-configuration-files
[eslint]: https://eslint.org
[gh-esl-p-import]: https://github.com/benmosher/eslint-plugin-import
[gh-esl-p-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[gh-esl-p-react]: https://github.com/yannickcr/eslint-plugin-react
[gh-eslint]: https://github.com/eslint/eslint
[gh-stg-b-readme#contrib]: https://github.com/arcticicestudio/styleguide-javascript#contributing
[gh-stg-repo]: https://github.com/arcticicestudio/styleguide-javascript
[gh-t-pkg-esl]: https://github.com/arcticicestudio/styleguide-javascript/tree/develop/packages/@arcticicestudio/eslint-config
[mdn-js-export]: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
[mdn-js-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[node-b-peerdeps]: https://nodejs.org/en/blog/npm/peer-dependencies
[node-dl]: https://nodejs.org/en/download
[npm-install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
[npm-npx]: https://www.npmjs.com/package/npx
[npm]: https://npmjs.com
[prettier]: https://prettier.io
[yarn]: https://yarnpkg.com
