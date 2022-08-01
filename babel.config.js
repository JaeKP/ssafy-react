module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isDevelopment = api.env('developoment');
  return {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        { development: isDevelopment, runtime: 'automatic' },
      ],
    ],
    ...(isDevelopment && { plugins: ['react-refresh/babel'] }),
  };
};
