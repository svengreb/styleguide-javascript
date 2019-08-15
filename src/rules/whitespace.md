## Indentation Character

Always use spaces characters where two (2) spaces are used for indentation. The usage of tab characters is disallowed. A tab could be a different number of columns depending on the environment, but a space is always one column. Adhering to this rule increases the code readability and maintainability significantly.

> ESLint: [indent][eslint/indent]

###### Examples

Note: The `»` character represents a tab.

⇣ **Incorrect** code for this rule:

```js
function winter() {
 » let snow;
}
```

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
function winter() {
    let snow;
}
```

<!-- prettier-ignore -->
```js
function winter() {
 let snow;
}
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
function winter() {
  let snow;
}
```

## Before Blocks

Place one (1) space before the leading brace.

> ESLint: [space-before-blocks][eslint/space-before-blocks]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
function snow(){
  console.log("snow");
}
```

<!-- prettier-ignore -->
```js
winter.set("snow",{
  density: 20,
  frozen: false
});
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
function snow() {
  console.log("snow");
}
```

```js
winter.set("snow", {
  density: 20,
  frozen: false
});
```

## Around Keywords

Place one (1) space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations.

> ESLint: [keyword-spacing][eslint/keyword-spacing]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
if(isWinter) {
  snow ();
}
```

<!-- prettier-ignore -->
```js
function snow () {
  console.log ("falling");
}
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
if (isWinter) {
  snow();
}
```

```js
function snow() {
  console.log("falling");
}
```

## Infix Operator Spacing

Set off operators with spaces.

> ESLint: [space-infix-ops][eslint/space-infix-ops]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const snowflakes=snow+5;
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const snowflakes = snow + 5;
```

## Newline

End files with a single [newline][ref-wikipedia-newline] character. Prefer the _LF_ [control character][ref-wikipedia-control_character] (\*nix based OS) and avoid the usage of _CRLF_ characters (mostly Microsoft Windows based OS).

> ESlint: [eol-last][eslint/eol-last]

###### Examples

⇣ **Incorrect** code for this rule:

```js
import { snow } from "./Winter";
export default snow;
```

```js
import { snow } from "./Winter";
export default snow;¬
¬
```

⇡ **Correct** code for this rule:

```js
import { snow } from "./Winter";
export default snow;¬
```

## Chains

Use indentation when making long method chains. Use a leading dot, which emphasizes that the line is a method call, not a new statement.

> ESLint: [newline-per-chained-call][eslint/newline-per-chained-call] and [no-whitespace-before-property][eslint/no-whitespace-before-property]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const elements = ["snow", "frost", "ice"];
elements.map(element => `sparkling ${element}`).find("snow").highlight().tokenize(2).end().updateCount();
```

<!-- prettier-ignore -->
```js
const elements = ["snow", "frost", "ice"];
elements.map(element => `sparkling ${element}`).
  find("snow").
    highlight().
    tokenize(2).
  end().
    updateCount();
```

<!-- prettier-ignore -->
```js
const elements = ["snow", "frost", "ice"];
elements.map(element => `sparkling ${element}`).find("snow").highlight().tokenize(2).find("frost")
    tokenize(3).highlight(false).find("ice").tokenize(1)
    .find("wind").highlight().tokenize().updateCount()
    .toString();
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const elements = ["snow", "frost", "ice"];
elements
  .map(element => `sparkling ${element}`)
  .find("snow")
  .highlight()
  .tokenize(2)
  .end()
  .updateCount();
```

```js
const elements = ["snow", "frost", "ice"];
elements
  .map(element => `sparkling ${element}`)
  .tokenize(2)
  .updateCount();
```

## After Blocks

Leave a blank line after blocks and before the next statement.

###### Examples

⇣ **Incorrect** code for this rule:

```js
if (winter) {
  return snow;
}
return frost;
```

```js
const winter = {
  snow() {},
  frost() {}
};
return winter;
```

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const winter = [
  function snow() {},
  function frost() {}
];
return winter;
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
if (winter) {
  return snow;
}

return frost;
```

