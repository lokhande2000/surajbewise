import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**', 'prettierrc.js'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptEslintParser,
      globals: {
        process: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: '.',
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
      import: eslintPluginImport,
      'unused-imports': unusedImports,
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      // JavaScript Core Rules
      // Fundamental rules to prevent common JavaScript errors
      'no-console': ['error'],
      'no-debugger': 'error',
      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      'no-var': 'error',
      'no-duplicate-imports': 'error',
      'no-undef': 'error',
      'no-return-await': 'error',
      'no-promise-executor-return': 'error',
      'require-atomic-updates': 'error',
      'no-nested-ternary': 'error',
      'no-unreachable': 'error',
      'no-constant-condition': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-loss-of-precision': 'error',

      // Code Style and Formatting
      // Rules for consistent code appearance
      indent: ['error', 2],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true,
        },
      ],

      // React Rules
      // Rules specific to React components and patterns
      'react/jsx-key': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-leaked-render': [
        'error',
        {
          validStrategies: ['ternary', 'coerce'],
        },
      ],
      'react/jsx-no-constructed-context-values': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowFunctions: false,
        },
      ],

      // React Hooks Rules
      // Rules specific to React Hooks usage
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript Rules
      // Type safety and TypeScript-specific patterns
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',

      // Import/Export Rules
      // Module organization and dependency management
      'import/no-cycle': 'error',
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
          'newlines-between': 'always',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],

      // Disabled Rules in favor of TypeScript versions
      'no-shadow': 'off',

      // Add Prettier rules
      'prettier/prettier': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysShowTryExtensions: true,
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
];
