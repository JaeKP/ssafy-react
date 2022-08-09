const { resolve } = require('path');
const __root = process.cwd();

const devConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: {
    main: resolve(__root, 'src/index.js'),
  },
  output: {
    path: resolve(__root, 'public'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};

module.exports = devConfig;
exports.__root = __root;
