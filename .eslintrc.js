module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'jest': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'tsconfigRootDir': __dirname,
    'project': './tsconfig.eslint.json',
    'sourceType': 'module',
    'extraFileExtensions': ['.json'],
  },
  'plugins': ['@typescript-eslint', 'jest'],
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.ts'],
      },
    },
  },
  'rules': {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        'types': {
          'Object': {
            'message':
              "You almost certainly don't want to use a primitive constructor: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types",
            'fixWith': 'object',
          },
          'Boolean': {
            'message':
              "You almost certainly don't want to use a primitive constructor: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types",
            'fixWith': 'boolean',
          },
          'Number': {
            'message':
              "You almost certainly don't want to use a primitive constructor: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types",
            'fixWith': 'number',
          },
          'String': {
            'message':
              "You almost certainly don't want to use a primitive constructor: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types",
            'fixWith': 'string',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { 'args': 'after-used', 'ignoreRestSiblings': true },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/camelcase': ['error', { 'properties': 'never' }],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'global-require': 'off',
    'import/first': 'off',
    'import/named': 'off',
    'import/newline-after-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'jest/no-export': 'off',
    'jest/no-jasmine-globals': 'off',
    'jest/no-try-expect': 'off',
    'jest/valid-expect': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'new-cap': 'off',
    'no-async-promise-executor': 'off',
    'no-console': 'error',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-template-curly-in-string': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'no-useless-catch': 'off',
    'no-useless-escape': 'off',
    'prefer-destructuring': 'off',
    'prettier/prettier': 'error',
  },
};
