## Leading and Trailing

Never use leading but [trailing commas][mdn-trailing_commas]. As of [Prettier][] version `2.0.0` this has also been [set as default configuration][prettier-blob-v2.0.0#traling_comma_default]:

```js
function snow(,) {} // SyntaxError: missing formal parameter
(,) => {}; // SyntaxError: expected expression, got ','
snow(,) // SyntaxError: expected expression, got ','
function snow(...flakes,) {} // SyntaxError: parameter after rest parameter
(...flakes,) => {} // SyntaxError: expected closing parenthesis, got ','
```

> ESLint: [comma-style][eslint/comma-style] and [comma-dangle][eslint/comma-dangle]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const winter = [
    snow
  , frost
  , ice
];
```

<!-- prettier-ignore -->
```js
const winter = {
    name: "winter"
  , elements: ["snow", "frost", "ice"]
  , temperature: -12
  , state: "frozen"
};
```

<!-- prettier-ignore -->
```js
const winter = [
  snow,
  frost,
  ice,
];
```

<!-- prettier-ignore -->
```js
const winter = {
  name: "winter",
  elements: ["snow", "frost", "ice"],
  temperature: -12,
  state: "frozen",
};
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
const winter = [
  snow,
  frost,
  ice
];
```

<!--lint enable no-missing-blank-lines-->

```js
const winter = {
  name: "winter",
  elements: ["snow", "frost", "ice"],
  temperature: -12,
  state: "frozen",
};
```

[eslint/comma-dangle]: https://eslint.org/docs/rules/comma-dangle
[eslint/comma-style]: https://eslint.org/docs/rules/comma-style
[mdn-trailing_commas]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
[prettier-blob-v2.0.0#traling_comma_default]: https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-trailingcomma-to-es5-6963httpsgithubcomprettierprettierpull6963-by-fiskerhttpsgithubcomfisker
[prettier]: https://prettier.io
