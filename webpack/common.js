const { setPath } = require('./utils');
const { loaders } = require('./loaders');
const { plugins, cssMinimizer } = require('./plugins');

const commonConfig = {
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    alias: {
      '@': setPath('src'),
    },
  },
  entry: {
    popup: {
      import: setPath('src/popup/Popup.tsx'),
      dependOn: 'venders',
    },
    options: {
      import: setPath('src/options/Options.tsx'),
      dependOn: 'venders',
    },
    venders: ['react', 'react-dom'],
    background: setPath('src/background.ts'),
  },
  output: {
    path: setPath('dist'),
    filename: '[name].js',
  },
  module: loaders,
  plugins,
  optimization: {
    minimizer: [...cssMinimizer],
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'background';
      },
    },
  },
};

module.exports = commonConfig;
