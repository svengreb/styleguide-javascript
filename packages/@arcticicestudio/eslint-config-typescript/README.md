<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/styleguide-javascript/develop/assets/images/packages/@arcticicestudio/eslint-config-typescript/repository-hero.svg?sanitize=true"/></p>

<p align="center">The <a href="https://github.com/arcticicestudio/styleguide-javascript" target="_blank">Arctic Ice Studio JavaScript Style Guide</a> rules with support for <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a> as an extensible shared <a href="https://eslint.org" target="_blank">ESLint</a> configuration.</p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/releases/latest" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://arcticicestudio.github.io/styleguide-javascript" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Docs&logo=read-the-docs&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://github.com/arcticicestudio/styleguide-javascript/blob/develop/CHANGELOG.md" target="_blank"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=Changelog&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://www.npmjs.com/package/@arcticicestudio/eslint-config-typescript" target="_blank"><img src="https://img.shields.io/npm/v/@arcticicestudio/eslint-config-typescript.svg?style=flat-square&label=npm&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a> <a href="https://www.npmjs.com/package/@arcticicestudio/eslint-config-typescript" target="_blank"><img src="https://img.shields.io/npm/dt/@arcticicestudio/eslint-config-typescript.svg?style=flat-square&label=Downloads&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/actions"><img src="https://github.com/arcticicestudio/styleguide-javascript/workflows/Continuous%20Integration/badge.svg" alt="Continuous Integration Status"/></a></p>

This project implements the rules of the [“Arctic Ice Studio JavaScript Style Guide”][gh-stg-repo] as an extensible shared [ESLint][] configuration including plugin support for [TypeScript][typescript] through the official [„TypeScript ESLint“][gh-esl-ts] project as well as compatibility integrations for other projects like [Prettier][].

## Getting Started

To enable support for [React][gh-esl-p-react] and [JSX A11Y][gh-esl-p-jsx-a11y] plugin rules as well as compatibility integrations for [Prettier][], use the shareable rule configuration package [@arcticicestudio/eslint-config][gh-t-pkg-esl].

To only use the ESLint core and [`eslint-plugin-import`][gh-esl-p-import] rules, please use the base configurations of the [@arcticicestudio/eslint-config-base][gh-t-pkg-esl-base] package.

Note that this project mainly uses [Yarn][] as main package manager, but the documentations also include instructions to work with [npm][].

### Installation

Add the package as development dependency to your project:

```sh
# With yarn...
yarn add --dev @arcticicestudio/eslint-config-typescript

# or npm.
npm install --save-dev @arcticicestudio/eslint-config-typescript
```

**This will not install the required [peer dependencies][node-b-peerdeps]** like the [eslint][gh-eslint] package itself. They must be installed separately as described below.

#### Peer Dependencies

