// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import checkFile from 'eslint-plugin-check-file';
import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'public/mockServiceWorker.js']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      // 스타일/컨벤션: warn
      '@typescript-eslint/naming-convention': [
        'warn',
        // 변수/상수: camelCase, 컴포넌트 PascalCase, 상수 UPPER_SNAKE_CASE
        { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
        // 함수: camelCase (동사 시작은 리뷰로 확인), 컴포넌트는 PascalCase
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        // 타입: PascalCase, I 접두어 금지
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          custom: { regex: '^I[A-Z]', match: false },
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      // 버그/구조 방지: error
      '@typescript-eslint/no-non-null-assertion': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
    },
  },
  {
    files: ['src/**/*'],
    plugins: { 'check-file': checkFile },
    rules: {
      // 파일/폴더 네이밍: warn
      'check-file/filename-naming-convention': [
        'warn',
        {
          // 컴포넌트: 파일명 = 컴포넌트명 (PascalCase)
          'src/components/**/*.tsx': 'PASCAL_CASE',
          // 페이지: PascalCase + Page 접미사 (ProgramListPage.tsx)
          'src/pages/**/*.tsx': '[A-Z]*([A-Za-z0-9])Page',
          // 훅: use 접두어 + camelCase (useBookmark.ts)
          'src/hooks/**/*.ts': 'use[A-Z]*([A-Za-z0-9])',
          // Zustand store: {이름}Store.ts (authStore.ts)
          'src/store/**/*.ts': '[a-z]*([A-Za-z0-9])Store',
          // 그 외: camelCase
          'src/{api,constants,mock,types,utils}/**/*.ts': 'CAMEL_CASE',
        },
        { ignoreMiddleExtensions: true },
      ],
      // 폴더: 소문자, 여러 단어면 kebab-case
      'check-file/folder-naming-convention': ['warn', { 'src/**/': 'KEBAB_CASE' }],
    },
  },
  {
    files: ['src/{components,pages,hooks}/**/*.{ts,tsx}'],
    rules: {
      // 구조 규칙: error
      'no-restricted-imports': [
        'error',
        { paths: [{ name: 'axios', message: 'src/api/ 함수를 사용하세요' }] },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['src/utils/date.ts', 'src/**/*.test.{ts,tsx}'],
    rules: {
      // 구조 규칙: error
      'no-restricted-syntax': [
        'error',
        {
          selector: "NewExpression[callee.name='Date']",
          message: 'utils/date.ts의 함수를 사용하세요',
        },
        {
          selector: 'TSEnumDeclaration',
          message: 'enum 대신 as const 객체 + union 타입을 사용하세요',
        },
      ],
    },
  },
  ...storybook.configs['flat/recommended'],
]);
