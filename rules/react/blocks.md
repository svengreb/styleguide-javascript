## Wrap Multiline JSX

Prevent missing parentheses around multiline JSX when they span more than one line. This prevents syntax errors and improves the readability and convenience.

> ESLint:[react/jsx-wrap-multilines][1]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
render() {
  return <Snow season="winter">
           <SnowFlakes density={20} />
         </Snow>;
}
```

⇡ **Correct** code for this rule:

```jsx
render() {
  return (
    <Snow season="winter">
      <SnowFlakes density={20} />
    </Snow>
  );
}
```

Only omit parentheses for single line JSX:

```jsx
render() {
  const snowFlakes = <SnowFlakes density={20} />;
  return <Snow>{snowFlakes}</Snow>;
}
```

[1]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
