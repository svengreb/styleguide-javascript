<!--lint disable no-duplicate-headings-->

## One Component Per File

Only include one [React component][react-docs-component] per file. However, multiple [stateless functions or pure components][react-docs-stateless_functions] are allowed per file.

> ESLint: [react/no-multi-comp][eslint-react/no-multi-comp]

## JSX File Extension

Always use `.jsx` file extension for files with [JSX syntax][rules-react-jsx-syntax].

> ESLint: [react/jsx-filename-extension][eslint-react/jsx-filename-extension]

## File And Component Folder

The name of the file and the folder of components should exactly (case sensitive) match the name of the main (exported) component using [PascalCase][wikipedia-pascal_case].

> ESLint: [react/jsx-pascal-case][eslint-react/jsx-pascal-case]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
// snow/Snow.jsx
export default class Snow extends React.Component {
  // ...
}
```

```jsx
// Snow/snow.jsx
export default class Snow extends React.Component {
  // ...
}
```

```jsx
// Snow/Frost.jsx
export default class Snow extends React.Component {
  // ...
}
```

⇡ **Correct** code for this rule:

```jsx
// Snow/Snow.jsx
export default class Snow extends React.Component {
  // ...
}
```

## References

Use [PascalCase][wikipedia-pascal_case] for components and [camelCase][wikipedia-camel_case] for their instances.

> ESLint: [react/jsx-pascal-case][eslint-react/jsx-pascal-case]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
import snowFlake from "./SnowFlake";
```

```jsx
const SnowFlake = <SnowFlake />;
```

⇡ **Correct** code for this rule:

```jsx
import SnowFlake from "./SnowFlake";
```

```jsx
const snowFlake = <SnowFlake />;
```

[eslint-react/jsx-filename-extension]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
[eslint-react/jsx-pascal-case]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
[eslint-react/no-multi-comp]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless
[react-docs-component]: https://reactjs.org/docs/react-component.html
[react-docs-stateless_functions]: https://reactjs.org/docs/components-and-props.html#stateless-functions
[rules-react-jsx-syntax]: index.md#jsx-syntax
[wikipedia-camel_case]: https://en.wikipedia.org/wiki/Camel_case
[wikipedia-pascal_case]: https://en.wikipedia.org/wiki/PascalCase
