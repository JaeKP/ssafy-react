let isDevMode = process.env.NODE_ENV.includes('development');

const loaders = {
  rules: [
    {
      test: /\.tsx?$/i,
      exclude: /node_modules/,
      use: 'ts-loader',
    },
    {
      test: /\.css$/i,
      use: [
        isDevMode ? 'style-loader' : require('./plugins').cssExtractLoader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: isDevMode ? true : false,
          },
        },
      ],
    },
    {
      type: 'asset/resource',
      test: /\.(jpe?g|gif|png|svg|webp|woff2?|eot|ttf)$/i,
    },
  ],
};

exports.loaders = loaders;
