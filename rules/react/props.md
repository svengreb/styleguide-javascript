<!--lint disable no-duplicate-headings-->

## Indentation

Indent props for readability and according to the [line length][15].

> ESLint: [react/jsx-closing-bracket-location][2] and [react/jsx-closing-tag-location][3]

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```jsx
<Season name="winter"
        element="snow" />
```

<!--lint enable no-missing-blank-lines-->

⇡ **Correct** code for this rule:

```jsx
<Season name="winter" element="snow" />
```

```jsx
<Season name="winter" element="snow">
  <SnowFlake amount={20} />
</Season>
```

## Avoid DOM Names

Avoid using DOM [component props][12] names for different purposes. `props` are expected to be like `style` and `className` to mean one specific thing. Varying this API for a subset of the app makes the code less readable and less maintainable, and may cause bugs.

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<Component style="snow" />
```

```jsx
<Component className="snow" />
```

⇡ **Correct** code for this rule:

```jsx
<Component element="snow" />
```

## Capitalization

Always use [camelCase][16] for prop names.

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<Snow elementEffect="sparkling" frost_density={20} />
```

⇡ **Correct** code for this rule:

```jsx
<Snow elementEffect="sparkling" frostDensity={20} />
```

## Boolean Attributes Notation

Omit the value of the prop when it is explicitly `true`.

> ESLint: [react/jsx-boolean-value][1]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<Snow falling={true} />
```

⇡ **Correct** code for this rule:

```jsx
<Snow falling />
```

⇢ **Recommended** code for this rule:

```jsx
<Snow falling />
```

## No Index As `key`

Avoid using an array index as `key` prop, always use a unique ID. Not using a stable ID is an anti-pattern because it can negatively impact performance and cause issues with component state. Please see the [official React documentation about keys][7].

> ESLint: [react/no-array-index-key][4]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
{
  snow.map((snowflake, index) => <Snow {...snowflake} key={index} />);
}
```

⇡ **Correct** code for this rule:

```jsx
{
  snow.map((snowflake) => <Snow {...snowflake} key={snowflake.id} />);
}
```

###### References

- [React Docs · Learn · Describing the UI ·Rendering Lists][7]

## Explicit Default Props

Always define explicit [`defaultProps`][14] for all non-required props. [`propTypes`][10] are a form of documentation, and providing `defaultProps` means the reader of the code doesn't have to assume as much. In addition, it can mean that the code can omit certain type checks.

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
function Snow({ density, season, snowflakes }) {
  return (
    <div>
      {density}
      {season}
      {snowflakes}
    </div>
  );
}
Snow.propTypes = {
  density: PropTypes.number.isRequired,
  season: PropTypes.string,
  snowflakes: PropTypes.node,
};
```

⇡ **Correct** code for this rule:

```jsx
function Snow({ density, season, snowflakes }) {
  return (
    <div>
      {density}
      {season}
      {snowflakes}
    </div>
  );
}
Snow.propTypes = {
  density: PropTypes.number.isRequired,
  season: PropTypes.string,
  snowflakes: PropTypes.node,
};
Snow.defaultProps = {
  season: "winter",
  snowflakes: null,
};
```

## Spread Props

Use spread props sparingly. Otherwise unnecessary props can be passed down to components. For React v15.6.1 and older, this can result in passing down [invalid HTML attributes to the DOM][11].

### Exceptions

#### Higher-Order Components

[HOCs][6] that proxy down props and hoist [`propTypes`][10].

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

export const withSnow = (ComposedComponent) =>
  class WithSnow extends Component {
    static propTypes = {
      season: PropTypes.string,
      isFalling: PropTypes.bool,
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };
```

```jsx
function withSnow(ComposedComponent) {
  return class WithSnow extends React.Component {
    WithSnow.propTypes = {
      season: PropTypes.string,
      isFalling: PropTypes.bool
    };

    render() {
      return <ComposedComponent {...this.props} />
    }
  }
}
```

#### Spreading Explicitly Known Props

Spreading objects with known, explicit props. This can be particularly useful when testing React components with [8][]'s `beforeEach` construct.

```jsx
export default function Snow {
  const props = {
    season: "",
    isFalling: false
  }

  return (<div {...props} />);
}
```

Filter out unnecessary props when possible to help prevent bugs e.g. by using helper libraries like [prop-types-exact][9].

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
render() {
  const { irrelevantProp, ...relevantProps  } = this.props;
  return <ComposedComponent {...this.props} />
}
```

⇡ **Correct** code for this rule:

```jsx
render() {
  const { irrelevantProp, ...relevantProps  } = this.props;
  return <ComposedComponent {...relevantProps} />
}
```

## Ref Callbacks

If it is necessary to use [refs][13], always use ref callbacks.

> ESLint: [react/no-string-refs][5]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<Snow ref="snowRef" />
```

⇡ **Correct** code for this rule:

```jsx
<Snow
  ref={(ref) => {
    this.snowRef = ref;
  }}
/>
```

[1]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
[2]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
[3]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
[4]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
[5]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[6]: https://github.com/svengreb/styleguide-javascript/blob/main/rules/react/higher_order_components.md
[7]: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
[8]: https://mochajs.org
[9]: https://www.npmjs.com/package/prop-types-exact
[10]: https://www.npmjs.com/package/prop-types
[11]: https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
[12]: https://react.dev/learn/passing-props-to-a-component
[13]: https://react.dev/learn/referencing-values-with-refs
[14]: https://reactjs.org/docs/typechecking-with-proptypes.html
[15]: https://github.com/svengreb/styleguide-javascript/blob/main/rules/whitespace.md#maximum-line-length
[16]: https://en.wikipedia.org/wiki/Camel_case
