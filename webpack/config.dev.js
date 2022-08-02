const { getPathFromRoot } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {
  assetsLoader,
  jsxLoader,
  svgrLoader,
  stylesLoader,
  stylesModuleLoader,
} = require('./loaders');

const devConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': getPathFromRoot('src'),
    },
  },
  entry: {
    main: getPathFromRoot('src/index.jsx'),
  },
  output: {
    path: getPathFromRoot('dist'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].chunk.js',
    assetModuleFilename: 'assets/[name].[hash].[ext]',
  },
  module: {
    rules: [
      jsxLoader,
      assetsLoader,
      svgrLoader,
      stylesModuleLoader,
      stylesLoader,
    ].filter(Boolean),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React 개발 환경 매뉴얼 구성',
      template: getPathFromRoot('public/index.html'),
      templateParameters: {
        lang: 'ko-KR',
        rootId: 'root',
      },
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#377ae6',
      },
      favicon: getPathFromRoot('src/assets/reactjs-icon.svg'),
      xhtml: true,
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ].filter(Boolean),
};

module.exports = devConfig;
