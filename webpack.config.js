const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
  entry: {
    main: ['./src/js/main.js', './src/scss/app.scss']
  },
  devtool: 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {

    rules: [{ // regular css files
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
      },
    ]
  },
};
