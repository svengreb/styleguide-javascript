## Indentation

Indent props for readability and according to the [line length][rules-base-whitespace-maxlen].

> ESLint: [react/jsx-closing-bracket-location][eslint-react/jsx-closing-bracket-location] and [react/jsx-closing-tag-location][eslint-react/jsx-closing-tag-location]

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

Avoid using DOM [component props][react-docs-comp_and_props] names for different purposes. `props` are expected to be like `style` and `className` to mean one specific thing. Varying this API for a subset of the app makes the code less readable and less maintainable, and may cause bugs.

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

Always use [camelCase][wikipedia-camel_case] for prop names.

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

> ESLint: [react/jsx-boolean-value][eslint-react/jsx-boolean-value]

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

Avoid using an array index as `key` prop, always use a unique ID.

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
  snow.map(snowflake => <Snow {...snowflake} key={snowflake.id} />);
}
```

###### References

- [Index as a key is an anti-pattern][ref-medium-index_key_anti_pattern]

## Explicit Default Props

Always define explicit [`defaultProps`][react-docs-typechecking_proptypes] for all non-required props. [`propTypes`][npm-prop-types] are a form of documentation, and providing `defaultProps` means the reader of the code doesn't have to assume as much. In addition, it can mean that the code can omit certain type checks.

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
  snowflakes: PropTypes.node
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
  snowflakes: PropTypes.node
};
Snow.defaultProps = {
  season: "winter",
  snowflakes: null
};
```

## Spread Props

Use spread props sparingly. Otherwise unnecessary props can be passed down to components. For React v15.6.1 and older, this can result in passing down [invalid HTML attributes to the DOM][react-blog-dom_attr_react_16].

### Exceptions

#### Higher-Order Components

[HOCs][higher_order_components] that proxy down props and hoist [`propTypes`][npm-prop-types].

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

export const withSnow = ComposedComponent =>
  class WithSnow extends Component {
    static propTypes = {
      season: PropTypes.string,
      isFalling: PropTypes.bool
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

Spreading objects with known, explicit props. This can be particularly useful when testing React components with [Mocha][mocha]'s `beforeEach` construct.

```jsx
export default function Snow {
  const props = {
    season: "",
    isFalling: false
  }

  return (<div {...props} />);
}
```

Filter out unnecessary props when possible to help prevent bugs e.g. by using helper libraries like [prop-types-exact][npm-prop-types-exact].

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

If it is necessary to use [refs][react-docs-refs_and:dom], always use ref callbacks.

> ESLint: [react/no-string-refs][eslint-react/no-string-refs]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<Snow ref="snowRef" />
```

⇡ **Correct** code for this rule:

```jsx
<Snow
  ref={ref => {
    this.snowRef = ref;
  }}
/>
```

[eslint-react/jsx-boolean-value]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
[eslint-react/jsx-closing-bracket-location]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
[eslint-react/jsx-closing-tag-location]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
[eslint-react/no-string-refs]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
[higher_order_components]: higher_order_components.md
[mocha]: https://mochajs.org
[npm-prop-types-exact]: https://www.npmjs.com/package/prop-types-exact
[npm-prop-types]: https://www.npmjs.com/package/prop-types
[react-blog-dom_attr_react_16]: https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html
[react-docs-comp_and_props]: https://reactjs.org/docs/components-and-props.html
[react-docs-refs_and:dom]: https://reactjs.org/docs/refs-and-the-dom.html
[react-docs-typechecking_proptypes]: https://reactjs.org/docs/typechecking-with-proptypes.html
[ref-medium-index_key_anti_pattern]: https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
[rules-base-whitespace-maxlen]: ../whitespace.md#maximum-line-length
[wikipedia-camel_case]: https://en.wikipedia.org/wiki/Camel_case
