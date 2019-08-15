## `img` Alternate Text

Always include an `alt` prop on `<img>` tags. If the image is presentational, `alt` can be an empty string or the `<img>` must have `role="presentation"`.

> ESLint: [jsx-a11y/alt-text][eslint-jsx-a11y/alt-text]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<img src="snow.png" />
```

⇡ **Correct** code for this rule:

```jsx
<img src="snow.png" alt="Falling snow" />
```

```jsx
<img src="snow.png" alt="" />
```

```jsx
<img src="snow.png" role="presentation" />
```

## No Redundant `img` Alternate Text

Do not use words like "image", "photo", or "picture" in `<img>` `alt` props. Screenreaders already announce `img` elements as images, so there is no need to include this information in the `alt` text.

> ESLint: [jsx-a11y/img-redundant-alt][eslint-jsx-a11y/img-redundant-alt]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<img src="snow.png" alt="Picture of falling snow" />
```

⇡ **Correct** code for this rule:

```jsx
<img src="snow.png" alt="Falling snow" />
```

## Valid ARIA Roles

Use only valid, non-abstract [ARIA roles][ref-w3-aria_roles].

> ESLint: [jsx-a11y/aria-role][eslint-jsx-a11y/aria-role]

###### Examples

⇣ **Incorrect** code for this rule:

Invalid ARIA role:

```jsx
<div role="datepicker" />
```

Abstract ARIA role:

```jsx
<div role="range" />
```

⇡ **Correct** code for this rule:

```jsx
<div role="button" />
```

## No `accessKey`

Do not use `accessKey` on elements. Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.

> ESLint: [jsx-a11y/no-access-key][eslint-jsx-a11y/no-access-key]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<div accessKey="h" />
```

⇡ **Correct** code for this rule:

```jsx
<div />
```

[eslint-jsx-a11y/alt-text]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
[eslint-jsx-a11y/aria-role]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
[eslint-jsx-a11y/img-redundant-alt]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
[eslint-jsx-a11y/no-access-key]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
[ref-w3-aria_roles]: https://www.w3.org/TR/wai-aria/roles#role_definition
