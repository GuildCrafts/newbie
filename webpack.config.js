const rootDir = __dirname
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const jsonLoader = require('json-loader');
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
      {include:  /\.json$/, loaders: ['json-loader']}
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${rootDir}/src/public/dist`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HTMLWebpackPluginConfig
  ]
}
