<!--lint disable no-duplicate-headings-->

## Anonymous Functions

Use arrow function notation for anonymous functions e.g. when passing an inline callback. It creates a version of the function that executes in the context of this which is usually the desired functionality, and is a more concise syntax.

When dealing with a fairly complicated function, it is recommended to move that logic out into its own named function expression.

> ESLint: [prefer-arrow-callback][5] and [arrow-spacing][3]

###### Examples

⇣ **Incorrect** code for this rule:

```js
[1, 2, 3].map(function (number) {
  const nextNumber = number + 1;
  return number * nextNumber;
});
```

⇡ **Correct** code for this rule:

```js
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return number * nextNumber;
});
```

## Implicit Return

If the function body consists of a single statement returning an [expression][6] without side effects, use the implicit return. Otherwise use a `return` statement. This rule is syntactic sugar and significantly increases the readability when multiple functions are chained together.

> ESLint: [arrow-parens][2] and [arrow-body-style][1]

###### Examples

⇣ **Incorrect** code for this rule:

```js
["snow", "frost"].map((element) => {
  const nextElement = element;
  `The winter season has ${nextElement}.`;
});
```

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
let isFalling = false;

snow(() => isFalling = true);
```

```js
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
["snow", "frost"].map((element) => `The winter season has ${element}.`);
```

```js
["snow", "frost"].map((element) => {
  const sparklingElement = `sparkling ${element}`;
  return `The winter season has ${sparklingElement}.`;
});
```

```js
["snow", "frost"].map((element, index) => ({
  [index]: element,
}));
```

```js
[1, 2, 3].map((number) => `A string containing the ${number + 1}.`);
```

```js
// No implicit return with side effects.
function seasons(callback) {
  const season = callback();
  if (season === "snow") {
    // ...
  }
}
```

```js
let isFalling = false;

snow(() => {
  isFalling = true;
});
```

## Parentheses Wrap

In case the expression spans over multiple lines, wrap it in parentheses for better readability. This shows clearly where the function starts and ends.

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
["snow", "frost", "ice"].map(element => Object.prototype.hasOwnProperty.call(
    elementObjectWithAVeryLongName,
    element
  )
);
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
["snow", "frost", "ice"].map(element => (
  Object.prototype.hasOwnProperty.call(
    elementObjectWithAVeryLongName,
    element
  )
));
```

<!--lint enable no-missing-blank-lines-->

## Single Argument Parentheses

Always include parentheses around arguments for clarity and consistency, even when a function takes a single argument.

> ESLint: [arrow-parens][2]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
["snow", "frost"].map((element) => `sparkling ${element}`);
```

<!-- prettier-ignore -->
```js
["snow", "frost"].map((element) => {
  const sparkling = "sparkling";
  return `${sparkling} ${element}`;
});
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
["snow", "frost"].map((element) => `sparkling ${element}`);
```

```js
["snow", "frost"].map(
  (element) => `A long string about the winter season with sparkling ${element}. It's so long that we don't want it to take up space on the ".map()" line!`
);
```

## Comparison Operators Confusion

Avoid confusing arrow function syntax `=>` with comparison operators (`<=`, `>=`).

> ESLint: [no-confusing-arrow][4]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const elementDensity = element => element.density > 256 ? element.highDensity : element.lowDensity;
```

<!-- prettier-ignore -->
```js
const elementDensity = (element) => element.density > 256 ? element.highDensity : element.lowDensity;
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const elementDensity = (element) => (element.density > 256 ? element.highDensity : element.lowDensity);
```

```js
const elementDensity = (element) => {
  const { density, highDensity, lowDensity } = element;
  return density > 256 ? highDensity : lowDensity;
};
```

[1]: https://eslint.org/docs/latest/rules/arrow-body-style
[2]: https://eslint.org/docs/latest/rules/arrow-parens
[3]: https://eslint.org/docs/latest/rules/arrow-spacing
[4]: https://eslint.org/docs/latest/rules/no-confusing-arrow
[5]: https://eslint.org/docs/latest/rules/prefer-arrow-callback
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions
