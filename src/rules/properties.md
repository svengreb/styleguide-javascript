## Dot Notation

Use [dot notation][mdn-property_accessors-dot_notation] when accessing properties.

> ESLint: [dot-notation][eslint/dot-notation]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowball = {
  density: 20,
  falling: true
};

const isFalling = snowball["falling"];
```

⇡ **Correct** code for this rule:

```js
const snowball = {
  density: 20,
  falling: true
};

const isFalling = snowball.falling;
```

## Bracket Notation

Use [bracket notation][mdn-property_accessors-bracket_notation] `[]` when accessing properties with a variable.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowball = {
  density: 20,
  falling: true
};

function getProp(prop) {
  return snowball[prop];
}

const isFalling = getProp("falling");
```

## Exponentiation Operator

Use exponentiation operator `**` when calculating exponentiations.

> ESLint: [no-restricted-properties][eslint/no-restricted-properties]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const binary = Math.pow(2, 10);
```

⇡ **Correct** code for this rule:

```js
const binary = 2 ** 10;
```

[eslint/dot-notation]: https://eslint.org/docs/rules/dot-notation
[eslint/no-restricted-properties]: https://eslint.org/docs/rules/no-restricted-properties
[mdn-property_accessors-dot_notation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Dot_notation
[mdn-property_accessors-bracket_notation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#Bracket_notation
