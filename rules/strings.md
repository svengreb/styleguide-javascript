<!--lint disable no-duplicate-headings-->

## Quotes

Use double quotes `""` for strings:

- **Double quotes reduce the need to escape characters**. It eliminates the need to escape apostrophes e.g the string `"I'm in love with the winter season"` must be changed to `'I\'m in love with the winter season'` when using single quotes.
- **Similarity to other languages**. Double quotes are used by many other programming languages like Java, Go and C/C++.
- **Double quotes are used by the [JSON notation][6]**.
- **Parallelism to the natural language**. Double quotes are used to identify a passage of quoted text. When using single quotes, the reader may misinterpret it as a contraction. The other meaning of a passage of text surrounded by the `'` indicates the _colloquial_ meaning. It makes sense to stay consistent with pre-existing languages, and this may likely ease the learning and interpretation of code.
- **Double quotes Inline HTML is an anti-pattern**.

Some users argument that single quotes can be used for inline HTML without the need to escape characters. We don't agree to this statement because inline HTML is normally a anti-pattern and templates should be used instead.

> ESLint: [quotes][4]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const name = 'South Pole';
```

<!--lint enable no-missing-blank-lines-->

```js
// Template literals should only be used for interpolation or newlines.
const name = `South Pole`;
```

⇡ **Correct** code for this rule:

```js
const name = "South Pole";
```

## Line Length

Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation. Broken strings are painful to work with and make code less searchable.

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const message = "Cupcake ipsum candy pudding soufflé chocolate. Croissant \
muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream \
cake dessert icing donut.";
```

<!-- prettier-ignore -->
```js
const message = "Cupcake ipsum candy pudding soufflé chocolate. Croissant" +
 "muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream " +
 "cake dessert icing donut.";
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const message =
  "Cupcake ipsum candy pudding soufflé chocolate. Croissant muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream cake dessert icing donut.";
```

## ES6 Template Literals

When programmatically building up strings, use [template literals][8] (previoudly called _template strings_ in ES2015 specification) instead of concatenation. Template literals provide a readable, concise syntax with support for embedded expressions. They allow the usage of features like multi-line strings and string interpolation.

> ESLint: [prefer-template][3] and [template-curly-spacing][5]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function printSeason(name) {
  return "It's " + name + "season!";
}
```

```js
function printSeason(name) {
  return ["It's ", name, "season!"].join();
}
```

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
function printSeason(name) {
  return `It's ${ name } season!`;
}
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
function printSeason(name) {
  return `It's ${name} season!`;
}
```

## No `eval()`

Never use [`eval()`][7] on a string, it opens too many vulnerabilities.

> ESLint: [no-eval][1]

## Escaping

Do not unnecessarily escape characters in strings. Backslashes harm readability and should only be used when necessary.

> ESLint: [no-useless-escape][2]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const winter = "\'snowy\' \a\n\d \'sparkling\'";
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const winter = "\"snowy\" and 'sparkling'";
const winter = `snowy and '${state}'`;
```

```js
const winter = `I'm in love with the '${seasonName}' season!`;
```

[1]: https://eslint.org/docs/latest/rules/no-eval
[2]: https://eslint.org/docs/latest/rules/no-useless-escape
[3]: https://eslint.org/docs/latest/rules/prefer-template
[4]: https://eslint.org/docs/latest/rules/quotes
[5]: https://eslint.org/docs/latest/rules/template-curly-spacing
[6]: https://www.json.org
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
