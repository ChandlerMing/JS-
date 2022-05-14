const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(__dirname);

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "main.js")
  },
  output: {
    path: path.resolve(__dirname, "build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}