const rootDir = __dirname
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const jsonLoader = require('json-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: rootDir + '/src/browser/index.html',
  filename: 'index.html',
  inject: 'body',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true
  }
})

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/browser/main.js',
  ],
  module: {
    loaders: [
      {test:/\.js$/, loaders: ['react-hot', 'babel-loader'], include: `${rootDir}/src/browser`},
      {include:  /\.json$/, loaders: ['json-loader']},
      {
        test: /\.css$/, use: [ 'style-loader', 'css-loader'],
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: __dirname + '/src/browser'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${rootDir}/src/public/dist`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('style.css'),
  ]
}
