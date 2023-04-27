<!--lint disable no-duplicate-headings-->

## Braces

Use braces with all multi-line blocks.

> ESLint: [nonblock-statement-body-position][3]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
if (snow)
  return false;
```

<!-- prettier-ignore -->
```js
function snow() { return false; }
```

<!--lint enable no-missing-blank-lines-->

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

> ESLint: [brace-style][1]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
if (winter) {
  snow();
  frost();
}
else {
  sunshine();
}
```

<!--lint enable no-missing-blank-lines-->

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

> ESLint: [no-else-return][2]

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

[1]: https://eslint.org/docs/latest/rules/brace-style
[2]: https://eslint.org/docs/latest/rules/no-else-return
[3]: https://eslint.org/docs/latest/rules/nonblock-statement-body-position
