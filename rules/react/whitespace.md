<!--lint disable no-duplicate-headings-->

## Self-Closing Tags

Always include a single space in self-closing tags.

> ESLint: [react/jsx-tag-spacing][2] and [no-multi-spaces][3]

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

> ESLint: [react/jsx-curly-spacing][1]

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

[1]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
[2]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
[3]: https://eslint.org/docs/latest/rules/no-multi-spaces
