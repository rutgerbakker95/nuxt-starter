import { defineConfig } from 'eslint-define-config';
import unicornPlugin from 'eslint-plugin-unicorn';
import vuePlugin from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(defineConfig([
  {
    ignores: ['dist', '.output', '.nuxt', 'node_modules'],
  },

  unicornPlugin.configs.recommended,
  stylistic.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],

  {
    files: ['**/*.ts', '**/*.js', '**/*.vue'],
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/filename-case': ['error', { case: 'kebabCase' }],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      // @TODO nable later
      // 'import/order': ['error', {
      //   'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      //   'newlines-between': 'always',
      // }],
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 1 },
        multiline: { max: 1 },
      }],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/semi': ['error', 'always'],
    },
  },
]));
