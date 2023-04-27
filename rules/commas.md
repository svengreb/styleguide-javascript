## Leading and Trailing

Never use leading but [trailing commas][3]. As of [5][] version `2.0.0` this has also been [set as default configuration][4]:

```js
function snow(,) {} // SyntaxError: missing formal parameter
(,) => {}; // SyntaxError: expected expression, got ','
snow(,) // SyntaxError: expected expression, got ','
function snow(...flakes,) {} // SyntaxError: parameter after rest parameter
(...flakes,) => {} // SyntaxError: expected closing parenthesis, got ','
```

> ESLint: [comma-style][2] and [comma-dangle][1]

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

[1]: https://eslint.org/docs/latest/rules/comma-dangle
[2]: https://eslint.org/docs/latest/rules/comma-style
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
[4]: https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-trailingcomma-to-es5-6963httpsgithubcomprettierprettierpull6963-by-fiskerhttpsgithubcomfisker
[5]: https://prettier.io
