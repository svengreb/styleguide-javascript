<!--lint disable no-duplicate-headings-->

The [Standard Library][2] contains utilities that are functionally broken but remain for legacy reasons.

## Number `isNaN`

Use `Number.isNaN` instead of global `isNaN`. The global `isNaN` coerces non-numbers to numbers, returning true for anything that coerces to `NaN`. If this behavior is desired, make it explicit.

> ESLint: [no-restricted-globals][1]

###### Examples

⇣ **Incorrect** code for this rule:

```js
isNaN("1.2"); // false
isNaN("1.2.3"); // true
```

⇡ **Correct** code for this rule:

```js
Number.isNaN("1.2.3"); // false
Number.isNaN(Number("1.2.3")); // true
```

## Number `isFinite`

Use `Number.isFinite` instead of global `isFinite`. The global `isFinite` coerces non-numbers to numbers, returning true for anything that coerces to a finite number. If this behavior is desired, make it explicit.

> ESLint: [no-restricted-globals][1]

###### Examples

⇣ **Incorrect** code for this rule:

```js
isFinite("2e3"); // true
```

⇡ **Correct** code for this rule:

```js
Number.isFinite("2e3"); // false
Number.isFinite(parseInt("2e3", 10)); // true
```

[1]: https://eslint.org/docs/latest/rules/no-restricted-globals
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
