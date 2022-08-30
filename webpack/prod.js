const { merge } = require('webpack-merge');
const commonConfig = require('./common');

const prodConfig = merge(commonConfig, {
  mode: 'production',
});

module.exports = prodConfig;
