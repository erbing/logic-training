const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpackConfig = {
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + 'dist',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: ['vue-loader'],
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(woff|eot|ttf|svg)(\?.*)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../wx/index.shtml'),
    }),
    new VueLoaderPlugin(),
    //new ExtractTextPlugin("app/assets/icon/iconfont.css")
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    host: '127.0.0.1',
    port: '8090',
  },
  mode: 'none',
  node: {
    fs: 'empty',
  },
};

module.exports = webpackConfig;
