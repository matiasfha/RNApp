module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  globals: {
    fetch: true
  },
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": "off",
    "prettier/prettier": ["error", { singleQuote: true }],
    "no-prototype-builtins": "off"
  }
};
