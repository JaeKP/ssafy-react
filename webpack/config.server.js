const { merge } = require('webpack-merge');
const devConfig = require('./config.dev');

const serverConfig = {
  devServer: {
    host: 'localhost',
    port: 3000,
    open: false,
    static: ['public'],
    compress: true,
    client: {
      overlay: true,
    },
  },
};

module.exports = merge(devConfig, serverConfig);
