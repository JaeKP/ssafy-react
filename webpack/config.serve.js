const { merge } = require('webpack-merge');
const devConfig = require('./config.dev');

const serverConfig = {
  devServer: {
    port: 3000,
    compress: true,
    client: {
      overlay: true,
    },
  },
};

module.exports = merge(devConfig, serverConfig);
