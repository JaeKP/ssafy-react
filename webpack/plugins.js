const { setPath, getHtmlWebpackPluginList } = require('./utils');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false,
  }),
  new CopyPlugin({
    patterns: [
      {
        from: setPath('src/static'),
        to: setPath('dist'),
      },
    ],
  }),
  ...getHtmlWebpackPluginList(HtmlWebpackPlugin, [
    {
      name: 'popup',
      title: 'Chrome 익스텐션 with React',
      dependOn: ['venders'],
    },
    {
      name: 'options',
      title: '옵션 ← Chrome 익스텐션 with React',
      dependOn: ['venders'],
    },
  ]),
  new MiniCssExtractPlugin(),
].filter(Boolean);

exports.cssExtractLoader = MiniCssExtractPlugin.loader;
exports.cssMinimizer = [new CssMinimizerPlugin()];
exports.plugins = plugins;
