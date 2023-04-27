<!--lint disable no-duplicate-headings-->

## Prefer Arrow Functions Over `bind`

[Arrow functions][6] can be an attractive alternative to function expressions for callbacks or function arguments. They are automatically bound to their surrounding scope/context. This provides an alternative to the pre-ES6 standard of explicitly binding function expressions to achieve similar behavior.

Additionally, arrow functions are

- less verbose, and easier to reason about which improves the readability of the code.
- bound lexically regardless of where or when they are invoked.

Anyway, please note that there are some differences between arrow functions and binding:

- **Arrow functions are always anonymous**, which means e.g. it is not possible to reliably call them recursively since there is no reliable lexical name to use.
- **Arrow functions actually create lexical bindings for `this`, `super`, and `arguments`**. Only `this` is bound by `.bind()`.
  **Arrow functions cannot be used in `new` expressions**, while `.bind()` bound functions can.

> ESLint: [prefer-arrow-callback][5]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
snow(function (flake) {
  return flake;
});
```

```jsx
snow(
  function () {
    return this.flake;
  }.bind(this)
);
```

⇡ **Correct** code for this rule:

```jsx
snow((flake) => flake);
```

###### References

- [Differences between `bind()` and fat arrow functions (GitHub issue comment)][11]

## No Binding Or Arrow Functions In Render

Do not use `.bind()` or [arrow functions][6] in `render`. A `bind` call or arrow function in a JSX prop will create a brand new function on every single render which is bad for performance, as it will result in the garbage collector being invoked way more than is necessary. It may also cause unnecessary re-renders if a brand new function is passed as a prop to a component that uses reference equality check on the prop to determine if it should update.

Note when used in class fields, it makes them [challenging to test and debug, and can negatively impact performance][8], and because conceptually, class fields are for data, not logic.

Arrow functions are also good to close over local variables. It is handy when used to pass additional data to an event handler. Although, make sure they [do not massively hurt performance][10], in particular when passed to custom components that might be `PureComponents`, because they will trigger a possibly needless re-render every time.

> ESLint: [react/jsx-no-bind][3]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
class Snow extends React.Component {
  onSnowflakeClick() {
    // ...
  }

  render() {
    return <div onClick={this.onSnowflakeClick.bind(this)} />;
  }
}
```

⇡ **Correct** code for this rule:

```jsx
class Snow extends React.Component {
  constructor(props) {
    super(props);

    this.onSnowflakeClick = this.onSnowflakeClick.bind(this);
  }

  onSnowflakeClick() {
    // ...
  }

  render() {
    return <div onClick={this.onSnowflakeClick} />;
  }
}
```

⇢ **Recommended** code for this rule:

```jsx
class Snow extends React.Component {
  onSnowflakeClick = () => {
    // ...
  };

  render() {
    return <div onClick={this.onSnowflakeClick} />;
  }
}
```

###### References

- [Arrow Functions in Class Properties Might Not Be As Great As We Think][8]
- [Why arrow functions and bind in React’s Render are problematic][7]
- [Arrow functions vs. bind()][9]

## No Underscore Prefix

Do not use underscore prefix for internal methods of a React component. Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of the intentions, adding underscore prefixes to properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues [1][] and [2][] for a more in-depth discussion.

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
class Snow extends React.Component {
  _onFalling() {
    // ...
  }
}
```

⇡ **Correct** code for this rule:

```jsx
class Snow extends React.Component {
  onFalling() {
    // ...
  }
}
```

## Render Return

Be sure to return a value in the `render` function.

> ESLint: [react/require-render-return][4]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
render() {
  (<div />);
}
```

⇡ **Correct** code for this rule:

```jsx
render() {
  return (<div />);
}
```

[1]: https://github.com/airbnb/javascript/issues/1024
[2]: https://github.com/airbnb/javascript/issues/490
[3]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
[4]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[5]: https://eslint.org/docs/latest/rules/prefer-arrow-callback
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[7]: https://www.freecodecamp.org/news/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36
[8]: https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1
[9]: https://2ality.com/2016/02/arrow-functions-vs-bind.html
[10]: https://bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers
[11]: https://github.com/getify/You-Dont-Know-JS/issues/513#issuecomment-130300480
