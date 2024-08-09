// module.exports = {
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:@typescript-eslint/recommended',
//     '.prettierrc',
//     'plugin:prettier/recommended',
//   ],
//   rules: {
//     'prettier/prettier': ['error'],
//     'react/prop-types': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-var-requires': 'off',
//     '@typescript-eslint/ban-ts-comment': 'warn',
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
// };

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "prettier/prettier": ["error"],
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
  },
};
