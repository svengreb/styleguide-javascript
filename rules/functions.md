<!--lint disable no-duplicate-headings-->

## Declaration

Use named function expressions instead of function declarations. Function declarations are hoisted, which means that it is (too) easy to reference the function before it is defined in the file. This harms readability and maintainability.

Functions which definition is too large or complex should be extracted into a own module. Make sure to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable which is often the case in modern browsers or when using compilers such as [Babel][1]. This eliminates any assumptions made about the call stack of errors.

> ESLint: [func-style][2]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function winter() {
  // ...
}
```

```js
const winter = function () {
  // ...
};
```

⇡ **Correct** code for this rule:

```js
// Lexical name distinguished from the variable-referenced invocation(s).
const winter = function longUniqueMoreDescriptiveLexicalWinter() {
  // ...
};
```

## IIFE

Wrap immediately invoked function expressions ([IIFE][13]) in parentheses. An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, an IIFE is almost never needed.

> ESLint: [wrap-iife][11]

###### Examples

⇡ **Correct** code for this rule:

```js
(function () {
  console.log("The winter is snowy and sparkling.");
})();
```

## Block Declaration

Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Most browsers will allow it, but they all interpret it differently.

**Note:** _ECMA-262_ defines a block as a list of statements. A function declaration is not a statement!

> ESLint: [no-loop-func][4]

###### Examples

⇣ **Incorrect** code for this rule:

```js
if (winter) {
  function snow() {
    console.log("Snowy!");
  }
}
```

⇡ **Correct** code for this rule:

```js
let snow;
if (winter) {
  snow = () => {
    console.log("Snowy!");
  };
}
```

## Prevent `arguments` Shadow

Never name a parameter `arguments`! This will take precedence over the `arguments` object that is given to every function scope.

###### Examples

⇣ **Incorrect** code for this rule:

```js
function season(name, elements, arguments) {
  // ...
}
```

⇡ **Correct** code for this rule:

```js
function season(name, elements, args) {
  // ...
}
```

## ES6 Rest

Never use `arguments` and use rest syntax `...` instead. The rest `...` operator is explicit about which arguments to pull. Also rest arguments are a real Array, and not merely Array-like like `arguments`.

> ESLint: [prefer-rest-params][7]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function concatenateSeasons() {
  const seasons = Array.prototype.slice.call(arguments);
  return seasons.join("");
}
```

⇡ **Correct** code for this rule:

```js
function concatenateSeasons(...seasons) {
  return seasons.join("");
}
```

## ES6 Default Parameters

Use default parameter syntax rather than mutating function arguments.

###### Examples

↯ **Critical incorrect** code for this rule:

```js
function winter(elements) {
  /*
   * This mutates function arguments!
   * If "elements" is falsy it'll also be set to an object which can introduce subtle bugs.
   */
  elements = elements || {};
  // ...
}
```

⇣ **Incorrect** code for this rule:

```js
function winter(elements) {
  if (elements === void 0) {
    elements = {};
  }
  // ...
}
```

⇡ **Correct** code for this rule:

```js
function winter(elements = {}) {
  // ...
}
```

## Default Side Effects

Avoid side effects with default parameters.

###### Examples

⇣ **Incorrect** code for this rule:

```js
let snowflakes = 1;

function count(amount = snowflakes++) {
  console.log(amount);
}
count(); // 1
count(); // 2
count(3); // 3
count(); // 3
```

## Default Parameter Ordering

Always put default parameters last.

###### Examples

⇣ **Incorrect** code for this rule:

```js
function winter(elements = {}, name) {
  // ...
}
```

⇡ **Correct** code for this rule:

```js
function winter(name, elements = {}) {
  // ...
}
```

## Constructor

Never use the `Function` constructor to create a new function. Creating a function in this way evaluates a string similarly to [`eval()`][12], which opens vulnerabilities.

> ESLint: [no-new-func][5]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const add = new Function("snow", "frost", "return snow + frost");
```

```js
const subtract = Function("snow", "frost", "return snow - frost");
```

## Signature Spacing

Use spacing in a function signature for named functions while anonymous functions must not contain a space between the parentheses and the `function` keyword.

> ESLint: [space-before-function-paren][10] and [space-before-blocks][9]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const snow = function(){};
```

<!-- prettier-ignore -->
```js
const snow = function (){};
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const snow = function () {};
```

```js
const snow = function flake() {};
```

## Parameter Mutation

Never mutate parameters. Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

> ESLint: [no-param-reassign][6]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function snow(flake) {
  flake.key = 1;
}
```

⇡ **Correct** code for this rule:

```js
function snow(flake) {
  const key = Object.prototype.hasOwnProperty.call(flake, "key") ? flake.key : 1;
}
```

## Parameter Reassign

Never reassign parameters. It can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in [V8][14].

> ESLint: [no-param-reassign][6]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function snow(flake) {
  flake = 1;
  // ...
}
```

```js
function snow(flake) {
  if (!flake) {
    flake = 1;
  }
  // ...
}
```

⇡ **Correct** code for this rule:

```js
function snow(flake) {
  const flakeCopy = flake || 1;
  // ...
}
```

```js
function snow(flake = 1) {
  // ...
}
```

## ES6 Spread

Use of the spread operator `...` to call variadic functions. It's cleaner, avoids the supply of a context and also prevents the compose of `new` with `apply`.

> ESLint: [prefer-spread][8]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const winter = ["snow", "frost"];
console.log.apply(console, winter);
```

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
new (Function.prototype.bind.apply(Date, [null, 2018, 1, 20]));
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const winter = ["snow", "frost"];
console.log(...winter);
```

```js
new Date(...[2018, 1, 20]);
```

## Signature Invocation Indentation

Functions with multiline signatures, or invocations, should be indented like every other multiline list. Each item on a line by itself.

> ESLint: [function-paren-newline][3]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
function winter(snow,
               frost,
               ice) {
  // ...
}
```

<!-- prettier-ignore -->
```js
console.log(snow,
  frost,
  ice);
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
function winter(
  snow,
  frost,
  ice
) {
  // ...
}
```

<!-- prettier-ignore -->
```js
console.log(
  snow,
  frost,
  ice
);
```

<!--lint enable no-missing-blank-lines-->

[1]: https://babeljs.io
[2]: https://eslint.org/docs/latest/rules/func-style
[3]: https://eslint.org/docs/latest/rules/function-paren-newline
[4]: https://eslint.org/docs/latest/rules/no-loop-func
[5]: https://eslint.org/docs/latest/rules/no-new-func
[6]: https://eslint.org/docs/latest/rules/no-param-reassign
[7]: https://eslint.org/docs/latest/rules/prefer-rest-params
[8]: https://eslint.org/docs/latest/rules/prefer-spread
[9]: https://eslint.org/docs/latest/rules/space-before-blocks
[10]: https://eslint.org/docs/latest/rules/space-before-function-paren
[11]: https://eslint.org/docs/latest/rules/wrap-iife
[12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
[13]: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
[14]: https://v8.dev
