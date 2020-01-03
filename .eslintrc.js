module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": process.env.NODE_env === "production" ? "error" : "off",
    "no-debugguer": process.env.NODE_env === "product" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
