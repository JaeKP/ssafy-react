const { getPathFromRoot } = require('./config.utils');

const devConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@/app': [getPathFromRoot('src/app')],
    },
  },
  entry: {
    main: getPathFromRoot('src/index.jsx'),
  },
  output: {
    path: getPathFromRoot('public'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

module.exports = devConfig;
