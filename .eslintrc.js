module.exports = {
  extends: [
    'alloy',
    'alloy/typescript',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    // mocha: true,
    // jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { modules: true },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    // 禁止使用 var
    "prettier/prettier": "error",
    'no-var': 'error',
    'no-undef': 0,
    'default-case-last': 0,
    'no-useless-backreference': 0,
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-invalid-this': 0,
  },
};