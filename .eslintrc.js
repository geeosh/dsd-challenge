module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'jest', 'prettier'],
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    __DEV__: false,
    __PROD__: false,
    __DEBUG__: false,
    fetch: true,
    webpack: true,
    React: true,
    // for enzyme tests
    shallow: true,
    render: true,
    mount: true,
    relPath: true,
    localStorage: true,
    FileReader: true,
    DOMParser: true,
    showSpinnerOnElement: true,
    hideSpinnerOnElement: true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {},
    },
    'module-resolver': {},
    'import/core-modules': ['styled-jsx/css'],
  },
  rules: {
    'arrow-parens': [0, 'as-needed'],
    // because of all of our rails API snake_case variables
    camelcase: 0,
    'func-names': 0,
    'import/no-absolute-path': 0,
    'import/extensions': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 0,
    'prettier/prettier': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        // this is the part we changed... annoying when it wants:
        // ;({ variable } = object) -- instead of:
        // variable = object.variable
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    quotes: ['warn', 'single'],
    radix: ['error', 'as-needed'],
    // maybe enable later, but at the moment it would be too much work to add it
    // to the current code
    'react/prop-types': 'off',
    'space-before-function-paren': 0,
    'react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-closing-tag-location': 0,
    'react/no-did-mount-set-state': 0,
    'react/sort-comp': [
      1,
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
  },
}
