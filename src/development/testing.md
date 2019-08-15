> Please make sure to complete the [requirement][requirements] steps first in order to test the project!
>
> Continuous integration builds are running at [Circle CI][ci-circle].

## Linting

The [remark-preset-lint-arcticicestudio][remark-preset-lint-arcticicestudio-ghdocs] package is used in order to check all Markdown documentation sources against the [Arctic Ice Studio Markdown Style Guide][styleguide-markdown-ghdocs] using [remark-lint][remark-lint-gh]:

```sh
npm run lint:md
```

[ci-circle]: https://circleci.com/gh/arcticicestudio/styleguide-javascript
[remark-lint-gh]: https://github.com/remarkjs/remark-lint
[remark-preset-lint-arcticicestudio-ghdocs]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio
[requirements]: requirements.md
[styleguide-markdown-ghdocs]: https://arcticicestudio.github.io/styleguide-markdown
