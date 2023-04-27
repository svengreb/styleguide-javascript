<!--lint disable no-duplicate-headings-->

## Use `import` and `export`

Always use modules (`import`/`export`) over a non-standard module system because modules will become the standard. If necessary it is always possible to transpile to another module system afterwards.

###### Examples

⇣ **Incorrect** code for this rule:

```js
const Winter = require("./Winter");
module.exports = Winter.snow;
```

⇡ **Correct** code for this rule:

```js
import Winter from "./Winter";
export default Winter.snow;
```

⇢ **Recommended** code for this rule:

```js
import { snow } from "./Winter";
export default snow;
```

## No Wildcard Import

Do not use wildcard imports. This makes sure to have a single default export.

###### Examples

⇣ **Incorrect** code for this rule:

```js
import * as Winter from "./Winter";
```

⇡ **Correct** code for this rule:

```js
import Winter from "./Winter";
```

## No Export From Import

Do not export directly from an import. Although the one-liner is concise, this ensures consistency by having one clear way to import and one clear way to export.

###### Examples

⇣ **Incorrect** code for this rule:

```js
// filename snow.js
export { snow as default } from "./Winter";
```

⇡ **Correct** code for this rule:

```js
// filename snow.js
import { snow } from "./Winter";
export default snow;
```

## No Duplicate Imports

Only import from a path in one place. The code maintainability is more difficult when having multiple lines that import from the same path.

> ESlint: [no-duplicate-imports][5]

###### Examples

⇣ **Incorrect** code for this rule:

```js
import winter from "winter";
// ... other imports
import { snow, frost } from "winter";
```

⇡ **Correct** code for this rule:

```js
import winter, { snow, frost } from "winter";
```

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
import winter, {
  snow,
  frost
} from "winter";
```

<!--lint enable no-missing-blank-lines-->

## No Mutable Exports

Do not export mutable bindings. Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.

> ESLint: [import/no-mutable-exports][2]

###### Examples

⇣ **Incorrect** code for this rule:

```js
let season = "winter";
export { season };
```

⇡ **Correct** code for this rule:

```js
const season = "winter";
export { season };
```

## Prefer Default Export

Prefer default export over named export for modules with a single export to increase the code readability and maintainability.

> ESLint: [import/prefer-default-export][4]

###### Examples

⇣ **Incorrect** code for this rule:

```js
export function snow() {}
```

⇡ **Correct** code for this rule:

```js
export default function snow() {}
```

## Imports First

Put all `import` above non-import statements. Since `import` statements are hoisted, keeping them all at the top prevents surprising behavior.

> ESLint: [import/first][1]

###### Examples

⇣ **Incorrect** code for this rule:

```js
import snow from "snow";
snow.fall();

import frost from "frost";
```

⇡ **Correct** code for this rule:

```js
import snow from "snow";
import frost from "frost";

snow.fall();
```

## Multiline Import Indentation

Multiline imports should be indented like multiline array and object literals. The curly braces follow the same indentation rules as every other curly brace block in the style guide.

###### Examples

⇣ **Incorrect** code for this rule:

<!--lint disable no-missing-blank-lines-->
<!-- prettier-ignore -->
```js
import {snow, frost, ice, storm, sparkle} from "winter";
```

⇡ **Correct** code for this rule:

<!-- prettier-ignore -->
```js
import {
  snow,
  frost,
  ice,
  storm,
  sparkle
} from "winter";
```

<!--lint enable no-missing-blank-lines-->

## Avoid Webpack Loader Syntax

Disallow Webpack loader syntax in module import statements. Using Webpack syntax in the imports couples the code to a module bundler. Prefer using the loader syntax in the Webpack configuration `webpack.config.js`.

> ESlint: [import/no-webpack-loader-syntax][3]

###### Examples

⇣ **Incorrect** code for this rule:

```js
import snow from "css!sass!snow.scss";
import frost from "style!css!frost.css";
```

⇡ **Correct** code for this rule:

```js
import snow from "snow.scss";
import frost from "frost.css";
```

[1]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
[2]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
[3]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
[4]: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
[5]: https://eslint.org/docs/latest/rules/no-duplicate-imports
