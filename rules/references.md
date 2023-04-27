<!--lint disable no-duplicate-headings-->

## Prefer `const`

Use `const` for all references and avoid using `var`.

> ESLint: [prefer-const][3] and [no-const-assign][1]

This ensures that references are not reassigned, which can lead to bugs and difficult to comprehend code.

###### Examples

⇣ **Incorrect** code for this rule:

```js
var snow = 1;
var ice = 2;
```

⇡ **Correct** code for this rule:

```js
const snow = 1;
const ice = 2;
```

## Disallow `var`

Use `let` instead of `var` to reassign references.

> ESLint: [no-var][2]

`let` is block-scoped rather than function-scoped like `var`.

###### Examples

⇣ **Incorrect** code for this rule:

```js
var snow = 1;
if (true) {
  snow += 1;
}
```

⇡ **Correct** code for this rule:

```js
let snow = 1;
if (true) {
  snow += 1;
}
```

## Block Scope

Both `let` and `const` are block-scoped. They only exist in the blocks they are defined in.

###### Examples

```js
{
  let snow = 1;
  const ice = 1;
}
console.log(snow); // ReferenceError: snow is not defined
console.log(ice); // ReferenceError: ice is not defined
```

[1]: https://eslint.org/docs/latest/rules/no-const-assign
[2]: https://eslint.org/docs/latest/rules/no-var
[3]: https://eslint.org/docs/latest/rules/prefer-const
