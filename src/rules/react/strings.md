## Quotes

Always use [double quotes][rules-base-strings-quotes] (`""`) for JSX attributes. Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

> ESLint: [jsx-quotes][eslint/jsx-quotes]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```jsx
<Snow season='winter' />
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```jsx
<Snow season="winter" />
```

[eslint/jsx-quotes]: https://eslint.org/docs/rules/jsx-quotes
[rules-base-strings-quotes]: ../strings.md#quotes
