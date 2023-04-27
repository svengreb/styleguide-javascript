## Quotes

Always use [double quotes][2] (`""`) for JSX attributes. Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

> ESLint: [jsx-quotes][1]

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

[1]: https://eslint.org/docs/latest/rules/jsx-quotes
[2]: https://github.com/svengreb/styleguide-javascript/blob/main/rules/strings.md#quotes
