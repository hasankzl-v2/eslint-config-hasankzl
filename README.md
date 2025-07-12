# eslint-config-hasankzl

A modern, reusable ESLint Flat Config for TypeScript + React projects 
with sensible defaults, Prettier integration, and powerful plugins like `unicorn`, `sonarjs`, and `unused-imports`.

## ✨ Features

- ✅ TypeScript support with strict linting
- ⚛️ React & React Hooks rules
- 🎨 Prettier formatting integration
- 🦄 Modern JS best practices with `eslint-plugin-unicorn`
- 🔍 Code quality enhancements via `eslint-plugin-sonarjs`
- 📐 Organized import sorting

---

## 🚀 Installation

Install all required dependencies:

```bash
npm install -D \
  eslint \
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
  eslint-config-hasankzl

```
## ⚙️ Usage

Create an `eslint.config.js` file in the root of your project:

```js
import baseConfig from 'eslint-config-hasankzl';

export default baseConfig;
```


Optional: Override or extend rules

```js
import baseConfig from 'eslint-config-hasankzl';


export default [
  ...baseConfig,
   // Add or override custom rules here
  {
    rules: {
      'no-console': 'warn',

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
