<!--lint disable no-duplicate-headings-->

## Ignore Properties

Accessor functions for properties are not required.

## Getter And Setter

Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test and maintain. Instead, if accessor functions are used, implement custom methods with `get` and `set` prefixes.

###### Examples

⇣ **Incorrect** code for this rule:

```js
class Winter {
  get snowflakes() {
    // ...
  }

  set snowflakes(snowflakes) {
    // ...
  }
}
```

⇡ **Correct** code for this rule:

```js
class Winter {
  getSnowflakes() {
    // ...
  }

  setSnowflakes(snowflakes) {
    // ...
  }
}
```

Make sure to be consistent:

```js
class Winter {
  constructor(elements = {}) {
    const snowflakes = elements.snowflakes || 0;
    this.set("snowflakes", snowflakes);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}
```

## Boolean Prefix

If the property/method is a boolean, use a `is` or `has` prefix.

###### Examples

⇣ **Incorrect** code for this rule:

```js
if (!winter.snowflakes()) {
  return false;
}
```

⇡ **Correct** code for this rule:

```js
if (!winter.hasSnowflakes()) {
  return false;
}
```
