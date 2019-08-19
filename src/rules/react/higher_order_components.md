## Display Name

Use a composite of the [higher-order component][react-docs-hoc]'s (HOC) name and the passed-in component's name as the `displayName` on the generated component. A component's `displayName` may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps to better understand and debug the code.

###### Examples

A higher-order component `withSnow()`, when passed a component `Winter` should produce a component with a `displayName` of `withSnow(Winter)`.

⇣ **Incorrect** code for this rule:

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

export const withSnow = ComposedComponent =>
  class WithSnow extends Component {
    constructor(props) {
      super();
    }

    static propTypes = {
      children: PropTypes.any
    };

    static defaultProps = {};

    render() {
      const { children, ...passThroughProps } = this.props;
      return <ComposedComponent {...passThroughProps}>{children}</ComposedComponent>;
    }
  };
```

⇡ **Correct** code for this rule:

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

export const withSnow = ComposedComponent =>
  class WithSnow extends Component {
    constructor(props) {
      super();
    }

    static displayName = `WithSnow(${ComposedComponent.displayName || ComposedComponent.name || Component.name})`;

    static propTypes = {
      children: PropTypes.any
    };

    static defaultProps = {};

    render() {
      const { children, ...passThroughProps } = this.props;
      return <ComposedComponent {...passThroughProps}>{children}</ComposedComponent>;
    }
  };
```

[react-docs-hoc]: https://reactjs.org/docs/higher-order-components.html
