module.exports = {
  presets: [
    "@babel/preset-flow",
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: false,
        targets: {
          browsers: ["last 2 versions", "safari >= 7"]
        }
      }
    ],
    "@babel/preset-react"
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-syntax-dynamic-import"],
      presets: [["@babel/preset-env"], "@babel/preset-react"]
    }
  },
  plugins: [
    "react-hot-loader/babel",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs",
    ["@babel/plugin-proposal-class-properties", { loose: true }]
  ]
};
