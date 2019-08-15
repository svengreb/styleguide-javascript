## No `new`

Use the literal syntax for object creation.

> ESLint: [no-new-object][eslint/no-new-object]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snow = new Object();
```

⇡ **Correct** code for this rule:

```js
const snow = {};
```

## ES6 Computed Properties

Use computed property names when creating objects with dynamic property names. They allow to define all the properties of an object in one place.

###### Examples

⇣ **Incorrect** code for this rule:

```js
function getSnow(snow) {
  return `a key named ${snow}`;
}

const obj = {
  id: 5,
  name: "South Pole"
};
obj[getSnow("enabled")] = true;
```

⇡ **Correct** code for this rule:

```js
function getSnow(snow) {
  return `a key named ${snow}`;
}

const obj = {
  id: 5,
  name: "South Pole",
  [getSnow("enabled")]: true
};
```

## ES6 Object Shorthand

Use object method shorthand.

> ESLint: [object-shorthand][eslint/object-shorthand]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snow = {
  flake: 1,

  addFlake: function(flake) {
    return snow.flake + flake;
  }
};
```

⇡ **Correct** code for this rule:

```js
const snow = {
  flake: 1,

  addFlake(flake) {
    return snow.flake + flake;
  }
};
```

## ES6 Object Concise

Use property value shorthand. It is shorter to write and descriptive.

> ESLint: [object-shorthand][eslint/object-shorthand]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const southPole = "South Pole";

const obj = {
  southPole: southPole
};
```

⇡ **Correct** code for this rule:

```js
const southPole = "South Pole";

const obj = {
  southPole
};
```

## Grouped Shorthand

Group shorthand properties at the beginning of object declarations. It is easier to tell which properties are using the shorthand.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const southPole = "South Pole";
const northPole = "North Pole";

const obj = {
  floatingIce: 1,
  northPole,
  penguins: 2,
  southPole
};
```

⇡ **Correct** code for this rule:

```js
const southPole = "South Pole";
const northPole = "North Pole";

const obj = {
  northPole,
  southPole,
  floatingIce: 1,
  penguins: 2
};
```

## Quoted Properties

Only quote properties that are invalid identifiers. In general we consider it subjectively easier to read. It improves syntax highlighting and is also more easily optimized by many JS engines.

> ESLint: [quote-props][eslint/quote-props]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const obj = {
  "snow": 1,
  "ice": 2
  "frost-wind": 3
};
```

⇡ **Correct** code for this rule:

```js
const obj = {
  snow: 1,
  ice: 2,
  "frost-wind": 3
};
```

## Prototype Builtins

Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`. These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object `(Object.create(null)`).

###### Examples

⇣ **Incorrect** code for this rule:

```js
console.log(object.hasOwnProperty(key));
```

⇡ **Correct** code for this rule:

```js
console.log(Object.prototype.hasOwnProperty.call(object, key));
```

⇢ **Recommended** code for this rule:

```js
// Cache the lookup once, in module scope.
const hasProp = Object.prototype.hasOwnProperty;

console.log(hasProp.call(object, key));
```

Using the [has][npm-pkg-has] npm package:

```js
import has from "has";

console.log(has.call(object, key));
```

## Rest Spread

Prefer the object spread operator over [`Object.assign`][mdn-object-assign] to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

###### Examples

↯ **Critical incorrect** code for this rule:

```js
const original = {
  snow: 1,
  ice: 2
};
// Both statements mutate "original"!
const copy = Object.assign(original, { frost: 3 });
delete copy.snow; // so does this
```

⇣ **Incorrect** code for this rule:

```js
const original = { snow: 1, ice: 2 };
const copy = Object.assign({}, original, { frost: 3 });
console.log(copy); // { snow: 1, ice: 2, frost: 3 }
```

⇡ **Correct** code for this rule:

```js
const original = { snow: 1, ice: 2 };
const copy = { ...original, frost: 3 };
console.log(copy); // { snow: 1, ice: 2, frost: 3 }

const { snow, ...noSnow } = copy;
console.log(noSnow); // { ice: 2, frost: 3 }
```

⇢ **Recommended** code for this rule:

```js
// Cache the lookup once, in module scope.
const has = Object.prototype.hasOwnProperty;

console.log(has.call(object, key));
```

Using the [has][npm-pkg-has] npm package:

```js
import has from "has";

console.log(has.call(object, key));
```

[eslint/no-new-object]: https://eslint.org/docs/rules/no-new-object
[eslint/object-shorthand]: https://eslint.org/docs/rules/object-shorthand
[eslint/quote-props]: https://eslint.org/docs/rules/quote-props
[mdn-object-assign]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
[npm-pkg-has]: https://www.npmjs.com/package/has
