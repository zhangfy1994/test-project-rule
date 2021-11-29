const { merge } = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpackCommonConfig = require("./common");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  output: {
    // publicPath: "/aaa/",
    path: path.resolve(__dirname, "cache"),
    filename: "[name].js",
  },
  devServer: {
    port: 8888,
    hot: true,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
  ],
});
