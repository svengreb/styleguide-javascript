<!--lint disable no-duplicate-headings-->

## Indentation Character

Always use spaces characters where two (2) spaces are used for indentation. The usage of tab characters is disallowed. A tab could be a different number of columns depending on the environment, but a space is always one column. Adhering to this rule increases the code readability and maintainability significantly.

> ESLint: [indent][7]

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

> ESLint: [space-before-blocks][17]

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
  frozen: false,
});
```

## Around Keywords

Place one (1) space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations.

> ESLint: [keyword-spacing][9]

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

> ESLint: [space-infix-ops][19]

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

End files with a single [newline][21] character. Prefer the _LF_ [control character][20] (\*nix based OS) and avoid the usage of _CRLF_ characters (mostly Microsoft Windows based OS).

> ESlint: [eol-last][5]

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

> ESLint: [newline-per-chained-call][11] and [no-whitespace-before-property][14]

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
  .map((element) => `sparkling ${element}`)
  .find("snow")
  .highlight()
  .tokenize(2)
  .end()
  .updateCount();
```

```js
const elements = ["snow", "frost", "ice"];
elements
  .map((element) => `sparkling ${element}`)
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
  frost() {},
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

  frost() {},
};

return winter;
```

```js
const winter = [function snow() {}, function frost() {}];

return winter;
```

## Padded Blocks

Do not pad blocks with blank lines.

> ESLint: [padded-blocks][16]

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

> ESLint: [space-in-parens][18]

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

> ESLint: [array-bracket-spacing][1]

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

> ESlint: [object-curly-spacing][15]

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

Note that the [rule for long strings][22] is exempt from this rule, and should not be broken up.

> ESLint: [max-len][10]

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
  elements: ["snow", "frost"],
})
  .load(() => console.log("Sparkling"))
  .catch(() => console.log("Melting"));
```

## Inside Blocks

Use consistent spacing inside an open block token and the next token on the same line.
This rule also enforces consistent spacing inside a close block token and previous token on the same line.

> ESLint: [block-spacing][2]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
function snow() {return true;}
if (snow) { flakes = 0;}
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
function snow() { return true; }
if (snow) { flakes = 0; }
```

<!--lint enable no-missing-blank-lines-->

## Around Commas

No spaces before commas and require a space after commas.

> ESLint: [comma-spacing][3]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
var snow = 1,flakes = 2;
var winter = [1 , 2];
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
var snow = 1, flakes = 2;
var winter = [1, 2];
```

<!--lint enable no-missing-blank-lines-->

## Inside Computed Properties

Use spacing inside of computed property brackets.

> ESLint: [computed-property-spacing][4]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
winter[snow ];
winter[ "snow"];
var flakes = {[ frost ]: cold};
winter[snow[ ice ]];
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```js
obj[snow];
obj["snow"];
var flakes = { [frost]: cold };
winter[snow[ice]];
```

## Around Function Signatures

No spaces between functions and their invocations.

> ESLint: [func-call-spacing][6]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
func ();
```

<!-- prettier-ignore -->
```js
func
();
```

⇡ **Correct** code for this rule:

```js
func();
```

<!--lint enable no-missing-blank-lines-->

## Inside Object Literal Properties

Use spacing between keys and values in object literal properties.

> ESLint: [key-spacing][8]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
var winter = { "snow" : 42 };
var arctic = { "ice":42 };
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
var winter = { "snow": 42 };
```

<!--lint enable no-missing-blank-lines-->

## Trailing At The End Of Lines

No trailing spaces at the end of lines.

> ESLint: [no-trailing-spaces][13]

## Multiple Empty Lines

No multiple empty lines, only allow one (1) newline at the end of files, and no newline at the beginning of files.
Also do not use multiple blank lines to pad code.

> ESLint: [no-multiple-empty-lines][12]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
var winter = 1;


var snow = 2;
```

<!-- prettier-ignore -->
```js
// 2+ newlines at end of file.
var winter = 1;
var snow = 2;


```

<!-- prettier-ignore -->
```js

// 1+ newline(s) at beginning of file.

var winter = 1;
var snow = 2;
```

<!-- prettier-ignore -->
```js
const snow = winter => {
  // code padded with 2+ newlines
  const snow = winter.getSnow();


  const frost = winter.getFrost();



  const ice = winter.getIce();
}
```

⇡ **Correct** code for this rule:

```js
var winter = 1;
var snow = 2;
```

```js
const snow = (winter) => {
  // code padded with 2+ newlines
  const snow = winter.getSnow();

  const frost = winter.getFrost();

  const ice = winter.getIce();
};
```

<!--lint enable no-missing-blank-lines-->

[1]: https://eslint.org/docs/latest/rules/array-bracket-spacing
[2]: https://eslint.org/docs/latest/rules/block-spacing
[3]: https://eslint.org/docs/latest/rules/comma-spacing
[4]: https://eslint.org/docs/latest/rules/computed-property-spacing
[5]: https://eslint.org/docs/latest/rules/eol-last
[6]: https://eslint.org/docs/latest/rules/func-call-spacing
[7]: https://eslint.org/docs/latest/rules/indent
[8]: https://eslint.org/docs/latest/rules/key-spacing
[9]: https://eslint.org/docs/latest/rules/keyword-spacing
[10]: https://eslint.org/docs/latest/rules/max-len
[11]: https://eslint.org/docs/latest/rules/newline-per-chained-call
[12]: https://eslint.org/docs/latest/rules/no-multiple-empty-lines
[13]: https://eslint.org/docs/latest/rules/no-trailing-spaces
[14]: https://eslint.org/docs/latest/rules/no-whitespace-before-property
[15]: https://eslint.org/docs/latest/rules/object-curly-spacing
[16]: https://eslint.org/docs/latest/rules/padded-blocks
[17]: https://eslint.org/docs/latest/rules/space-before-blocks
[18]: https://eslint.org/docs/latest/rules/space-in-parens
[19]: https://eslint.org/docs/latest/rules/space-infix-ops
[20]: https://en.wikipedia.org/wiki/Control_character
[21]: https://en.wikipedia.org/wiki/Newline
[22]: https://github.com/svengreb/styleguide-javascript/blob/main/rules/strings.md#line-length
