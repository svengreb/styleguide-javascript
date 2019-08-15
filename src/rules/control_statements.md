## Indentation

When control statements (`if`, `while` etc.) are too long or exceed the maximum line length, each (grouped) condition could be put into a new line. The logical operator should begin the line. Requiring operators at the beginning of the line keeps the operators aligned and follows a pattern similar to method chaining. This also improves readability by making it easier to visually follow complex logic.

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
if ((season === "winter" || snowflakes === 20) && aVeryLongMethodNameThatExceedsTheLineLength() && anotherLongNamedMethod()) {
  snow();
}
```

<!-- prettier-ignore -->
```js
if (snowflakes === 20 &&
  season === "winter") {
  snow();
}
```

<!-- prettier-ignore -->
```js
if (snowflakes === 20
  && season === "winter") {
  snow();
}
```

<!-- prettier-ignore -->
```js
if (
  snowflakes === 20 &&
  season === "winter"
) {
  snow();
}
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
if (snowflakes === 20 && season === "winter") {
  snow();
}
```

```js
if (
  (snowflakes === 20 || season === "winter") &&
  aVeryLongMethodNameThatExceedsTheLineLength() &&
  anotherLongNamedMethod()
) {
  snow();
}
```

```js
if (snowflakes === 20 && season === "winter") {
  snow();
}
```
