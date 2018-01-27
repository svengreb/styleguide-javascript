## Quotes

Always use [double quotes][rules-base-strings-quotes] (`""`) for JSX attributes. Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

> ESLint: [jsx-quotes][eslint/jsx-quotes]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<Snow season='winter' />
```

⇡ **Correct** code for this rule:

```jsx
<Snow season="winter" />
```

[rules-base-strings-quotes]: ../strings.md#quotes

[eslint/jsx-quotes]: https://eslint.org/docs/rules/jsx-quotes
