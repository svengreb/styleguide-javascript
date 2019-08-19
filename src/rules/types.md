## Primitives

Work directly on the value when accessing a primitive type.

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`

###### Examples

⇡ **Correct** code for this rule:

```js
const snow = 1;
let ice = snow;

ice = 9;

console.log(snow, ice); // 1 9
```

Symbols cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don't support them natively.

## Complex

Work on a reference to the value when accessing a complex type.

- `object`
- `array`
- `function`

###### Example

```js
const snow = [1, 2];
const ice = snow;

ice[0] = 9;

console.log(snow[0], ice[0]); // 9 9
```
