const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x$/,
        loader: "babel-loader",
        options: {
          plugins: [require.resolve("react-refresh/babel")], // react-refresh 添加
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
    ],
  },
};
