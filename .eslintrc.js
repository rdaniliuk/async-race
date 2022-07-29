module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-debugger': 'off',
    'no-console': 0,
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
  },
  ignorePatterns: ['webpack.config.js'],
};
