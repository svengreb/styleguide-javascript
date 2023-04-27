<!--lint disable no-duplicate-headings-->

## One Component Per File

Only include one [React component][4] per file. However, multiple [stateless functions or pure components][5] are allowed per file.

> ESLint: [react/no-multi-comp][3]

## JSX File Extension

Always use `.jsx` file extension for files with [JSX syntax][6].

> ESLint: [react/jsx-filename-extension][1]

## File And Component Folder

The name of the file and the folder of components should exactly (case sensitive) match the name of the main (exported) component using [PascalCase][8].

> ESLint: [react/jsx-pascal-case][2]

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

Use [PascalCase][8] for components and [camelCase][7] for their instances.

> ESLint: [react/jsx-pascal-case][2]

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

[1]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
[2]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
[3]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless
[4]: https://react.dev/reference/react/Component
[5]: https://react.dev/learn/sharing-state-between-components
[6]: https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/index.md#jsx-syntax
[7]: https://en.wikipedia.org/wiki/Camel_case
[8]: https://en.wikipedia.org/wiki/PascalCase
