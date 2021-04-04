Always use semicolons! When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion][mdn-lexical_grammar-automatic_semicolon_insertion] to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into the code before the line break. _ASI_ contains a few eccentric behaviors which might break the code if JavaScript misinterprets a line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating statements and configuring linters to catch missing semicolons will help to prevent from encountering issues.

###### References

- [ECMAScript 2018 Specification][ref-ecma262-automatic_semicolon_insertion]
- [StackOverflow: "Semicolon before self-invoking function?"][ref-stackoverflow-self-invoking-function]

> ESLint: [semi][eslint/semi]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const snow = {}
const frost = {}
[snow, frost].forEach(element => season.name = "winter") // ReferenceError: season is not defined
```

<!-- prettier-ignore -->
```js
const winter = "Sparkling and frozen!"
(async function season(){
  // ...
}())
```

<!-- prettier-ignore -->
```js
function winter() {
  return
    "The winter season is sparkling and frozen!"
}
// Returns "undefined" instead of the value on the next line.
// Always happens when "return" is on a line by itself because of ASI!
winter()
```

⇡ **Correct** code for this rule:

```js
const snow = {};
const frost = {};
[snow, frost].forEach((element) => {
  season.name = "winter";
});
```

<!-- prettier-ignore -->
```js
const winter = "Sparkling and frozen!";
(async function season(){
  // ...
}());
```

<!--lint enable no-missing-blank-lines-->

```js
function winter() {
  return "The winter season is sparkling and frozen!";
}
```

[eslint/semi]: https://eslint.org/docs/rules/semi
[mdn-lexical_grammar-automatic_semicolon_insertion]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Automatic_semicolon_insertion
[ref-ecma262-automatic_semicolon_insertion]: https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion
[ref-stackoverflow-self-invoking-function]: https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214
