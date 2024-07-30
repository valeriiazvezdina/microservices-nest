module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    /* BEST PRACTICES */

    semi: ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-unused-expressions': 'error',

    // require let or const instead of var
    'no-var': 'error',

    // disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // disallow use of eval()
    'no-eval': 'error',

    // disallow var and named functions in global scope
    'no-implicit-globals': 'off',

    // disallow use of new operator for Function object
    'no-new-func': 'error',

    // disallow creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // disallow redundant 'return await'
    'no-return-await': 'error',

    // disallow self assignment
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow use of comma operator
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'off',

    // disallow unnessecary catch clauses
    'no-useless-catch': 'error',

    // disallow useless string concatenation
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    'no-useless-escape': 'error',

    // disallow redundant return;
    'no-useless-return': 'error',

    // disallow use of void operator
    'no-void': 'error',

    // require Yoda conditions
    yoda: 'error',

    /* NODE JS */

    // disallow use of the Buffer()
    'no-buffer-constructor': 'error',

    // disallow use of process.env
    'no-process-env': 'off',

    // disallow process.exit()
    'no-process-exit': 'off',

    /* ERRORS */

    // enforce for loop update clause moving the counter in the right direction
    'for-direction': 'error',

    // disallow use of console
    'no-console': 'error',

    // disallow empty statements
    'no-empty': 'error',

    // disallow doble-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statements
    'no-unreachable': 'error',

    // prettier
    'prettier/prettier': 0,
  },
};
