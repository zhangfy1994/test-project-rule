const { merge } = require("webpack-merge");
const webpack = require("webpack");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpackCommonConfig = require("./common");

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshPlugin(), new webpack.HotModuleReplacementPlugin()],
});
