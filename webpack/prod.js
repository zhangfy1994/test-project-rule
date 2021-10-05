const { merge } = require("webpack-merge");
const webpack = require("webpack");
const webpackCommonConfig = require("./common");

module.exports = merge(webpackCommonConfig, {
  mode: "production",
  devtool: "source-map",
});
