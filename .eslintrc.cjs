/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    // 'no-case-declarations': 'off',
    // 'no-unused-vars': 'warn',
    // 'no-undef': 'warn',
    // 'unused-imports/no-unused-imports': 'warn',
  },
};
