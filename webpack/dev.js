const { merge } = require('webpack-merge');
const commonConfig = require('./common');

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
});

module.exports = devConfig;
