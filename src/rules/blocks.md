## Braces

Use braces with all multi-line blocks.

> ESLint: [nonblock-statement-body-position][eslint-nonblock-statement-body-position]

###### Examples

⇣ **Incorrect** code for this rule:

```js
if (snow)
  return false;
```

```js
function snow() { return false; }
```

⇡ **Correct** code for this rule:

```js
if (snow) return false;
```

```js
if (snow) {
  return false;
}
```

```js
function snow() {
  return false;
}
```

## Brace Style

When using multi-line blocks with `if` and `else`, put the `else` on the same line as the `if` block's closing brace.

> ESLint: [brace-style][eslint-brace-style]

###### Examples

⇣ **Incorrect** code for this rule:

```js
if (winter) {
  snow();
  frost();
}
else {
  sunshine();
}
```

⇡ **Correct** code for this rule:

```js
if (winter) {
  snow();
  frost();
} else {
  sunshine();
}
```

## No `else` Return

If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks.

> ESLint: [no-else-return][eslint-no-else-return]

###### Examples

⇣ **Incorrect** code for this rule:

```js
function winter() {
  if (snow) {
    return snow;
  } else {
    return frost;
  }
}
```

```js
function winter() {
  if (snow) {
    return snow;
  } else if (frost) {
    return frost;
  }
}
```

```js
function winter() {
  if (snow) {
    return snow;
  } else {
    if (frost) {
      return frost;
    }
  }
}
```

⇡ **Correct** code for this rule:

```js
function winter() {
  if (snow) {
    return snow;
  }

  return frost;
}
```

```js
function winter() {
  if (snow) {
    return snow;
  }

  if (frost) {
    return frost;
  }
}
```

```js
function winter(snow) {
  if (snow) {
    if (ice) {
      return frost;
    }
  } else {
    return ice;
  }
}
```

[eslint-brace-style]: https://eslint.org/docs/rules/brace-style
[eslint-no-else-return]: https://eslint.org/docs/rules/no-else-return
[eslint-nonblock-statement-body-position]: https://eslint.org/docs/rules/nonblock-statement-body-position
