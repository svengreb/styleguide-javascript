<!--lint disable no-duplicate-headings-->

## Dot Notation

Use [dot notation][4] when accessing properties.

> ESLint: [dot-notation][1]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowball = {
  density: 20,
  falling: true,
};

const isFalling = snowball["falling"];
```

⇡ **Correct** code for this rule:

```js
const snowball = {
  density: 20,
  falling: true,
};

const isFalling = snowball.falling;
```

## Bracket Notation

Use [bracket notation][3] `[]` when accessing properties with a variable.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowball = {
  density: 20,
  falling: true,
};

function getProp(prop) {
  return snowball[prop];
}

const isFalling = getProp("falling");
```

## Exponentiation Operator

Use exponentiation operator `**` when calculating exponentiations.

> ESLint: [no-restricted-properties][2]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const binary = Math.pow(2, 10);
```

⇡ **Correct** code for this rule:

```js
const binary = 2 ** 10;
```

[1]: https://eslint.org/docs/latest/rules/dot-notation
[2]: https://eslint.org/docs/latest/rules/no-restricted-properties
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Dot_notation
