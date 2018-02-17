## Leading and Trailing

Never use leading and [trailing commas][mdn-trailing_commas]. It significantly decreases the code readability and is not compatible with the [JSON notation][json-notation].

Also note that [trailing commas are illegal][mdn-trailing_commas-illegal] and will throw a `SyntaxError` when used function parameter definitions or function invocations only containing a comma. Furthermore, when using [rest parameters][mdn-rest_parameters] (ES6 Rest Spread), trailing commas are not allowed:

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

```js
const winter = [
    snow
  , frost
  , ice
];
```

```js
const winter = {
    name: "winter"
  , elements: ["snow", "frost", "ice"]
  , temperature: -12
  , state: "frozen"
};
```

```js
const winter = [
  snow,
  frost,
  ice,
];
```

```js
const winter = {
  name: "winter",
  elements: ["snow", "frost", "ice"],
  temperature: -12,
  state: "frozen",
};
```

⇡ **Correct** code for this rule:

```js
const winter = [
  snow,
  frost,
  ice
];
```

```js
const winter = {
  name: "winter",
  elements: ["snow", "frost", "ice"],
  temperature: -12,
  state: "frozen"
};
```

[eslint/comma-dangle]: https://eslint.org/docs/rules/comma-dangle
[eslint/comma-style]: https://eslint.org/docs/rules/comma-style
[json-notation]: https://www.json.org
[mdn-trailing_commas]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
[mdn-trailing_commas-illegal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas#Illegal_trailing_commas
[mdn-rest_parameters]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
