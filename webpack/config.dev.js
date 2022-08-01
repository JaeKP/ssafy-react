const { getPathFromRoot } = require('./config.utils');

const devConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: {
    main: getPathFromRoot('src/index.js'),
  },
  output: {
    path: getPathFromRoot('public'),
    filename: 'js/[name].js',
  },
};

module.exports = devConfig;
