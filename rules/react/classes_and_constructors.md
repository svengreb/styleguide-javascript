## `class` And Stateless

Do not use `React.createElement` unless initializing the app from a file that is not [JSX][3]!

If the component has internal state and/or refs, use `class extends React.Component`. If no state or refs is used, prefer normal functions (not arrow functions) over classes.

> ESLint: [react/prefer-es6-class][1] and [react/prefer-stateless-function][2]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
const Snow = React.createClass({
  render() {
    return <div>{this.state.snowflakes}</div>;
  },
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

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```jsx
// Relying on function name inference is discouraged.
const Snow = ({ snowflakes }) => (
  <div>{snowflakes}</div>
);
```

<!--lint enable no-missing-blank-lines-->

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

[1]: https://github.com/jsx-eslint/eslint-plugin-react/blob/main/docs/rules/prefer-es6-class.md
[2]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
[3]: https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/index.md#jsx-syntax
