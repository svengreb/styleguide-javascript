<!--lint disable no-duplicate-headings-->

## Equality Syntax

Use `===` and `!==` instead of `==` and `!=`.

> ESLint: [eqeqeq][eslint/eqeqeq]

###### References

- [Truth, Equality and JavaScript][ref-truth_equality_and_javascript] by Angus Croll

###### Examples

⇣ **Incorrect** code for this rule:

```js
const season = "winter";

console.log(season == "winter");
console.log(season != "winter");
```

⇡ **Correct** code for this rule:

```js
const season = "winter";

console.log(season === "winter");
console.log(season !== "winter");
```

## Conditional Statements

Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract function and always follows these rules:

- **Objects** evaluate to `true`
- **Undefined** evaluates to `false`
- **Null** evaluates to `false`
- **Booleans** evaluate to the **value of the boolean**
- **Numbers** evaluate to `false` if +0, -0, or `NaN`, otherwise `true`
- **Strings** evaluate to `false` if an empty string `""`, otherwise `true`

###### Examples

An array (even an empty one) is an `object` and **Objects** will evaluate to `true`.

```js
if ([0] && []) {
  // ...
}
```

## Shortcuts

Use shortcuts for booleans, but explicit comparisons for strings and numbers.

###### Examples

⇣ **Incorrect** code for this rule:

```js
if (isSnowing === true) {
  // ...
}
```

```js
if (snow) {
  // ...
}
```

```js
if (snowflakes.length) {
  // ...
}
```

⇡ **Correct** code for this rule:

```js
if (isSnowing) {
  // ...
}
```

```js
if (snow !== "") {
  // ...
}
```

```js
if (snowflakes.length > 0) {
  // ...
}
```

## Switch Blocks

Use braces to create blocks in `case` and `default` clauses that contain lexical declarations like e.g. `let`, `const`, `function`, and `class`. Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.

> ESLint: [no-case-declarations][eslint/no-case-declarations]

###### Examples

⇣ **Incorrect** code for this rule:

```js
switch (winter) {
  case "ice":
    let ice = true;
    break;
  case "frost":
    const frost = true;
    break;
  case "snow":
    function snow() {
      // ...
    }
    break;
  default:
    class Winter {}
}
```

⇡ **Correct** code for this rule:

```js
switch (winter) {
  case "ice": {
    let ice = true;
    break;
  }
  case "frost": {
    const frost = true;
    break;
  }
  case "snow": {
    function snow() {
      // ...
    }
    break;
  }
  case "wind":
    wind();
    break;
  default: {
    class Winter {}
  }
}
```

## Nested Ternaries

Ternaries should not be nested and generally be single line expressions.

> ESLint: [no-nested-ternary][eslint/no-nested-ternary]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const winter = snow > frost
  ? "snow"
  : ice > frost ? "ice" : null;
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
// Split into two separated ternary expressions.
const maybeIce = ice > frost ? "ice" : null;

const winter = snow > frost
  ? "snow"
  : maybeIce;
```

<!--lint enable no-missing-blank-lines-->

⇢ **Recommended** code for this rule:

```js
const maybeIce = ice > frost ? "ice" : null;

const winter = snow > frost ? "snow" : maybeIce;
```

## Avoid Unneeded Ternary

Avoid unneeded ternary statements.

> ESLint: [no-unneeded-ternary][eslint/no-unneeded-ternary]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const season = winter ? winter : summer;
const ice = negativeTemperature ? true : false;
const snow = negativeTemperature ? false : true;
```

⇡ **Correct** code for this rule:

```js
const season = winter || summer;
const ice = !!negativeTemperature;
const snow = !negativeTemperature;
```

## No Mixed Operators

When mixing operators, enclose them in parentheses. The only exception are the standard arithmetic operators: `+`, `-` and `**` since their precedence is broadly understood. It is recommended to enclose `/` and `*` in parentheses because their precedence can be ambiguous when they are mixed. This improves readability and clarifies the developer's intention.

> ESLint: [no-mixed-operators][eslint/no-mixed-operators]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const season = winter && frost < 0 || snow > 0 || ice + 1 === 0;
```

<!-- prettier-ignore -->
```js
const season = winter ** frost - 5 % ice;
```

<!-- prettier-ignore -->
```js
// Could be confused with: (a || b) && c
if (winter || frost && snow) {
  return ice;
}
```

<!-- prettier-ignore -->
```js
const winter = frost + snow / ice * snowflakes;
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const season = (winter && frost < 0) || snow > 0 || ice + 1 === 0;
```

```js
const season = winter ** frost - (5 % ice);
```

```js
if (winter || (frost && snow)) {
  return ice;
}
```

```js
const season = winter + (frost / snow) * ice;
```

[eslint/eqeqeq]: https://eslint.org/docs/rules/eqeqeq
[eslint/no-case-declarations]: https://eslint.org/docs/rules/no-case-declarations
[eslint/no-mixed-operators]: https://eslint.org/docs/rules/no-mixed-operators
[eslint/no-nested-ternary]: https://eslint.org/docs/rules/no-nested-ternary
[eslint/no-unneeded-ternary]: https://eslint.org/docs/rules/no-unneeded-ternary
[ref-truth_equality_and_javascript]: https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108
