<!--lint disable no-duplicate-headings-->

## No Iterators

Don't use iterators. Prefer JavaScript's higher-order functions instead of loops like `for-in` or `for-of`. Dealing with pure functions that return values is easier to reason about than side effects and enforces the immutable rule of this style guide.

Use

- `map()`
- `every()`
- `filter()`
- `find()`
- `findIndex()`
- `reduce()`
- `some()`
- ...

to iterate over arrays, and

- `Object.keys()`
- `Object.values()`
- `Object.entries()`

to produce arrays to iterate over objects.

> ESLint: [no-iterator][1] and [no-restricted-syntax][2]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowflakes = [1, 2, 3, 4, 5];

let flakes = 0;
for (let flake of snowflakes) {
  flakes += flake;
}
flakes === 15;
```

```js
const snowflakes = [1, 2, 3, 4, 5];

const increasedByOne = [];
for (let i = 0; i < snowflakes.length; i++) {
  increasedByOne.push(snowflakes[i] + 1);
}
```

⇡ **Correct** code for this rule:

```js
const snowflakes = [1, 2, 3, 4, 5];

let flakes = 0;
snowflakes.forEach((flake) => {
  flakes += flake;
});
flakes === 15;
```

```js
const snowflakes = [1, 2, 3, 4, 5];

const increasedByOne = [];
snowflakes.forEach((flake) => {
  increasedByOne.push(flake + 1);
});
```

⇢ **Recommended** code for this rule:

```js
const snowflakes = [1, 2, 3, 4, 5];

const flakes = snowflakes.reduce((total, flake) => total + flake, 0);
flakes === 15;
```

```js
const snowflakes = [1, 2, 3, 4, 5];

const increasedByOne = snowflakes.map((flake) => flake + 1);
```

## No Generators

Don't use generators for now since they don't transpile well to ES5.

## Spacing

If the usage of generators is necessary, or disregard the rule to [not use generators](#no-generators), make sure their function signature is spaced properly. The `function` and `*` syntax are part of the same conceptual keyword - `*` is not a modifier for `function`, `function*` is a unique construct, different from `function`.

###### Examples

↯ **Critical incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
function
*
snow() {
  // ...
}
```

<!-- prettier-ignore -->
```js
const snow = function
*
() {
  // ...
};
```

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore -->
```js
function * snow() {}
```

<!-- prettier-ignore -->
```js
const snow = function * () {}
```

<!-- prettier-ignore -->
```js
const snow = function *() {}
```

<!-- prettier-ignore -->
```js
const snow = function*() {}
```

<!-- prettier-ignore -->
```js
function*snow() {}
```

<!-- prettier-ignore -->
```js
function *snow() {}
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
function* snow() {}
```

```js
const snow = function* () {};
```

[1]: https://eslint.org/docs/latest/rules/no-iterator
[2]: https://eslint.org/docs/latest/rules/no-restricted-syntax
