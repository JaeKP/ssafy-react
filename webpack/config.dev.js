const { getPathFromRoot } = require('./config.utils');

const devConfig = {
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': getPathFromRoot('src'),
    },
  },
  entry: {
    main: getPathFromRoot('src/index.jsx'),
  },
  output: {
    path: getPathFromRoot('public'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    assetModuleFilename: 'assets/[name].[hash].[ext]',
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpe?g|png|webp)$/i,
        type: 'asset',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          and: [/\.(ts|js)x?$/i],
        },
        use: [
          'babel-loader',
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              titleProp: true,
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
          'url-loader',
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = devConfig;
