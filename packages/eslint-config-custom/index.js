module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc', 'svelte3', 'react-hooks'],
  extends: [
    'standard',
    'next',
    'turbo',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '18',
    },
    'svelte3/typescript': "() => require('typescript')",
  },
  rules: {
    'tsdoc/syntax': 'warn',
    'space-before-function-parens': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-fragments': 0,
    'react/no-unused-prop-types': 0,
    'no-unused-vars': 0,
    'import/export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};