const devConfig = require('./config.dev');
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const __root = process.cwd();

const buildConfig = {
  mode: 'production',
  devtool: false,
  entry: {
    main: {
      import: resolve(__root, 'src/index.js'),
      dependOn: 'reactVenders',
    },
    reactVenders: ['react', 'react-dom'],
  },
  output: {
    path: resolve(__root, 'public'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
};

module.exports = merge(devConfig, buildConfig);
