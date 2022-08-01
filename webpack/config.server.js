const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const devConfig = require('./config.dev');

const serverConfig = {
  devServer: {
    host: 'localhost',
    port: 3000,
    open: false,
    static: ['public'],
    compress: true,
    hot: true,
    client: {
      overlay: true,
    },
  },
  plugins: [...devConfig.plugins, new ReactRefreshWebpackPlugin()].filter(
    Boolean
  ),
};

module.exports = merge(devConfig, serverConfig);
