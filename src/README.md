<p align="center"><img src="https://rawgit.com/arcticicestudio/styleguide-javascript/develop/assets/styleguide-javascript-banner-typography.svg"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/styleguide-javascript/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square"/></a></p>

<p align="center"><img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/eslint-config-arcticicestudio"><img src="https://img.shields.io/npm/v/eslint-config-arcticicestudio.svg?style=flat-square&label=eslint-config-arcticicestudio"/></a> <a href="https://www.npmjs.com/package/eslint-config-arcticicestudio-base"><img src="https://img.shields.io/npm/v/eslint-config-arcticicestudio-base.svg?style=flat-square&label=eslint-config-arcticicestudio-base"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/blob/develop/CHANGELOG.md#010"><img src="https://img.shields.io/badge/Changelog-0.1.0-5E81AC.svg?style=flat-square"/></a></p>

<p align="center"><img src="https://circleci.com/favicon.ico" width=24 height=24/> <a href="https://circleci.com/gh/arcticicestudio/styleguide-javascript"><img src="https://img.shields.io/circleci/project/github/arcticicestudio/styleguide-javascript/develop.svg?style=flat-square"/></a></p>

<p align="center">The Arctic Ice Studio JavaScript Code Style based on the <a href="https://github.com/airbnb/javascript">Airbnb JavaScript Style Guide</a>.</p>

---

<p align="center"><img src="https://rawgit.com/arcticicestudio/styleguide-javascript/develop/assets/styleguide-javascript-banner-typography-badge.svg"/></p>

Every major open source project has its own style guide, a set of standards and conventions for the writing and design of code, documentations and assets. It is much easier to understand a large codebase when all the code in it is in a consistent style.

A style guide establishes and enforces style to improve the intelligibility and communication within the project community. It ensures consistency and enforces best practice in usage and language composition.

### Getting Started

This style guide provides the [comprehensive base rule set][rules] including [ECMAScript +6 (ES 2015+)][rules-ecmascript_6+_styles] and [React][rules-react] specific styles like e.g. [Higher-Order Components][rules-react-hoc], the [component methods & properties ordering][rules-react-ordering-methods_and_properties] and [props][rules-react-props].

The development chapters contain information about the [requirements][dev-requirements], [how to build][dev-building] this style guide documentation and [run the tests][dev-testing].

To make sure your code matches this style guide use the official [eslint-config-arcticicestudio-base][eslint-config-arcticicestudio-base-ghio] extensible code linter configuration for [ESLint][eslint]. Use the advanced [eslint-config-arcticicestudio][eslint-config-arcticicestudio-ghio] package to also get support for the [React][react] and [JSX A11Y][npm-eslint-plugin-jsx-a11y] specific rules.

### Contributing

Read the [contributing guide][dev-contributing] to learn about the development process and how to propose [enhancement suggestions][dev-contributing-enhancements] and [report bugs][dev-contributing-bug-reports], how to [submit pull requests][dev-contributing-pr] and the project's [styleguides][dev-contributing-styleguides], [branch organization][dev-contributing-branch-org] and [versioning][dev-contributing-versioning] model.

The guide also includes information about [minimal, complete, and verifiable examples][dev-contributing-mcve] and other ways to contribute to the project like [improving existing issues][dev-contributing-other-improve-issues] and [giving feedback on issues and pull requests][dev-contributing-other-feedback].

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/assets/banner-footer-mountains.svg" /></p>

<p align="center">Copyright &copy; 2018-present Arctic Ice Studio & Sven Greb</p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-javascript/blob/develop/LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-5E81AC.svg?style=flat-square"/></a></p>

[dev-building]: development/building.md
[dev-contributing]: development/contributing.md
[dev-contributing-branch-org]: development/contributing.md#branch-organization
[dev-contributing-bug-reports]: development/contributing.md#bug-reports
[dev-contributing-enhancements]: development/contributing.md#enhancement-suggestions
[dev-contributing-mcve]: development/contributing.md#mcve
[dev-contributing-other-feedback]: development/contributing.md#give-feedback-on-issues-and-pull-requests
[dev-contributing-other-improve-issues]: development/contributing.md#improve-issues
[dev-contributing-pr]: development/contributing.md#pull-requests
[dev-contributing-styleguides]: development/contributing.md#styleguides
[dev-contributing-versioning]: development/contributing.md#versioning
[dev-requirements]: development/requirements.md
[dev-testing]: development/testing.md
[rules]: rules/index.md
[rules-ecmascript_6+_styles]: rules/ecmascript_6+_styles.md
[rules-react]: rules/react/index.md
[rules-react-hoc]: rules/react/higher_order_components.md
[rules-react-ordering-methods_and_properties]: rules/react/ordering.md#component-methods-and-properties
[rules-react-props]: rules/react/props.md

[eslint]: https://eslint.org
[eslint-config-arcticicestudio-base-ghio]: https://arcticicestudio.github.io/eslint-config-arcticicestudio-base
[eslint-config-arcticicestudio-ghio]: https://arcticicestudio.github.io/eslint-config-arcticicestudio
[npm-eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[react]: https://reactjs.org
