const {override,
  addWebpackAlias,
  addWebpackExternals,
  addWebpackPlugin,
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

const setAnalyze = () => config => {
  console.log(process.env);
  
  if(process.env.REACT_APP_ANALYZE) {
    console.log(config.plugins.length);
    
    config.plugins.push(new BundleAnalyzerPlugin())
  }
  return config
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
    Vue: 'Vue'
  }),
  addWebpackPlugin(new webpack.ProvidePlugin({
    React: 'react',
    Component: ['react', 'Component']
  })),
  addWebpackPlugin(new WebpackBar()),
  addWebpackPlugin(new FriendlyErrorsWebpackPlugin()),
  addWebpackPlugin(new HardSourceWebpackPlugin())
))