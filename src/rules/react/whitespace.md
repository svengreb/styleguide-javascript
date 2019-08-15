<!--lint disable no-duplicate-headings-->

## Self-Closing Tags

Always include a single space in self-closing tags.

> ESLint: [react/jsx-tag-spacing][eslint-react/jsx-tag-spacing] and [no-multi-spaces][eslint/no-multi-spaces]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```jsx
<Snow/>
```

<!-- prettier-ignore -->
```jsx
<Snow                 />
```

<!-- prettier-ignore -->
```jsx
<Snow
 />
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```jsx
<Snow />
```

## Curly Braces Padding

Do not pad JSX curly braces with spaces.

> ESLint: [react/jsx-curly-spacing][eslint-react/jsx-curly-spacing]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```jsx
<Winter element={ snow } />
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```jsx
<Winter element={snow} />
```

[eslint-react/jsx-curly-spacing]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
[eslint-react/jsx-tag-spacing]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
[eslint/no-multi-spaces]: https://eslint.org/docs/rules/no-multi-spaces
