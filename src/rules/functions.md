## Declaration

Use named function expressions instead of function declarations. Function declarations are hoisted, which means that it is (too) easy to reference the function before it is defined in the file. This harms readability and maintainability.

Functions which definition is too large or complex should be extracted into a own module. Make sure to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable which is often the case in modern browsers or when using compilers such as [Babel][babel]. This eliminates any assumptions made about the call stack of errors.

> ESLint: [func-style][eslint/func-style]

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

Wrap immediately invoked function expressions ([IIFE][mdn-iife]) in parentheses. An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, an IIFE is almost never needed.

> ESLint: [wrap-iife][eslint/wrap-iife]

###### Examples

⇡ **Correct** code for this rule:

```js
(function () {
  console.log("The winter is snowy and sparkling.");
}());
```

## Block Declaration

Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Most browsers will allow it, but they all interpret it differently.

**Note:** *ECMA-262* defines a block as a list of statements. A function declaration is not a statement!

> ESLint: [no-loop-func][eslint/no-loop-func]

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

> ESLint: [prefer-rest-params][eslint/prefer-rest-params]

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
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
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

Never use the `Function` constructor to create a new function. Creating a function in this way evaluates a string similarly to [`eval()`][mdn-eval], which opens vulnerabilities.

> ESLint: [no-new-func][eslint/no-new-func]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const add = new Function("snow", "frost", "return snow + frost");
```

```js
const subtract = Function("snow", "frost", "return snow - frost");
```

## Signature Spacing

Use spacing in a function signature.

> ESLint: [space-before-function-paren][eslint/space-before-function-paren] and [space-before-blocks][eslint/space-before-blocks]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snow = function(){};
```

```js
const snow = function (){};
```

```js
const snow = function() {};
```

⇡ **Correct** code for this rule:

```js
const snow = function () {};
```

```js
const snow = function flake() {};
```

## Parameter Mutation

Never mutate parameters. Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

> ESLint: [no-param-reassign][eslint/no-param-reassign]

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

Never reassign parameters. It can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in [V8][v8].

> ESLint: [no-param-reassign][eslint/no-param-reassign]

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
  if (!flake) { flake = 1; }
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

> ESLint: [prefer-spread][eslint/prefer-spread]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const winter = ["snow", "frost"];
console.log.apply(console, winter);
```

```js
new (Function.prototype.bind.apply(Date, [null, 2018, 1, 20]));
```

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

###### Examples

⇣ **Incorrect** code for this rule:

```js
function winter(snow,
               frost,
               ice) {
  // ...
}
```

```js
console.log(snow,
  frost,
  ice);
```

⇡ **Correct** code for this rule:

```js
function winter(
  snow,
  frost,
  ice
) {
  // ...
}
```

```js
console.log(
  snow,
  frost,
  ice
);
```

[babel]: https://babeljs.io
[eslint/func-style]: https://eslint.org/docs/rules/func-style
[eslint/no-loop-func]: https://eslint.org/docs/rules/no-loop-func
[eslint/no-new-func]: https://eslint.org/docs/rules/no-new-func
[eslint/no-param-reassign]: https://eslint.org/docs/rules/no-param-reassign
[eslint/prefer-rest-params]: https://eslint.org/docs/rules/prefer-rest-params
[eslint/prefer-spread]: https://eslint.org/docs/rules/prefer-spread
[eslint/space-before-blocks]: https://eslint.org/docs/rules/space-before-blocks
[eslint/space-before-function-paren]: https://eslint.org/docs/rules/space-before-function-paren
[eslint/wrap-iife]: https://eslint.org/docs/rules/wrap-iife
[mdn-eval]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
[mdn-iife]: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
[v8]: https://developers.google.com/v8
