import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
export default [
  {
    ignores: [
      'dist',
      'build',
      'node_modules',
      'vite.config.ts',
      'src/api',
      'orval.config.ts',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.app.json',
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      sonarjs,
      unicorn: eslintPluginUnicorn,
      'react-hooks': reactHooks,
      '@typescript-eslint': tsPlugin,
      'unused-imports': unusedImportsPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Recommended rules
      ...tsPlugin.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      'unicorn/prefer-logical-operator-over-ternary': 'error',
      'unicorn/filename-case': ['warn', { case: 'pascalCase' }],
      'unicorn/prefer-ternary': 'warn',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-useless-undefined': 'warn',
      'unicorn/prefer-includes': 'warn',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      // Console usage
      'no-console': 'error',

      // Disallow debugger
      'no-debugger': 'error',

      // Prefer const
      'prefer-const': [
        'error',
        { destructuring: 'all', ignoreReadBeforeAssign: true },
      ],

      // Import order (sorted and grouped)
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // React rules
      'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/self-closing-comp': 'error',
      'react/react-in-jsx-scope': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Empty lines
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
