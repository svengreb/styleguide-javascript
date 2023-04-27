<!--lint disable no-duplicate-headings-->

## Declaration

Always use `const` or `let` to declare variables to avoid polluting the global namespace, otherwise this will result in global variables.

> ESLint: [no-undef][3] and [prefer-const][6]

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

Use one `const` or `let` declaration per variable or assignment. It simplifies the addition of new variable declarations and increases the code readability and maintainability. This also allows to step through each declaration with the debugger, instead of jumping through all of them at once.

> ESLint: [one-var][5]

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

> ESLint: [no-multi-assign][1]

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

> ESLint: [no-plusplus][2]

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

## Unused

No variables that are declared and not used anywhere in the code (unused). These are most likely an error due to incomplete refactoring, take up space in the code and can lead to confusion by readers.

> ESLint: [no-unused-vars][4]

###### Examples

⇣ **Incorrect** code for this rule:

```js
// Write-only variables are not considered as used.
let snowflakes = 10;
snowflakes = 5;
```

```js
// A read for a modification of itself is not considered as used.
let snowflakes = 0;
snowflakes = snowflakes + 1;
```

```js
// Unused function arguments.
function getSnow(flakes, frost) {
  return flakes;
}
```

⇡ **Correct** code for this rule:

```js
function getSnow(snow, frost) {
  return snow + frost;
}
```

```js
// `type` is ignored even if unused because it has a rest property sibling.
var { snow, ...flakes } = winter;
```

[1]: https://eslint.org/docs/latest/rules/no-multi-assign
[2]: https://eslint.org/docs/latest/rules/no-plusplus
[3]: https://eslint.org/docs/latest/rules/no-undef
[4]: https://eslint.org/docs/latest/rules/no-unused-vars
[5]: https://eslint.org/docs/latest/rules/one-var
[6]: https://eslint.org/docs/latest/rules/prefer-const
