const optimization = {
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
        maxSize: 240000, // 240kb
      },
    },
  },
};

export default optimization;
