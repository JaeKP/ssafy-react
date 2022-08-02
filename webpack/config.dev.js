const { getPathFromRoot } = require('./config.utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
      {
        test: /\.(gif|jpe?g|png|webp)$/i,
        type: 'asset',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          and: [/\.(ts|js)x?$/i],
        },
        use: [
          'babel-loader',
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              titleProp: true,
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
          'url-loader',
        ],
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
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
