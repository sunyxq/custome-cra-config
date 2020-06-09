const {override,
  addWebpackAlias,
  addWebpackExternals,
  addWebpackPlugin,
  addBabelPlugin,
  disableEsLint,
} = require('customize-cra')
const path = require('path')
const webpack = require('webpack')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const WebpackBar = require('webpackbar')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const smp = new SpeedMeasurePlugin()

const isProduct = process.env.NODE_ENV === 'production'

const setAnalyze = () => config => {  
  if(process.env.REACT_APP_ANALYZE) {    
    config.plugins.push(new BundleAnalyzerPlugin())
  }
  return config
}
console.log(process.env.NODE_ENV);

// 方法二
const dropConsole = () => config => {
  if(config.optimization.minimizer) {
    config.optimization.minimize.forEach(minimizer => {
      if(minimizer.constructor.name === 'TerserPlugin') {
        minimizer.options.terserOptions.compress.drop_console = true
      }
    })
  }
}


module.exports = smp.wrap(override(
  setAnalyze(),
  disableEsLint(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@component': path.resolve(__dirname, 'src/component'),
  }),
  addWebpackExternals({
    jquery: 'jQuery',
    // Vue: 'Vue'
  }),
  addWebpackPlugin(new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  })),
  addWebpackPlugin(new WebpackBar()),
  addWebpackPlugin(new FriendlyErrorsWebpackPlugin()),
  addWebpackPlugin(new HardSourceWebpackPlugin()),
  // 方法一
  isProduct && addBabelPlugin(["transform-remove-console", {exclude: ["warn", "error"]}]),
))