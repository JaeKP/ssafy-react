const { merge } = require('webpack-merge');
const devConfig = require('./config.dev');

const buildConfig = {
  mode: 'production',
  devtool: false,
  output: {
    ...devConfig.output,
    filename: 'js/[name].min.js',
  },
};

module.exports = merge(devConfig, buildConfig);
