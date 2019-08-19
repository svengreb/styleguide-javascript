<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/styleguide-javascript/develop/assets/images/packages/@arcticicestudio/eslint-config/repository-hero.svg?sanitize=true"/></p>

<p align="center">The <a href="https://github.com/arcticicestudio/styleguide-javascript" target="_blank">Arctic Ice Studio JavaScript Style Guide</a> rules with support for <a href="https://reactjs.org" target="_blank">React</a> as an extensible shared <a href="https://eslint.org" target="_blank">ESLint</a> configuration.</p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/releases/latest" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://arcticicestudio.github.io/styleguide-javascript" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Docs&logo=read-the-docs&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://github.com/arcticicestudio/styleguide-javascript/blob/develop/CHANGELOG.md" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Changelog&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://www.npmjs.com/package/@arcticicestudio/eslint-config" target="_blank"><img src="https://img.shields.io/npm/v/@arcticicestudio/eslint-config.svg?style=flat-square&label=npm&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a> <a href="https://www.npmjs.com/package/@arcticicestudio/eslint-config" target="_blank"><img src="https://img.shields.io/npm/dt/@arcticicestudio/eslint-config.svg?style=flat-square&label=Downloads&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a></p>

<p align="center"><a href="https://circleci.com/gh/arcticicestudio/styleguide-javascript" target="_blank"><img src="https://img.shields.io/circleci/project/github/arcticicestudio/styleguide-javascript/develop.svg?style=flat-square&label=Build&logo=circleci&logoColor=eceff4&colorA=4c566a"/></a></p>

This project implements the rules of the [“Arctic Ice Studio JavaScript Style Guide”][gh-stg-repo] as an extensible shared [ESLint][] configuration including plugin support for [React][gh-esl-p-react] and [JSX A11Y][gh-esl-p-jsx-a11y] as well as compatibility integrations for other projects like [Prettier][].

## Getting Started

To only use the ESLint core and [`eslint-plugin-import`][gh-esl-p-import] rules, please use the base configurations of the [@arcticicestudio/eslint-config-base][gh-t-pkg-esl-base] package.

Note that this project mainly uses [Yarn][] as main package manager, but the documentations also include instructions to work with [npm][].

### Installation

Add the package as development dependency to your project:

```sh
# With yarn...
yarn add --dev @arcticicestudio/eslint-config

# or npm.
npm install --save-dev @arcticicestudio/eslint-config
```

**This will not install the required [peer dependencies][node-b-peerdeps]** like the [eslint][gh-eslint] package itself. They must be installed separately as described below.

#### Peer Dependencies

Therefore this package depends on the [eslint-plugin-react][gh-esl-p-react], [eslint-plugin-jsx-a11y][gh-esl-p-jsx-a11y], [eslint-plugin-prettier][gh-esl-p-prettier] and [prettier][gh-prettier] packages defined as [peer dependencies][node-b-peerdeps].
Since this configuration is build on top of the [base rules package][gh-t-pkg-esl-base], the additional [eslint-plugin-import][gh-esl-p-import] peer dependency is also required.

These packages must be installed separately either manually or using the [install-peerdeps][npm-install-peerdeps] helper package:

```sh
# Either add all packages manually by listing all required names and their versions and install them manually...
yarn info @arcticicestudio/eslint-config peerDependencies
yarn add --dev eslint eslint-plugin-import

# ...or use the `install-peerdeps` helper package.
yarn add --dev install-peerdeps
yarn run install-peerdeps --dev @arcticicestudio/eslint-config
```

##### Using npm instead of Yarn

If you’re not using _Yarn_ but **npm version 5.0.0 or higher** (pre-bundled with [Node.js 8+][node-dl]), all peer dependencies can also be easily auto-installed using the pre-bundled [`npx`][npm-npx] package:

```sh
npx install-peerdeps --dev @arcticicestudio/eslint-config
```

If you’re using **npm version less than 5.0.0**, the `npx` package is not pre-bundled, but users can either simply install the [`npx`][npm-npx] package globally to run the above command or install the [install-peerdeps][npm-install-peerdeps] package locally/globally to let it handle the installation of all peer dependencies:

```sh
# Install the `install-peerdeps` helper package locally...
npm install install-peerdeps
./node_modules/.bin/install-peerdeps --dev @arcticicestudio/eslint-config

# ...or globally.
npm install --global install-peerdeps
install-peerdeps --dev @arcticicestudio/eslint-config
```

