const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const devConfig = require('./config.dev');
const { getPathFromRoot } = require('./utils');
const {
  assetsLoader,
  jsxLoader,
  svgrLoader,
  buildStylesLoader,
  buildStylesModuleLoader,
} = require('./loaders');

const buildConfig = {
  mode: 'production',
  devtool: false,
  entry: {
    reactVenders: ['react', 'react-dom'],
    main: {
      import: devConfig.entry.main,
      dependOn: 'reactVenders',
    },
  },
  output: {
    ...devConfig.output,
    path: getPathFromRoot('build'),
    filename: 'js/[name].min.js',
    chunkFilename: 'js/[name].chunk.min.js',
  },
  module: {
    rules: [
      jsxLoader,
      assetsLoader,
      svgrLoader,
      buildStylesLoader,
      buildStylesModuleLoader,
    ],
  },
  plugins: [
    ...devConfig.plugins,
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin(),
    ],
  },
};

module.exports = merge(devConfig, buildConfig);
