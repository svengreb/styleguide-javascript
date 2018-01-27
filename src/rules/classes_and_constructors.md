## Prefer `class`

Always use `class`. Avoid manipulating `prototype` directly. The `class` syntax is more concise and easier to reason about.

###### Examples

⇣ **Incorrect** code for this rule:

```js
function Winter(elements = []) {
  this.elementQueue = [...elements];
}

Winter.prototype.pop = function () {
  const element = this.elementQueue[0];
  this.elementQueue.splice(0, 1);
  return element;
};
```

⇡ **Correct** code for this rule:

```js
class Winter {
  constructor(elements = []) {
    this.elementQueue = [...elements];
  }
  pop() {
    const element = this.elementQueue[0];
    this.elementQueue.splice(0, 1);
    return element;
  }
}
```

## Inheritance

Use `extends` for inheritance. It is a built-in way to inherit prototype functionality without breaking `instanceof`.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const inherits = require("inherits");
function SparklingWinter(elements) {
  Winter.apply(this, elements);
}
inherits(SparklingWinter, Winter);
SparklingWinter.prototype.sparkle = function () {
  return this.sparkles[0];
};
```

⇡ **Correct** code for this rule:

```js
class SparklingWinter extends Winter {
  sparkle() {
    return this.sparkles[0];
  }
}
```

## Chaining

Methods can return `this` to help with method chaining.

###### Examples

⇣ **Incorrect** code for this rule:

```js
Snow.prototype.fall = function () {
  this.falling = true;
  return true;
};

Snow.prototype.setFlakeDensity = function (density) {
  this.flakeDensity = density;
};

const snow = new Snow();
snow.fall(); // true
snow.setFlakeDensity(20); // undefined
```

⇡ **Correct** code for this rule:

```js
class Snow {
  fall() {
    this.falling = true;
    return this;
  }

  setFlakeDensity(density) {
    this.flakeDensity = density;
    return this;
  }
}

const snow = new Snow();

snow.fall()
  .setFlakeDensity(20);
```

## Custom String Representation

When implementing a custom `toString()` function, make sure it works successfully and causes no side effects.

###### Examples

⇡ **Correct** code for this rule:

```js
class Snow {
  constructor(conditions = {}) {
    this.flakeDensity = conditions.flakeDensity || 0;
  }

  getFlakeDensity() {
    return this.flakeDensity;
  }

  toString() {
    return `Flake Density: ${this.getFlakeDensity()}`;
  }
}
```

## Unnecessary Default Constructor

Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary.

> ESLint: [no-useless-constructor][eslint/no-useless-constructor]

###### Examples

⇣ **Incorrect** code for this rule:

```js
class Snow {
  constructor() {}

  getFlakeDensity() {
    return this.flakeDensity;
  }
}
```

```js
class Snowball extends Snow {
  constructor(...args) {
    super(...args);
  }
}
```

⇡ **Correct** code for this rule:

```js
class Snowball extends Snow {
  constructor(...args) {
    super(...args);
    this.radius = 4.2;
  }
}
```

## No Duplicate Members

Avoid duplicate class members. Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.

> ESLint: [no-dupe-class-members][eslint/no-dupe-class-members]

###### Examples

⇣ **Incorrect** code for this rule:

```js
class Snow {
  fall() { return true; }
  fall() { return false; }
}
```

⇡ **Correct** code for this rule:

```js
class Snow {
  fall() { return true; }
}
```

```js
class Snow {
  fall() { return false; }
}
```

[eslint/no-dupe-class-members]: https://eslint.org/docs/rules/no-dupe-class-members
[eslint/no-useless-constructor]: https://eslint.org/docs/rules/no-useless-constructor