To manually install all peer dependencies without `npx` or any helper package, the npm `info` command can be used to list all package names and their versions:

```sh
# List the names and versions of all peer dependencies...
npm info "@arcticicestudio/eslint-config" peerDependencies

# ...and install each listed package manually.
npm install <package@version>
```

### Usage

This [ESLint shareable config][esl-d-conf_share] can be used by [extending the ESLint configuration file][esl-d-config#ext_conf] of your project.

Add `@arcticicestudio/eslint-config` and/or any of the [additional entry points](#entry-points) to the `extends` array in your `.eslintrc` configuration file:

```js
module.exports = {
  extends: [
    /* Provides all base rules and specific rules for "React" and "JSX A11Y". */
    "@arcticicestudio/eslint-config"
    /*
     * Provides support for projects using Prettier.
     * Note that this must always be placed after the `@arcticicestudio/eslint-config` preset to take precedence,
     * otherwise it won't prevent errors due to useless and possibly conflicting rules!
     */
    "@arcticicestudio/eslint-config/prettier"
  ]
};
```

## Entry Points

This package provides multiple entry points that can be composed especially for the projects they are used in:

- `@arcticicestudio/eslint-config` — The default entry point that includes the base rules of the [@arcticicestudio/eslint-config-base][gh-t-pkg-esl-base] package as well as additional rules from the [eslint-plugin-react][gh-esl-p-react] and [eslint-plugin-jsx-a11y][gh-esl-p-jsx-a11y] packages.
- `@arcticicestudio/eslint-config/prettier` — Entry point with support for [Prettier][] through [eslint-plugin-prettier][gh-esl-p-prettier] and the officially recommended Prettier ESLint configuration through the [eslint-config-prettier][gh-esl-c-prettier] package. It disables possibly conflicting rules and rules that definitely not needed when using _Prettier_ for code formatting. There is also additional support when _Prettier_ is used for React based projects by extending the special `prettier/react` configuration that also disables specific `react/` and JSX rules. Note that this configuration **should always be placed after `@arcticicestudio/eslint-config`** in order to override conflicting rules, otherwise the `@arcticicestudio/eslint-config` preset will take precedence leaving conflicting rules untouched!

## Contributing

Please read the [contribution guidelines][gh-stg-b-readme#contrib] of the [“Arctic Ice Studio JavaScript Style Guide”][gh-stg-repo] project for detailed information.

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/develop/assets/images/nord/repository-footer-separator.svg?sanitize=true" /></p>

<p align="center">Copyright &copy; 2018-present <a href="https://www.arcticicestudio.com" target="_blank">Arctic Ice Studio</a> and <a href="https://www.svengreb.de" target="_blank">Sven Greb</a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/blob/develop/LICENSE.md" target="_blank"><img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=MIT&logoColor=eceff4&logo=github&colorA=4c566a&colorB=88c0d0"/></a></p>

[esl-d-conf_share]: https://eslint.org/docs/developer-guide/shareable-configs
[esl-d-config#ext_conf]: https://eslint.org/docs/user-guide/configuring#extending-configuration-files
[eslint]: https://eslint.org
[gh-esl-c-prettier]: https://github.com/prettier/eslint-config-prettier
[gh-esl-p-import]: https://github.com/benmosher/eslint-plugin-import
[gh-esl-p-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[gh-esl-p-prettier]: https://github.com/prettier/eslint-plugin-prettier
[gh-esl-p-react]: https://github.com/yannickcr/eslint-plugin-react
[gh-eslint]: https://github.com/eslint/eslint
[gh-prettier]: https://github.com/prettier/prettier
[gh-stg-b-readme#contrib]: https://github.com/arcticicestudio/styleguide-javascript#contributing
[gh-stg-repo]: https://github.com/arcticicestudio/styleguide-javascript
[gh-t-pkg-esl-base]: https://github.com/arcticicestudio/styleguide-javascript/tree/develop/packages/@arcticicestudio/eslint-config-base
[node-b-peerdeps]: https://nodejs.org/en/blog/npm/peer-dependencies
[node-dl]: https://nodejs.org/en/download
[npm-install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
[npm-npx]: https://www.npmjs.com/package/npx
[npm]: https://npmjs.com
[prettier]: https://prettier.io
[yarn]: https://yarnpkg.com
