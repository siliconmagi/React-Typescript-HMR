const webpack = require('webpack');
const helpers = require('./helpers');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    helpers.root('src/index.tsx'),
  ],
  output: {
    path: helpers.root('dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    chunkFilename: '[id].[hash:8].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [helpers.root('src'), helpers.root('node_modules')],
    // alias: {
      // 'react': 'inferno-compat',
      // 'react-dom': 'inferno-compat'
    // },
  },
  module: {
    rules:
      [
        {
          test: /tsx?$/, //testing from common
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'react', 'stage-3'],
              plugins: ['react-hot-loader/babel'],
            },
          }, {
            loader: 'awesome-typescript-loader',
          }],
        },
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CheckerPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
};

