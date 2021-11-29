module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    indent: "off",
    "no-console": "off",
    "import/order": "off",
    "@typescript-eslint/camelcase": "off",
    camelcase: "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/indent": "off",
    "new-cap": "off",
    "default-case": "off",
    "react/jsx-boolean-value": "off",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
    // indent: ["warn", 2],
    "@typescript-eslint/no-empty-interface": "off",
    // React17 jsx改动
    // "react/jsx-uses-react": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    // "@typescript-eslint/no-unused-vars": "warn",
    // 该规则旨在减少阅读代码时所需的滚动。当超过空行的最大数量时，它将发出警告。
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
  },
};
