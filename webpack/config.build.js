const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const devConfig = require('./config.dev');

const buildConfig = {
  mode: 'production',
  devtool: false,
  entry: {
    main: {
      import: devConfig.entry.main,
      dependOn: 'reactVenders',
    },
    reactVenders: ['react', 'react-dom'],
  },
  output: {
    ...devConfig.output,
    filename: 'js/[name].min.js',
    chunkFilename: 'js/[name].chunk.js',
  },
  module: {
    rules: devConfig.module.rules.map((rule) => {
      const reg = rule.test;
      if (reg.test('.css')) {
        return {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, ...rule.use.slice(1)],
        };
      }
      return rule;
    }),
  },
  plugins: [
    ...devConfig.plugins,
    new MiniCssExtractPlugin({
      filename: 'css/style.min.css',
    }),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin(),
    ],
  },
};

module.exports = merge(devConfig, buildConfig);
