<p align="center">
  <picture>
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="12%" />
  </picture>
</p>

<p align="center">This section contains specific rules for <a href="https://react.dev" target="_blank">React</a></p>

## JSX Syntax

Always use [JSX syntax][react-docs-jsx].

## No Mixins

**Do not use mixins!**

Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules. Facebook announced that [mixins are considered to be harmful][react-blog-mixins_harmful].

## No `isMounted`

**Do not use `isMounted`!**

[`isMounted` is an anti-pattern][react-blog-ismounted_anti_pattern], it is not available when using ES6 classes, and is going to be officially deprecated.

[react-blog-ismounted_anti_pattern]: https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
[react-blog-mixins_harmful]: https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html
[react-docs-jsx]: https://reactjs.org/docs/introducing-jsx.html
