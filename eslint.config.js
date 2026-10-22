import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default [
  { ignores: ['dist/**'] },
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      // Component file names (top.vue, index.vue) predate this rule.
      'vue/multi-word-component-names': 'off',
    },
  },
];
