## Component Methods And Properties

When creating React components it is more convenient to always follow the same organization for methods and properties order to easier find lifecycle methods, event handlers, static properties and `render` related elements:

1. Static methods and properties:
   1.1. Instance variables
2. Lifecycle methods and properties:
   2.1. `displayName`
   2.2. `propTypes`
   2.3. `contextTypes`
   2.7. `childContextTypes`
   2.5. `statics`
   2.6. `defaultProps`
   2.7. Optional `static` methods
   2.8. `constructor` (classes)
   2.9. `getDefaultProps`
   2.10. `getInitialState`
   2.11. `state`
   2.12. `getChildContext`
   2.13. `componentWillMount`
   2.14. `componentDidMount`
   2.15. `componentWillReceiveProps`
   2.16. `shouldComponentUpdate`
   2.17. `componentWillUpdate`
   2.18. `componentDidUpdate`
   2.19. `componentWillUnmount`
3. Custom and instance methods:
   3.1. _Click and Event Handlers_ like e.g. `onClickSubmit()` or `onChangeValue()`
   3.2. _Getter and Setter_ methods for `render` like e.g. `getSelectReason()` or `getFooterContent()`
   3.3. Any custom method like e.g. `calculateSnowflakes()`
   3.4. Optional `render` methods like `renderSnowflakes()` or `renderWinterForest()`
4. `render`

> ESLint: [react/sort-comp][1]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  density: PropTypes.number.isRequired,
  season: PropTypes.string,
};

class Snow extends React.Component {
  constructor() {
    super();
    this.state = {
      // ...
    };
  }

  componentWillReceiveProps() {
    // ...
  }

  componentDidMount() {
    // ...
  }

  renderSnowflakes() {
    // ...
  }

  calculateDensity() {
    // ...
  }

  onChangeSeason() {
    // ...
  }

  static isFalling() {
    return true;
  }

  static defaultProps = {
    season: "Winter",
  };

  render() {
    return <div onClick={this.onChangeSeason.bind(this)}>{this.props.season}</div>;
  }
}

Snow.propTypes = propTypes;

export default Snow;
```

⇡ **Correct** code for this rule:

```jsx
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Snow extends React.Component {
  static propTypes = {
    density: PropTypes.number.isRequired,
    season: PropTypes.string,
  };

  static defaultProps = {
    season: "Winter",
  };

  static isFalling() {
    return true;
  }

  constructor() {
    super();
    this.state = {
      // ...
    };
  }

  componentDidMount() {
    // ...
  }

  componentWillReceiveProps() {
    // ...
  }

  onChangeSeason = () => {
    // ...
  };

  calculateDensity = () => {
    // ...
  };

  renderSnowflakes = () => {
    // ...
  };

  render() {
    return <div onClick={this.onChangeSeason}>{this.props.season}</div>;
  }
}
```

###### References

- [React on ES6+][2]

[1]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
[2]: https://babeljs.io/blog/2015/07/07/react-on-es6-plus
