# 🛠️ prettier-eslint-config-hasankzl

A modern, reusable ESLint Flat Config for TypeScript + React projects 

with **Prettier** integration and powerful plugins like `unicorn`, `sonarjs`, and `unused-imports`.

---

## ✨ Features

- ✅ **Strict TypeScript** support
- ⚛️ **React** & **React Hooks** best practices
- 🎨 **Prettier** formatting integration
- 🦄 **Modern JavaScript** patterns via `eslint-plugin-unicorn`
- 🔍 **Code quality** insights with `eslint-plugin-sonarjs`
- 📦 **Dead code removal** using `eslint-plugin-unused-imports`
- 📐 **Organized imports** using `eslint-plugin-import`

---

## 🚀 Installation

Install the required peer dependencies in your project:

```bash
npm install -D \
  eslint \
  prettier \
  typescript \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-prettier \
  eslint-config-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-unicorn \
  eslint-plugin-unused-imports \
  eslint-plugin-import \
  eslint-plugin-sonarjs \
  prettier-eslint-config-hasankzl
```

## ⚙️ Usage

Create an `eslint.config.js` file in the root of your project:

```js
import baseConfig from "prettier-eslint-config-hasankzl";

export default baseConfig;
```

Optional: Override or extend rules

```js
import baseConfig from "prettier-eslint-config-hasankzl";

export default [
  ...baseConfig,
  // Add or override custom rules here
  {
    rules: {
      "no-console": "warn",
    },
  },
];
```
Create an `prettier.config.js` file in the root of your project:

```js
import basePrettierrc from 'prettier-eslint-config-hasankzl/prettier.config.js';

export default {
  ...basePrettierrc,
};

```

Optional: Override or extend rules

```js
import basePrettierrc from 'prettier-eslint-config-hasankzl/prettier.config.js';

export default {
  ...basePrettierrc,
  printWidth:80
};

```
if you decided to override prettier config you should override eslint config aswell

```js
import baseConfig from 'prettier-eslint-config-hasankzl';
import prettierConfig from './prettier.config.js';
import prettierPlugin from 'eslint-plugin-prettier';
export default [
  ...baseConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', prettierConfig],
    },
  },
];
```

Useful scripts

```
    "lint": "eslint .",
    "lint:format": "eslint . --fix",
    "prettier:format": "prettier --write .",
```
