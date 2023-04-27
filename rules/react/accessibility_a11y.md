<!--lint disable no-duplicate-headings-->

## `img` Alternate Text

Always include an `alt` prop on `<img>` tags. If the image is presentational, `alt` can be an empty string or the `<img>` must have `role="presentation"`.

> ESLint: [jsx-a11y/alt-text][1]

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

Do not use words like "image", "photo", or "picture" in `<img>` `alt` props. Screen readers already announce `img` elements as images, so there is no need to include this information in the `alt` text.

> ESLint: [jsx-a11y/img-redundant-alt][3]

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

Use only valid, non-abstract [ARIA roles][5].

> ESLint: [jsx-a11y/aria-role][2]

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

Do not use `accessKey` on elements. Inconsistencies between keyboard shortcuts and keyboard commands used by people using screen readers and keyboards complicate accessibility.

> ESLint: [jsx-a11y/no-access-key][4]

###### Examples

⇣ **Incorrect** code for this rule:

```jsx
<div accessKey="h" />
```

⇡ **Correct** code for this rule:

```jsx
<div />
```

[1]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
[2]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
[3]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
[4]: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
[5]: https://www.w3.org/TR/wai-aria/#usage_intro
