const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/javascripts/index.js',
    './src/scss/main.scss',
  ],
  output: {
    filename: './javascripts/bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          /* inline if smaller than 10 KB, otherwise load as a file */
          loader: 'url-loader',
          options: {
            outputPath: './assets/images',
            limit: 10000,
          },
        }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: './assets/images',
        },
      },
      {
        test: /\.(eot|ttf|woff2?|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './assets/fonts',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'html', 'views', 'index.html'),
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets/favicon',
        to: './assets/favicon',
      },
    ]),
  ],
};
