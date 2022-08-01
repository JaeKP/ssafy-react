const postcssNormalize = require('postcss-normalize');

module.exports = {
  ident: 'postcss',
  plugins: [
    postcssNormalize(),
    [
      'postcss-preset-env',
      {
        stage: 0,
        autoprefixer: { grid: true },
      },
    ],
  ],
};
