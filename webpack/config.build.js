const devConfig = require('./config.dev');
const { merge } = require('webpack-merge');
const { resolve } = require('path');

const buildConfig = {
  mode: 'production',
  devtool: false,
  output: {
    path: resolve(process.cwd(), 'public'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
};

module.exports = merge(devConfig, buildConfig);
