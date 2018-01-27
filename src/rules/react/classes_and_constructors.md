## `class` And Stateless

Do not use `React.createElement` unless initializing the app from a file that is not [JSX][rules-react-jsx-syntax]!

If the component has internal state and/or refs, use `class extends React.Component`. If no state or refs is used, prefer normal functions (not arrow functions) over classes.

> ESLint: [react/prefer-es6-class][eslint-react/prefer-es6-class] and [react/prefer-stateless-function][eslint-react/prefer-stateless-function]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
const Snow = React.createClass({
  render() {
    return <div>{this.state.snowflakes}</div>;
  }
});
```

No state or refs:

```jsx
class Snow extends React.Component {
  render() {
    return <div>{this.props.snowflakes}</div>;
  }
}
```

```jsx
// Relying on function name inference is discouraged.
const Snow = ({ snowflakes }) => (
  <div>{snowflakes}</div>
);
```

⇡ **Correct** code for this rule:

```jsx
class Snow extends React.Component {
  render() {
    return <div>{this.state.snowflakes}</div>;
  }
}
```

No state or refs:

```jsx
function Snow({ snowflakes }) {
  return <div>{snowflakes}</div>;
}
```

[rules-react-jsx-syntax]: index.md#jsx-syntax

[eslint-react/prefer-es6-class]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
[eslint-react/prefer-stateless-function]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
