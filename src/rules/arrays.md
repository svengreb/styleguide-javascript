## Literals

Use the literal syntax for array creation.

> ESLint: [no-array-constructor][eslint-no-array-constructor]

[eslint-no-array-constructor]: https://eslint.org/docs/rules/no-array-constructor

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snow = new Array();
```

⇡ **Correct** code for this rule:

```js
const snow = [];
```

## Push

Use [`Array#push`][mdn-array-push] instead of direct assignment to add items to an array.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const winter = [];

winter[snow.length] = "snow";
```

⇡ **Correct** code for this rule:

```js
const winter = [];

winter.push("snow");
```

## ES6 Array Spreads

Use array spreads `...` to copy arrays.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const winter = ["snow", "frost"];
const winterCopy = [];
let idx;

for (idx = 0; idx < winter.length; idx += 1) {
  winterCopy[idx] = winter[idx];
}
```

⇡ **Correct** code for this rule:

```js
const winter = ["snow", "frost"];
const winterCopy = [...winter];
```

## Prefer spreads over `from`

Use spreads `...` instead of [`Array.from`][mdn-array-from] to convert an array-like object to an array.

###### Examples

⇜ **Avoidable** code for this rule:

```js
const winter = document.querySelectorAll(".snow");

const nodes = Array.from(winter);
```

⇢ **Recommended** code for this rule:

```js
const winter = ["snow", "frost"];
const nodes = [...winter];
```

## Mapping Over Iterables

Use [`Array.from`][mdn-array-from] instead of spread `...` for mapping over iterables. This avoids creating an intermediate array.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const winter = ["snow", "frost"];
const winterMap = [...winter].map(seasons);
```

⇡ **Correct** code for this rule:

```js
const winter = ["snow", "frost"];
const winterMap = Array.from(winter, seasons);
```

## Callback Return

Use return statements in array method callbacks. This excludes functions that consists of a single statement returning an expression without side effects.

> ESLint: [array-callback-return][eslint-array-callback-return]

###### Examples

⇣ **Incorrect** code for this rule:

```js
// No returned value means "winter" becomes undefined after the first iteration.
[[0, 1], [2, 3], [4, 5]].reduce((winter, element, index) => {
  const flatten = winter.concat(element);
  winter[index] = flatten;
});
```

```js
seasons.filter((season) => {
  const { name, element } = season;
  if (name === "winter") {
    return element === "snow";
  } else {
    return false;
  }
});
```

⇡ **Correct** code for this rule:

```js
[1, 2, 3].map((num) => {
  const snow = num + 1;
  return num * snow;
});
```

```js
[1, 2, 3].map(num => num + 1);
```

```js
[[0, 1], [2, 3], [4, 5]].reduce((winter, element, index) => {
  const flatten = winter.concat(element);
  winter[index] = flatten;
  return flatten;
});
```

```js
seasons.filter((season) => {
  const { name, element } = season;
  if (name === "winter") {
    return element === "snow";
  }

  return false;
});
```

## Line Breaks

Use line breaks after open and before close array brackets if an array has multiple lines.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const arr = [
  [0, 1], [2, 3], [4, 5]
];
```

```js
const objectInArray = [{
  id: 1
}, {
  id: 2
}];
```

```js
const numberInArray = [
  1, 2
];
```

⇡ **Correct** code for this rule:

```js
const arr = [[0, 1], [2, 3], [4, 5]];
```

```js
const objectInArray = [
  {
    id: 1
  },
  {
    id: 2
  }
];
```

```js
const numberInArray = [
  1,
  2
];
```

[eslint-array-callback-return]: https://eslint.org/docs/rules/array-callback-return
[mdn-array-from]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
[mdn-array-push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
