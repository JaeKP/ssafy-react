exports.assetsLoader = {
  test: /\.(gif|jpe?g|png|webp)$/i,
  type: 'asset',
};

exports.svgrLoader = {
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
};

exports.jsxLoader = {
  test: /\.jsx?$/i,
  exclude: /node_modules/,
  use: 'babel-loader',
};

const stylesUse = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      importLoaders: 2,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  },
];

exports.stylesLoader = {
  test: /\.s?[ac]ss$/i,
  exclude: /\.module\.s?[ac]ss$/i,
  use: stylesUse,
};

exports.stylesModuleLoader = {
  test: /\.module\.s?[ac]ss$/i,
  use: stylesUse.map((loaderRule, index) => {
    if (index === 1) {
      return {
        loader: 'css-loader',
        options: {
          esModule: false,
          sourceMap: true,
          importLoaders: 2,
          modules: {
            localIdentName: '[name]_[local]__[hash:base64:5]',
            exportLocalsConvention: 'camelCase',
          },
        },
      };
    }
    return loaderRule;
  }),
};

/* BUILD -------------------------------------------------------------------- */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const buildStylesUse = stylesUse.map((loader) => {
  if (typeof loader === 'string') return MiniCssExtractPlugin.loader;
  loader.options.sourceMap = false;
  return loader;
});

exports.buildStylesLoader = {
  test: /\.s?[ac]ss$/i,
  exclude: /\.module\.s?[ac]ss$/i,
  use: buildStylesUse,
};

exports.buildStylesModuleLoader = {
  test: /\.module\.s?[ac]ss$/i,
  use: buildStylesUse.map((loaderRule, index) => {
    if (index === 1) {
      return {
        loader: 'css-loader',
        options: {
          sourceMap: false,
          importLoaders: 2,
          modules: {
            localIdentName: '[hash:base64:5]',
            exportLocalsConvention: 'camelCase',
          },
        },
      };
    }
    return loaderRule;
  }),
};