This package depends on the [`@typescript-eslint/parser`][gh-esl-parser-ts], [`@typescript-eslint/eslint-plugin`][gh-esl-p-ts] and [`typescript`][gh-ts] packages defined as [peer dependencies][node-b-peerdeps].
Since this configuration provides an integration entry point for [Prettier][] , the additional [`eslint-plugin-prettier`][gh-esl-p-prettier], [`eslint-config-prettier][gh-esl-c-prettier] peer dependencies are also required.

These packages must be installed separately either manually or using the [install-peerdeps][npm-install-peerdeps] helper package:

```sh
# Either add all packages manually by listing all required names and their versions and install them manually...
yarn info @arcticicestudio/eslint-config-typescript peerDependencies
yarn add --dev eslint eslint-plugin-import

# ...or use the `install-peerdeps` helper package.
yarn add --dev install-peerdeps
yarn run install-peerdeps --dev @arcticicestudio/eslint-config-typescript
```

##### Using npm instead of Yarn

If you’re not using _Yarn_ but **npm version 5.0.0 or higher** (pre-bundled with [Node.js 8+][node-dl]), all peer dependencies can also be easily auto-installed using the pre-bundled [`npx`][npm-npx] package:

```sh
npx install-peerdeps --dev @arcticicestudio/eslint-config-typescript
```

If you’re using **npm version less than 5.0.0**, the `npx` package is not pre-bundled, but users can either simply install the [`npx`][npm-npx] package globally to run the above command or install the [install-peerdeps][npm-install-peerdeps] package locally/globally to let it handle the installation of all peer dependencies:

```sh
# Install the `install-peerdeps` helper package locally...
npm install install-peerdeps
./node_modules/.bin/install-peerdeps --dev @arcticicestudio/eslint-config-typescript

# ...or globally.
npm install --global install-peerdeps
install-peerdeps --dev @arcticicestudio/eslint-config-typescript
```

To manually install all peer dependencies without `npx` or any helper package, the npm `info` command can be used to list all package names and their versions:

```sh
# List the names and versions of all peer dependencies...
npm info "@arcticicestudio/eslint-config-typescript" peerDependencies

# ...and install each listed package manually.
npm install <package@version>
```

### Usage

This [ESLint shareable config][esl-d-conf_share] can be used by [extending the ESLint configuration file][esl-d-config#ext_conf] of your project.

Add `@arcticicestudio/eslint-config-typescript` and/or any of the [additional entry points](#entry-points) to the `extends` array in your `.eslintrc` configuration file:

```js
module.exports = {
  extends: [
    /* Provides and configures specific rules for TypeScript. */
    "@arcticicestudio/eslint-config-typescript"
    /*
     * Optional entry point to enable support for projects using Prettier.
     * Note that this must always be placed after the `@arcticicestudio/eslint-config-typescript` preset to take
     * precedence, otherwise it won't prevent errors due to useless and possibly conflicting rules!
     */
    "@arcticicestudio/eslint-config-typescript/prettier"
  ]
};
```

As of [`@typescript-eslint/parser` version `2.0.0`][gh-esl-ts-rl-2.0.0] (also see [typescript-eslint/typescript-eslint#890][gh-esl-ts#890]), the parser will panic when parsing files that are not included within the provided _tsconfig(s)_. The `project` field passed to ESLint's `parserOptions` object is required and must point to a valid `tsconfig` file where [the `include` field][ts-d-tsconfig#details] is correctly set up to contain pattern for all files that should be linted.

Set the `project` field in your `eslintrc` to the path of your `tsconfig` and optionally also set the `tsconfigRootDir` when working with multiple _tsconfigs_:

```js
module.exports = {
  // ...
  parserOptions: {
    project: "./tsconfig.json"
  }
  // ...
};
```

Ensure your `tsconfig` is correctly configured to provide all file pattern for files that should be linted [in the `include` array][ts-d-tsconfig#details] and optionally define pattern that should be excluded:

```jsonc
{
  // ...
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "test/**/*.ts",
    "test/**/*.tsx",
    "typings/**/*.ts"
    // ...
  ]
  // ...
}
```

The `extends` feature for _tsconfigs_ can be used to prevent code duplication by extending the root `tsconfig` and only overriding the `include` file or any other fields.

See the [`@typescript-eslint/parser` configuration documentation][gh-esl-parser-ts#config] for all details about the `parserOptions` field(s) and the [TypScript `tsconfig` documentation][ts-d-tsconfig#details] to correctly configure the `include` file pattern.

## Entry Points

This package provides multiple entry points that can be composed especially for the projects they are used in:

- `@arcticicestudio/eslint-config-typescript` — The default entry point that includes the specific rules for TypeScript by extending the lightweight and recommended shared configurations of the [`@typescript-eslint/eslint-plugin`][gh-esl-p-ts] and [`eslint-config-prettier`][gh-esl-c-prettier] packages as well as overriding and adjusting various plugin and core rules to ensure the best compatibility with TypeScript:
  - `@typescript-eslint/eslint-recommended` — Disables ESLint core rules that are already handled by TypeScript.
  - `@typescript-eslint/recommended` — Slim and recommended set of rules for TypeScript that does not require type information.
  - `@typescript-eslint/recommended-requiring-type-checking` — Additionally enable the slightly expanded set of rules that require type information. It also disables some ESLint core rules for compatibility since they are already handled by TypeScript.
- `@arcticicestudio/eslint-config-typescript/prettier` — Entry point to enable support for [Prettier][] through [`eslint-plugin-prettier`][gh-esl-p-prettier] and the officially recommended Prettier ESLint configuration using the [`eslint-config-prettier`][gh-esl-c-prettier] package. It disables possibly conflicting rules and rules that definitely not needed when using _Prettier_ for code formatting. There is also additional support when _Prettier_ is used for TypeScript based projects by extending the special `prettier/@typescript-eslint` configuration that also disables specific `react/*` and JSX rules. Note that this configuration **should always be placed after `@arcticicestudio/eslint-config-typescript`** in order to override conflicting rules, otherwise the `@arcticicestudio/eslint-config-typescript` preset will take precedence leaving conflicting rules untouched!

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
[gh-esl-p-ts]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
[gh-esl-parser-ts]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
[gh-esl-parser-ts#config]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
[gh-esl-ts-rl-2.0.0]: https://github.com/typescript-eslint/typescript-eslint/releases/tag/v2.0.0
[gh-esl-ts]: https://github.com/typescript-eslint/typescript-eslint
[gh-esl-ts#890]: https://github.com/typescript-eslint/typescript-eslint/issues/890
[gh-eslint]: https://github.com/eslint/eslint
[gh-stg-b-readme#contrib]: https://github.com/arcticicestudio/styleguide-javascript#contributing
[gh-stg-repo]: https://github.com/arcticicestudio/styleguide-javascript
[gh-t-pkg-esl-base]: https://github.com/arcticicestudio/styleguide-javascript/tree/develop/packages/@arcticicestudio/eslint-config-base
[gh-t-pkg-esl]: https://github.com/arcticicestudio/styleguide-javascript/tree/develop/packages/@arcticicestudio/eslint-config
[gh-ts]: https://github.com/microsoft/TypeScript
[node-b-peerdeps]: https://nodejs.org/en/blog/npm/peer-dependencies
[node-dl]: https://nodejs.org/en/download
[npm-install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
[npm-npx]: https://www.npmjs.com/package/npx
[npm]: https://npmjs.com
[prettier]: https://prettier.io
[ts-d-tsconfig#details]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#details
[typescript]: https://www.typescriptlang.org
[yarn]: https://yarnpkg.com
