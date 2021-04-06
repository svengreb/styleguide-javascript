<!--lint disable no-duplicate-headings-->

## Descriptive

Avoid single letter names. Be descriptive with naming.

> ESLint: [id-length][eslint/id-length]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function s() {
  // ...
}
```

⇡ **Correct** code for this rule:

```js
function snow() {
  // ...
}
```

## camelCase

Use [camelCase][wikipedia-camel_case] when naming objects, functions, and instances.

> ESLint: [camelcase][eslint/camelcase]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const SNOwFlaakesssss = {};
const this_is_winter_season = {};
function s() {}
```

⇡ **Correct** code for this rule:

```js
const snowflakes = {};
const thisIsWinterSeason = {};
function snow() {}
```

## PascalCase

Use [PascalCase][wikipedia-pascal_case] when naming constructors and classes.

> ESLint: [new-cap][eslint/new-cap]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function snow(snowflakes) {
  this.density = snowflakes.density;
}

const snowball = new snow({
  density: 20,
});
```

⇡ **Correct** code for this rule:

```js
class Snow {
  constructor(snowflakes) {
    this.density = snowflakes.density;
  }
}

const snowball = new Snow({
  density: 20,
});
```

## Underscores

Do not use trailing or leading underscores. JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean _private_, in fact, these properties are fully public, and as such, are part of the public API contract. This convention might lead developers to wrongly think that a change won't count as breaking, or that tests aren't needed.

> ESLint: [no-underscore-dangle][eslint/no-underscore-dangle]

###### Examples

⇣ **Incorrect** code for this rule:

```js
this.__snow__ = "Snow";
this.frost_ = "Frost";
this._ice = "Ice";
```

⇡ **Correct** code for this rule:

```js
this.snow = "Snow";
this.frost = "Frost";
this.ice = "Ice";
```

In environments where [`WeakMap`][mdn-js-globj-wkmap] is available:

```js
this.snow = "Snow";
const flakes = new WeakMap();
flakes.set(this, "Snow");
```

## No `this` Self References

Don't save references to `this`. Use arrow functions or [Function#bind][mdn-js-globj-func-bind].

###### Examples

⇣ **Incorrect** code for this rule:

```js
function snow() {
  const self = this;
  return function () {
    console.log(self);
  };
}
```

⇡ **Correct** code for this rule:

```js
function snow() {
  return () => {
    console.log(this);
  };
}
```

## Filename Export Matching

A base filename should exactly match the name of its default export.

###### Examples

```js
// frost.js
class Frost {
  // ...
}
export default Frost;

// SnowFalling.js
export default function snowFalling() {
  return "sparkling";
}

// Seasons.js
export default function winter() {}

// snow_flakes.js
class SnowFlakes {
  // ...
}
export default SnowFlakes;
```

⇣ **Incorrect** code for this rule:

```js
// "PascalCase" import/export and "camelCase" filename.
import Frost from "./frost";

// "PascalCase" import/filename and "camelCase" export.
import SnowFalling from "./SnowFalling";

// "PascalCase" import/filename and "camelCase" export.
import Winter from "./Seasons";

// "PascalCase" import/export and "snake_case" filename.
import SnowFlakes from "./snow_flakes";

// Requiring the index file explicitly.
import seasons from "./seasons/index";
import index from "./seasons/index";
```

⇡ **Correct** code for this rule:

```js
// "PascalCase" export/import/filename
import Frost from "./Frost";

// "camelCase" export/import/filename
import snowFalling from "./snowFalling";

// "camelCase" export/import/directory name/implicit "index".
// Supports both "seasons.js" and "seasons/index.js".
import seasons from "./seasons";
```

## Function Default Export

Use [camelCase](#) when using `export default` for a function. The filename should be identical to your function's name.

###### Examples

⇣ **Incorrect** code for this rule:

```js
// snow_falling.js
function snowFalling() {
  // ...
}

export default SnowFalling;
```

⇡ **Correct** code for this rule:

```js
// snowFalling.js
function snowFalling() {
  // ...
}

export default snowFalling;
```

## Singleton Export

Use [PascalCase][] when exporting a constructor, class, singleton, function library or bare object.

###### Examples

⇣ **Incorrect** code for this rule:

```js
// Winter.js
const Winter = {
  elements: ["snow", "frost"],
};

export default winter;
```

⇡ **Correct** code for this rule:

```js
// Winter.js
const Winter = {
  elements: ["snow", "frost"],
};

export default Winter;
```

## Acronyms And Initialisms

[Acronyms and initialisms][wikipedia-acronym] should always be all uppercased or all lowercased. Names are for readability, not to appease a computer algorithm.

###### Examples

⇣ **Incorrect** code for this rule:

```js
import SmsContainer from "./containers/SmsContainer";
```

```js
const HttpRequests = [
  // ...
];
```

⇡ **Correct** code for this rule:

```js
import SMSContainer from "./containers/SMSContainer";
```

```js
const HTTPRequests = [
  // ...
];
```

```js
const httpRequests = [
  // ...
];
```

⇢ **Recommended** code for this rule:

```js
import TextMessageContainer from "./containers/TextMessageContainer";
```

```js
const requests = [
  // ...
];
```

## Constants

Use [UPPERCASE][wikipedia-letter_case] for constants if it

1. is exported
2. is a `const`
3. the consumer can trust it to never change

This is an additional tool to assist in situations where the consumer would be unsure if a variable might ever change. UPPERCASE_VARIABLES indicating that they (and its properties) doesn't change.

⇣ **Incorrect** code for this rule:

```js
const PRIVATE_VARIABLE = "should not be unnecessarily use uppercase naming within a file";
export let REASSIGNABLE_VARIABLE = "do not use let with uppercase variables";
```

⇡ **Correct** code for this rule:

```js
export const API_KEY = "snow";
```

```js
export const SNOW = {
  flakes: "falling",
};
```

[eslint/camelcase]: https://eslint.org/docs/rules/camelcase
[eslint/id-length]: https://eslint.org/docs/rules/id-length
[eslint/new-cap]: https://eslint.org/docs/rules/new-cap
[eslint/no-underscore-dangle]: https://eslint.org/docs/rules/no-underscore-dangle
[mdn-js-globj-func-bind]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
[mdn-js-globj-wkmap]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
[pascalcase]: #pascalcase
[wikipedia-acronym]: https://en.wikipedia.org/wiki/Acronym
[wikipedia-camel_case]: https://en.wikipedia.org/wiki/Camel_case
[wikipedia-letter_case]: https://en.wikipedia.org/wiki/Letter_case
[wikipedia-pascal_case]: https://en.wikipedia.org/wiki/PascalCase