```js
const winter = {
  snow() {},

  frost() {}
};

return winter;
```

```js
const winter = [function snow() {}, function frost() {}];

return winter;
```

## Padded Blocks

Do not pad blocks with blank lines.

> ESLint: [padded-blocks][eslint/padded-blocks]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
function winter() {

  console.log(snow);

}
```

<!-- prettier-ignore -->
```js
if (winter) {

  console.log(snow);
} else {
  console.log(frost);

}
```

<!-- prettier-ignore -->
```js
class Winter {

  constructor(snow) {
    this.snow = snow;
  }
}
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
function winter() {
  console.log(snow);
}
```

```js
if (winter) {
  console.log(snow);
} else {
  console.log(frost);
}
```

```js
class Winter {
  constructor(snow) {
    this.snow = snow;
  }
}
```

## Inside Parentheses

Do not add spaces inside parentheses.

> ESLint: [space-in-parens][eslint/space-in-parens]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
function winter( element ) {
  return element;
}
```

<!-- prettier-ignore -->
```js
if ( winter ) {
  console.log(snow);
}
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
function winter(element) {
  return element;
}
```

```js
if (winter) {
  console.log(snow);
}
```

## Inside Brackets

Do not add spaces inside brackets.

> ESLint: [array-bracket-spacing][eslint/array-bracket-spacing]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const winter = [ "snow", "frost", "ice" ];
console.log(winter[ 0 ]);
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const winter = ["snow", "frost", "ice"];
console.log(winter[0]);
```

## Inside Braces

Add spaces inside curly braces.

> ESlint: [object-curly-spacing][eslint/object-curly-spacing]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const season = {name: "winter"};
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const season = { name: "winter" };
```

## Maximum Line Length

Avoid having lines of code that are longer than 100 characters including whitespaces. Adhering to this rule increases the code readability and maintainability significantly.

Note that the [rule for long strings][strings-line_length] is exempt from this rule, and should not be broken up.

> ESLint: [max-len][eslint/max-len]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
const season = winter && winter.elements && winter.elements.snow && winter.elements.snow.state && winter.elements.snow.state.temperature && winter.elements.snow.state.temperature.celsius;
```

<!-- prettier-ignore -->
```js
season({ name: "winter", elements: ["snow", "frost"] }).load(() => console.log("Sparkling")).catch(() => console.log("Melting"));
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
const season =
  winter &&
  winter.elements &&
  winter.elements.snow &&
  winter.elements.snow.state &&
  winter.elements.snow.state.temperature &&
  winter.elements.snow.state.temperature.celsius;
```

```js
season({
  name: "winter",
  elements: ["snow", "frost"]
})
  .load(() => console.log("Sparkling"))
  .catch(() => console.log("Melting"));
```

[eslint/array-bracket-spacing]: https://eslint.org/docs/rules/array-bracket-spacing
[eslint/eol-last]: https://eslint.org/docs/rules/eol-last
[eslint/indent]: https://eslint.org/docs/rules/indent
[eslint/keyword-spacing]: https://eslint.org/docs/rules/keyword-spacing
[eslint/max-len]: https://eslint.org/docs/rules/max-len
[eslint/newline-per-chained-call]: https://eslint.org/docs/rules/newline-per-chained-call
[eslint/no-whitespace-before-property]: https://eslint.org/docs/rules/no-whitespace-before-property
[eslint/object-curly-spacing]: https://eslint.org/docs/rules/object-curly-spacing
[eslint/padded-blocks]: https://eslint.org/docs/rules/padded-blocks
[eslint/space-before-blocks]: https://eslint.org/docs/rules/space-before-blocks
[eslint/space-in-parens]: https://eslint.org/docs/rules/space-in-parens
[eslint/space-infix-ops]: https://eslint.org/docs/rules/space-infix-ops
[ref-wikipedia-control_character]: https://en.wikipedia.org/wiki/Control_character
[ref-wikipedia-newline]: https://en.wikipedia.org/wiki/Newline
[strings-line_length]: strings.md#line-length
