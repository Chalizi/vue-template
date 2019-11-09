const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  resolve: {
    alias: {
      'vue$': "vue/dist/vue.js"
    }
  },
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[hash:8]-[name].js"
  },
  devServer: {
    contentBase: "src",
    open: true,
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: "url-loader?limit=7631&name=[hash:8]-[name].[ext]"
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: "url-loader"
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
};
