const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './src/main.jsx'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // compiling react to js
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env', 
            ['@babel/react', {"runtime": "automatic"}]
          ]
        }
      },
      // compiling scss to css
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // image loader
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html'
    }),
  ],
  devServer: {
    static: {
      publicPath: '/build',
    },
    proxy: {
      '/api': 'http://localhost:8888',
      '/authorize': 'http://localhost:8888'
    },
    historyApiFallback: true,
  }
}