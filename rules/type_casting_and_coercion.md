<!--lint disable no-duplicate-headings-->

## Explicitness

Perform type coercion at the beginning of the statement.

## No Primitive Wrapper Instances

> ESlint: [no-new-wrappers][1]

### Strings

###### Examples

⇣ **Incorrect** code for this rule:

```js
this.snowflakes = 20;

// Type of "snowflakes" is "object" not "string".
const snow = new String(this.snowflakes);
```

```js
this.snowflakes = 20;

// Invokes "this.reviewScore.valueOf()".
const snow = this.snowflakes + "";
```

```js
this.snowflakes = 20;

// Not guaranteed to return a string.
const snow = this.snowflakes.toString();
```

⇡ **Correct** code for this rule:

```js
this.snowflakes = 20;
const snow = String(this.snowflakes);
```

### Numbers

Use `Number` for type casting and `parseInt` always with a radix for parsing strings.

> ESLint: [radix][2] and [no-new-wrappers][1]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowflakes = "4";
const snow = new Number(snowflakes);
```

```js
const snowflakes = "4";
const snow = +snowflakes;
```

```js
const snowflakes = "4";
const snow = snowflakes >> 0;
```

```js
const snowflakes = "4";
const snow = parseInt(snowflakes);
```

⇡ **Correct** code for this rule:

```js
const snowflakes = "4";
const snow = Number(snowflakes);
```

```js
const snowflakes = "4";
const snow = parseInt(snowflakes, 10);
```

## Booleans

> ESLint: [no-new-wrappers][1]

###### Examples

⇣ **Incorrect** code for this rule:

```js
const snowflakes = 0;
const hasFlakes = new Boolean(snowflakes);
```

⇡ **Correct** code for this rule:

```js
const snowflakes = 0;
const hasFlakes = Boolean(snowflakes);
```

⇢ **Recommended** code for this rule:

```js
const snowflakes = 0;
const hasFlakes = !!snowflakes;
```

## Bitshift

Be careful when using bitshift operations! Numbers are represented as [64-bit values][4], but bitshift operations always [return a 32-bit integer][3]. Bitshift can lead to unexpected behavior for integer values larger than 32 bits. The largest signed 32-bit integer is `2147483647` (2,147,483,647).

```js
2147483647 >> 0; // 2147483647
2147483648 >> 0; // -2147483648
2147483649 >> 0; // -2147483647
```

When using Bitshift instead of `parseInt` for performance reasons, make sure to clarify and describe the design decision in the code documentation.

```js
/**
 * This assignment has been performance optimized.
 * It uses bitshifting instead of casting via the "parseInt" method.
 * Bitshifting the String to coerce it to a Number resulted in a performance boost of almost 90%.
 */
const snow = snowflakes >> 0;
```

###### References

- [StackOverflow: "Bitshift in JavaScript"][5]

[1]: https://eslint.org/docs/latest/rules/no-new-wrappers
[2]: https://eslint.org/docs/latest/rules/radix
[3]: https://es5.github.io/#x11.7
[4]: https://es5.github.io/#x4.3.19
[5]: https://stackoverflow.com/questions/2373791/bitshift-in-javascript
