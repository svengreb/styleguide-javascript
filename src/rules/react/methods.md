## Prefer Arrow Functions Over `bind`

[Arrow functions][mdn-arrow_functions] can be an attractive alternative to function expressions for callbacks or function arguments. They are automatically bound to their surrounding scope/context. This provides an alternative to the pre-ES6 standard of explicitly binding function expressions to achieve similar behavior.

Additionally, arrow functions are

* less verbose, and easier to reason about which improves the readability of the code.
* bound lexically regardless of where or when they are invoked.

Anyway, please note that there are some differences between arrow functions and binding:

* **Arrow functions are always anonymous**, which means e.g. it is not possible to reliably call them recursively since there is no reliable lexical name to use.
* **Arrow functions actually create lexical bindings for `this`, `super`, and `arguments`**. Only `this` is bound by `.bind()`.
**Arrow functions cannot be used in `new` expressions**, while `.bind()` bound functions can.

> ESLint: [prefer-arrow-callback][eslint/prefer-arrow-callback]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
XXX
```

⇡ **Correct** code for this rule:

```jsx
XXX
```

###### References

* [Differences between `bind()` and fat arrow functions (GitHub issue comment)][ref-gh-getify/you-dont-know-js/513_comment]

## No Binding Or Arrow Functions In Render

Do not use `.bind()` or [arrow functions][mdn-arrow_functions] in `render`. A `bind` call or arrow function in a JSX prop will create a brand new function on every single render which is bad for performance, as it will result in the garbage collector being invoked way more than is necessary. It may also cause unnecessary re-renders if a brand new function is passed as a prop to a component that uses reference equality check on the prop to determine if it should update.

> ESLint: [react/jsx-no-bind][eslint-react/jsx-no-bind]

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
  }

  render() {
    return <div onClick={this.onSnowflakeClick} />;
  }
}
```

###### References

* [Why arrow functions and bind in React's Render are problematic][ref-medium-arrow_funcs_bind_render]
* [Arrow functions vs. bind()][ref-2ality-arrow_func_vs_bind]

## No Underscore Prefix

Do not use underscore prefix for internal methods of a React component. Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of the intentions, adding underscore prefixes to properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues #1024, and #490 for a more in-depth discussion.

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

> ESLint: [react/require-render-return][eslint-react/require-render-return]

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

[eslint/prefer-arrow-callback]: https://eslint.org/docs/rules/prefer-arrow-callback
[eslint-react/require-render-return]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
[eslint-react/jsx-no-bind]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
[mdn-arrow_functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[ref-medium-arrow_funcs_bind_render]: https://medium.freecodecamp.org/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36
[ref-2ality-arrow_func_vs_bind]: http://2ality.com/2016/02/arrow-functions-vs-bind.html
[ref-gh-getify/you-dont-know-js/513_comment]: https://github.com/getify/You-Dont-Know-JS/issues/513#issuecomment-130300480
