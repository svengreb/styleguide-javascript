<!--lint disable no-duplicate-headings-->

## Declaration

Always use `const` or `let` to declare variables to avoid polluting the global namespace, otherwise this will result in global variables.

> ESLint: [no-undef][eslint/no-undef] and [prefer-const][eslint/prefer-const]

###### Examples

⇣ **Incorrect** code for this rule:

```js
snow = new Snow();
```

⇡ **Correct** code for this rule:

```js
const snow = new Snow();
```

## Declaration Separation

Use one `const` or `let` declaration per variable. It simplifies the addition of new variable declarations and increases the code readability and maintainability. This also allows to step through each declaration with the debugger, instead of jumping through all of them at once.

> ESLint: [one-var][eslint/one-var]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowflakes = getSnowflakes(),
  frost = true,
  season = "winter";
```

⇡ **Correct** code for this rule:

```js
const snowflakes = getSnowflakes();
const frost = true;
const season = "winter";
```

## Grouping

Group all `const` and then group all `let` declarations. This helps to assign a variable depending on one of the previous assigned variables.

###### Examples

⇣ **Incorrect** code for this rule:

```js
let snow,
  frost,
  ice,
  snowflakes = getSnowflakes(),
  isWinter = true;
```

```js
let snow;
const snowflakes = getSnowflakes();
let frost;
const isWinter = true;
let ice;
```

⇡ **Correct** code for this rule:

```js
const isWinter = true;
const snowflakes = getSnowflakes();
let snow;
let frost;
let ice;
```

## Assignment

Assign variables when they are needed, but place them in a reasonable place. `let` and `const` are block scoped and not function scoped.

###### Examples

⇣ **Incorrect** code for this rule:

```js
// Unnecessary function call.
function checkWinterSeason(season) {
  const name = getName();

  if (season === "summer") {
    return false;
  }

  if (name === "winter") {
    this.setName("");
    return false;
  }

  return name;
}
```

⇡ **Correct** code for this rule:

```js
function checkWinterSeason(season) {
  if (season === "summer") {
    return false;
  }

  const name = getName();

  if (name === "winter") {
    this.setName("");
    return false;
  }

  return name;
}
```

## No Chain Assignment

Don't chain variable assignments. Chaining variable assignments creates implicit global variables.

> ESLint: [no-multi-assign][eslint/no-multi-assign]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
(function winter() {
  /*
   * JavaScript interprets this as
   *
   * let snow = ( frost = ( ice = 1 ) );
   *
   * The "let" keyword only applies to variable "snow".
   * The variables "frost" and ice become global variables.
   *
   * The same applies for the "const" syntax.
   */
  let snow = frost = ice = 1;
}());

console.log(snow); // ReferenceError
console.log(frost); // 1
console.log(ice); // 1
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
(function winter() {
  let snow = 1;
  let frost = snow;
  let ice = snow;
}());

console.log(snow); // ReferenceError
console.log(frost); // ReferenceError
console.log(ice); // ReferenceError
```

<!--lint enable no-missing-blank-lines-->

## No Unary Increment and Decrement

Avoid using unary increments and decrements (`++`, `--`). Per ESLint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate values with statements like `number += 1` instead of `number++` or `number ++`. Disallowing unary increment and decrement statements also prevents pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior.

Exceptions are final expression in `for` loops which can be configured for ESLint by enabling the `allowForLoopAfterthoughts` option.

> ESLint: [no-plusplus][eslint/no-plusplus]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowflakes = [1, 2, 3];
let flake = 1;
flake++;
--flake;

let total = 0;
let allFlakes = 0;
for (let i = 0; i < snowflakes.length; i++) {
  let value = snowflakes[i];
  total += value;
  if (value) {
    allFlakes++;
  }
}
```

⇡ **Correct** code for this rule:

```js
const snowflakes = [1, 2, 3];
let flake = 1;
flake += 1;
flake -= 1;

const total = snowflakes.reduce((a, b) => a + b, 0);
const allFlakes = snowflakes.filter(Boolean).length;
```

[eslint/no-multi-assign]: https://eslint.org/docs/rules/no-multi-assign
[eslint/no-plusplus]: https://eslint.org/docs/rules/no-plusplus
[eslint/no-undef]: https://eslint.org/docs/rules/no-undef
[eslint/one-var]: https://eslint.org/docs/rules/one-var
[eslint/prefer-const]: https://eslint.org/docs/rules/prefer-const
