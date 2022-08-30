const { merge } = require('webpack-merge');
const commonConfig = require('./common');

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
});

module.exports = devConfig;
