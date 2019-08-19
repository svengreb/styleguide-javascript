<!--lint disable no-duplicate-headings-->

## Objects

Use object destructuring when accessing and using multiple properties of an object. Destructuring avoids the usage of temporary references for those properties.

> ESLint: [prefer-destructuring][eslint/prefer-destructuring]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function getSeasonElement(season) {
  const name = season.name;
  const element = season.element;

  return `${name} has ${element}`;
}
```

⇡ **Correct** code for this rule:

```js
function getSeasonElement(season) {
  const { name, element } = season;
  return `${name} has ${element}`;
}
```

⇢ **Recommended** code for this rule:

```js
function getSeasonElement({ name, element }) {
  return `${name} has ${element}`;
}
```

## Arrays

Use array destructuring.

> ESLint: [prefer-destructuring][eslint/prefer-destructuring]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const winter = ["snow", "frost", "ice"];

const snow = winter[0];
const frost = winter[1];
```

⇡ **Correct** code for this rule:

```js
const winter = ["snow", "frost", "ice"];

const [snow, frost] = winter;
```

## Multiple Return Values

Use object destructuring for multiple return values instead of array destructuring. New properties can not be added over time or the order of item can not be changed without breaking call sites.

###### Examples

⇣ **Incorrect** code for this rule:

```js
function processElements(elements) {
  // ...
  return [snow, frost, ice];
}

// The caller must adapt to the order of return data.
const [snow, __, ice] = processElements(elements);
```

⇡ **Correct** code for this rule:

```js
function processElements(elements) {
  // ...
  return { snow, frost, ice };
}

// The caller selects only the needed data.
const { snow, ice } = processElements(elements);
```

[eslint/prefer-destructuring]: https://eslint.org/docs/rules/prefer-destructuring
