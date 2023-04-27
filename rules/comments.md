<!--lint disable no-duplicate-headings-->

## Multi Line

Use `/** ... */` for multi-line comments.

###### Examples

⇣ **Incorrect** code for this rule:

```js
// Returns a new element based on the passed season name.
//
// @param {String} season
// @return {Element} element
function getElement(season) {
  // ...
  return element;
}
```

⇡ **Correct** code for this rule:

```js
/**
 * Returns a new element based on the passed season name.
 *
 * @param {String} season - the name of the season
 * @return {Element} the element
 */
function getElement(season) {
  // ...
  return element;
}
```

## Single Line

Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it's on the first line of a block.

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const isSnowing = true;  // the current snow state.
```

<!--lint enable no-missing-blank-lines-->

```js
function getWinterElement() {
  console.log("Loading winter elements...");
  // set the default type to "frost".
  const element = this.snow || "frost";

  return element;
}
```

⇡ **Correct** code for this rule:

```js
// the current snow state.
const isSnowing = true;
```

```js
function getWinterElement() {
  console.log("Loading winter elements...");

  // set the default type to "frost".
  const element = this.snow || "frost";

  return element;
}
```

```js
function getWinterElement() {
  // set the default type to "frost".
  const element = this.snow || "frost";

  return element;
}
```

## Spacing

Start all comments with a space to make it easier to read.

> ESLint: [spaced-comment][1]

###### Examples

⇣ **Incorrect** code for this rule:

```js
//the current snow state.
const isSnowing = true;
```

```js
/**
 *Returns a new element based on the passed season name.
 *
 *@param {String} season - the name of the season
 *@return {Element} the element
 */
function getElement(season) {
  // ...
  return element;
}
```

⇡ **Correct** code for this rule:

```js
// the current snow state.
const isSnowing = true;
```

```js
/**
 * Returns a new element based on the passed season name.
 *
 * @param {String} season - the name of the season
 * @return {Element} the element
 */
function getElement(season) {
  // ...
  return element;
}
```

[1]: https://eslint.org/docs/latest/rules/spaced-comment
