const { getPathFromRoot } = require('./config.utils');

const devConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@/app': [getPathFromRoot('src/app')],
      '@/api': [getPathFromRoot('src/api')],
      '@/styles': [getPathFromRoot('src/styles')],
      '@/components': [getPathFromRoot('src/components')],
    },
  },
  entry: {
    main: getPathFromRoot('src/index.jsx'),
  },
  output: {
    path: getPathFromRoot('public'),
    filename: 'js/[name].js',
    chunkname: 'js/[name].chunk.js',
    assetModuleFilename: 'assets/[name].[hash].[ext]',
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|webp|svg)$/i,
        type: 'asset',
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = devConfig;
