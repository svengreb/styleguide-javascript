<!--lint disable no-duplicate-headings-->

## Self-Closing

Always self-close tags that have no children.

> ESLint: [react/self-closing-comp][2]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<Snow season="winter"></Snow>
```

⇡ **Correct** code for this rule:

```jsx
<Snow season="winter" />
```

## Closing Bracket Indentation

If a component has multi-line properties, close its tag on a new line.

> ESLint: [react/jsx-closing-bracket-location][1]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```jsx
<Snow
  season="winter"
  density={20} />
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```jsx
<Snow
  season="winter"
  density={20}
/>
```

<!--lint enable no-missing-blank-lines-->

[1]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
[2]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
